#!/bin/bash

## CLI script to batch transform ETC2 compressed .ktx images to .png
## Depends on: https://github.com/alecazam/kram

## Here's a batch example:
# ls -1 .../ETC2/ | sed -e 's/\.ktx$//' | xargs -I {} ./transcode.sh .../ETC2/{}

FILE=$1

## info
# ./kram info -v -i $FILE.ktx 

## transcode: ETC2 KTXv1 => RGBA KTXv1
./kram decode -v -i $FILE.ktx -o $FILE-SRGBA8.ktx

## repackage: KTXv1 => KTXv2
./kram encode -v -i $FILE-SRGBA8.ktx -o $FILE-SRGBA8.ktx2 -f rgba8 -mipnone
rm $FILE-SRGBA8.ktx

## export: KTXv2 RGBA => PNG
node parse.js $FILE-SRGBA8.ktx2 $FILE.png
rm $FILE-SRGBA8.ktx2
echo "=> $FILE.png"

## encode to ASTC4x4
# ./kram encode -v -i $FILE-SRGBA8.ktx -o $FILE-ASTC4.ktx2 -f astc4x4 -mipmin 4
# ./node_modules/.bin/texture-compressor -i $FILE.png -t s3tc -c DXT1 -q normal -o $FILE-s3tc.ktx -m -vb
# ./kram info -v -i $FILE-s3tc.ktx
