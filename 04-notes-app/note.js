const fs = require('fs')

const getNotes = function () {
    return 'Your Notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
}

const loadNotes = function () {
    try {
        const dataBuffre = fs.readFileSync('notes.json')    
        const dataJSON = dataBuffre.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}