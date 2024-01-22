#!/usr/bin/env tsx

import { readLevel } from 'lib/level/level'
import { homedir } from 'os'

const path = `${homedir()}/data/sky/apk-0-21-5/assets/Data/Levels/CandleSpace/Objects.level.bin`

readLevel(path)
