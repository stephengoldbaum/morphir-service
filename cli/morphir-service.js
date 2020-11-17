#!/usr/bin/env node
'use strict'

// NPM imports
const path = require('path')
const commander = require('commander')
const cli = require('./cli')

// Set up Commander
const program = new commander.Command()
program
    .name('morphir-service')
    .description('Generate code from Morphir IR')
    .option('-i, --input <path>', 'Path to the Morphir IR file from which to generate.', 'morphir-ir.json')
    .option('-o, --output <path>', 'Target location where the generated code will be saved.', './dist')
    .option('-t, --target <type>', 'Language to Generate (Scala | SpringBoot | Dapr', 'Scala')
    .parse(process.argv)


cli.gen(program.input, path.resolve(program.output), program.opts())
    .then(() => {
        console.log("Done.")
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

