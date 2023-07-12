const fs = require('fs');


/*----------  Reading file Asynchronus  ----------*/
fs.readFile('read.txt', 'utf-8', (err, data) =>{
    console.log("Asynchronus Way--- ",data);
});
console.log('Asynchronus way');


/*----------  Reading file Synchronus  ----------*/
const data = fs.readFileSync('read.txt', 'utf-8');
console.log("Synchronus Way--- ",data);
console.log('Synchronus way');
