const fs = require('fs')

const getNotes = function () {
    return 'Your Notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length > 0) {
        console.log('Note title taken!');
        return
    }

    notes.push({
        title: title,
        body: body
    })
    saveNote(notes)
    console.log('New note added.');
    
}

const saveNote = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
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