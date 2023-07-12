const fs = require('fs');

/*----------  Crating File with Data  ----------*/
fs.writeFileSync('read.txt', "I am learning NodeJs");


/*----------  Updating the file with New Data  ----------*/
fs.writeFileSync('read.txt', "It is changed after previous text.");


/*----------  Reading file and getting data in Buffer Form ----------*/
const data = fs.readFileSync('read.txt');
console.log(data);


/*----------  Reading File and getting Data in Real form ----------*/
const realData = fs.readFileSync('read.txt', 'utf-8');
console.log(realData);


/*----------  Adding extra data in file  ----------*/
fs.appendFileSync('read.txt'," Extra Data Appended Successfully!");
const extraData = fs.readFileSync('read.txt', 'utf-8');
console.log(extraData);



