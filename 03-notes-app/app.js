const validator = require('validator')
const getNotes = require('./note.js')

const notes = getNotes()

console.log(notes);

console.log(validator.isEmail('info@sadra.at'))
console.log(validator.isURL('sadra.at'))
