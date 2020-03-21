const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./note.js')

//Customize yargs version
yargs.version('1.2.1')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding the nore')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing the nore')
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('All nores are here!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('your note is here!')
    }
})

console.log(yargs.argv);