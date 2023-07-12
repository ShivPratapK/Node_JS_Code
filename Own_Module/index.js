
/*----------  Suitable for only one function or variable  ----------*/
/*
const add = require('./oper');
console.log(add(5, 6));
*/


/*----------  First way for Multiple function and variable  ----------*/
/*
const oper = require('./oper');
console.log(oper.sub(10,5));
console.log(oper);
*/


/*----------  First, Second and Third way for Multiple function and variable  ----------*/
/*
const {add, sub, multi, author} = require('./oper');
console.log(author);
console.log(multi(4,10));
*/


/*----------  This syntax also works for Third way  ----------*/
const oper = require('./oper');
console.log(oper.author);
console.log(oper);
console.log(oper.multi(10, 1000));


