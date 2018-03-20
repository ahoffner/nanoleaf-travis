#!/usr/bin/env node

require('dotenv').config({path:__dirname+'/../.env'})

require('yargs') // eslint-disable-line
  .commandDir('../lib/commands')
  .help()
  .alias('h', 'help')
  .version()
  .argv
