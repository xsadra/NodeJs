const  fs = require('fs')

// fs.writeFileSync('note.txt', 'New text file created by FS.')

/// uasing append to add text to existed file

fs.appendFileSync('note.txt', 'add more line to the file.\n')