/*

Copyright (c) 2015 Harm Hanemaaijer <fgenfb@yahoo.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/

#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <string.h>
// #include <malloc.h>
#include "texgenpack.h"
#include "packing.h"
#include "decode.h"

static char astc_block_size_table[14][2] = {
	{ 4, 4 }, { 5, 4 }, { 5, 5 }, { 6, 5 }, { 6, 6 }, { 8, 5 }, { 8, 6 }, { 8, 8 }, { 10, 5 }, { 10, 6 },
	{ 10, 8 }, { 10, 10 }, { 12, 10 }, { 12, 12 }
	};

int match_astc_block_size(int w, int h) {
	int i;
	for (i = 0; i < 14; i++)
		if (w == astc_block_size_table[i][0] && h == astc_block_size_table[i][1])
			break;
	if (i == 14)
		return - 1;
	return i;
}

int get_astc_block_size_width(int astc_block_type) {
	return astc_block_size_table[astc_block_type][0];
}

int get_astc_block_size_height(int astc_block_type) {
	return astc_block_size_table[astc_block_type][1];
}

int draw_block_rgba_astc(const unsigned char *bitstring, unsigned int *image_buffer, int flags) {
	printf("Error -- ASTC block decoding not implemented.\n");
	exit(1);
}

void convert_astc_texture_to_image(Texture *texture, Image *image) {
	// Create temporary .astc filename.
	char *tmp_filename = tmpnam(NULL);
	char *astc_filename = (char *)alloca(strlen(tmp_filename) + 6);
	strcpy(astc_filename, tmp_filename);
	strcat(astc_filename, ".astc");
	// Save the texture to the file.
	save_astc_file(texture, astc_filename);
	// Create temporary .ktx filename.
	tmp_filename = tmpnam(NULL);
	char *ktx_filename = (char *)alloca(strlen(tmp_filename) + 5);
	strcpy(ktx_filename, tmp_filename);
	strcat(ktx_filename, ".ktx");
	// Execute decoding command.
	char *s = (char *)malloc(strlen(astc_filename) + strlen(ktx_filename) + 40);
	sprintf(s, "astcenc -d %s %s -silentmode", astc_filename, ktx_filename);
	printf("Executing command %s\n", s);
	int r = system(s);
	// Remove the temporary .astc filename,
	remove(astc_filename);
	if (r == - 1) {
		printf("Error executing command during ASTC decoding.\n");
		exit(1);
	}
	free(s);
	// Load the .ktx file.
	load_image(ktx_filename, FILE_TYPE_KTX, image);
	// Remove the temporary .ktx filename.
	remove(ktx_filename);
	// astcenc flips the image during decoding to an uncompressed .ktx file; revert that.
	flip_image_vertical(image);
}

void decompress_astc_file(const char *filename, Image *image) {
	char *tmp_filename = tmpnam(NULL);
	char *ktx_filename = (char *)alloca(strlen(tmp_filename) + 5);
	strcpy(ktx_filename, tmp_filename);
	strcat(ktx_filename, ".ktx");
	// Decode to an uncompressed .ktx file.
	char *s = (char *)malloc(strlen(filename) + strlen(ktx_filename) + 40);
	sprintf(s, "astcenc -d %s %s -silentmode", filename, ktx_filename);
	printf("Executing command %s\n", s);
	int r = system(s);
	if (r == - 1) {
		printf("Error executing command during ASTC decoding.\n");
		exit(1);
	}
	free(s);
	load_image(ktx_filename, FILE_TYPE_KTX, image);
	remove(ktx_filename);
	// astcenc flip the image during decoding to an uncompressed .ktx file; revert that.
	flip_image_vertical(image);
}

void compress_image_to_astc_texture(Image *image, int texture_type, Texture *texture) {
	// Create temporary .png filename
	char *tmp_filename = tmpnam(NULL);
	char *png_filename = (char *)alloca(strlen(tmp_filename) + 5);
	strcpy(png_filename, tmp_filename);
	strcat(png_filename, ".png");
	// Save the image to the file.
	save_png_file(image, png_filename);
	// Create temporary .astc filename
	tmp_filename = tmpnam(NULL);
	char *astc_filename = (char *)alloca(strlen(tmp_filename) + 6);
	strcpy(astc_filename, tmp_filename);
	strcat(astc_filename, ".astc");
	// Execute encoding command.
	char *s = (char *)malloc(strlen(png_filename) + strlen(astc_filename) + 40);
	char *astcenc_speed_option;
	if (option_compression_level < SPEED_FAST)
		astcenc_speed_option = "-fast";
	else if (option_compression_level < SPEED_MEDIUM)
		astcenc_speed_option = "-medium";
	else if (option_compression_level < SPEED_SLOW)
		astcenc_speed_option = "-thorough";
	else
		astcenc_speed_option = "-exhaustive";
	TextureInfo *info = match_texture_type(texture_type);
	sprintf(s, "astcenc -c %s %s %dx%d %s -silentmode", png_filename, astc_filename, info->block_width,
		info->block_height, astcenc_speed_option);
	printf("Executing command %s\n", s);
	int r = system(s);
	remove(png_filename);
	if (r == - 1) {
		printf("Error executing command during ASTC encoding.\n");
		exit(1);
	}
	free(s);
	// Load the created .astc texture.
	load_astc_file(astc_filename, texture);
	remove(astc_filename);
}

