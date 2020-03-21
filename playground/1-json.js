const fs = require('fs')

// const objMe = {
//     name: 'Sadra',
//     age : 26,
//     job: 'programmer'
// }
// const meJSON = JSON.stringify(objMe)
// console.log(meJSON);
// fs.writeFileSync('1-json.json', meJSON)

const dataBuffer =  fs.readFileSync('1-json.json')
dataJSON = dataBuffer.toString()
data = JSON.parse(dataJSON)

data.name = 'Mr Sadra'
data.age = 27

const editedDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', editedDataJSON)

