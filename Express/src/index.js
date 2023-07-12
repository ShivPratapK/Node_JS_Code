const express = require('express');
const app = express();
const path = require('path');
let port = 8000;
const filePath = path.join(__dirname, '../views/index.hbs');
console.log(filePath);
console.log(__dirname);

/*----------  To set view engine  ----------*/
app.set('view engine', 'hbs');
app.get('', (req, res) => {
    res.render(filePath);
});


/*----------  Single respond  ----------*/
app.get('/', (req, res) => {
    res.send('hello from express side')
});

app.get('/about', (req, res) => {
    res.send('hello from about side');
});

/*----------  Multiple respond  ----------*/
app.get('/multiple', (req, res) => {
    res.write('<h1>Hello from multiple</h1>');
    res.write('<h1>Hello<h1>');
    res.send();
});


/*----------  If request name is not same as the fileName, then show error  ----------*/
app.get('*', (req, res) => {
    res.send(`page ${req.url.substring(1)} did not found`);
});


app.listen(port, () => {
    console.log('listening the express at Port', port);
});
