#!/usr/bin/env node
const program = require('commander')
program.customArgsParser = args => [ { from: args[0], to: args[1] } ]
require('../lib/edit/edit_command')('entity', 'merge')
