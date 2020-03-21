const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./note.js')

//Customize yargs version
yargs.version('1.2.1')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new nore')
    }
})

//console.log(yargs.argv);