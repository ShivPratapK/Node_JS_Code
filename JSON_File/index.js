const fs = require('fs');

const bioData = {
    name: 'Aayush',
    class: 'Graduation', 
    address: 'Siwan'
};


/*----------  Changing Data in JSON Format and creating file  ----------*/
const jsonData = JSON.stringify(bioData);
fs.writeFileSync('text.json', jsonData);


/*----------  Changing JSON file in text format  ----------*/
fs.readFile('text.json', 'utf-8', (err, data) => {
    console.log(data);
    const textData = JSON.parse(data);
    console.log(textData);
});
