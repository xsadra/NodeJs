const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./note.js');

//Customize yargs version
yargs.version('1.2.1')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
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

yargs.parse()