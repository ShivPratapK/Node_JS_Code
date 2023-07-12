
/*----------  Suitable for only one function or variable  ----------*/
/*
const add = (a,b) => {
    return a+b;
};
module.exports = add;
*/


/*----------  In case of Multiple function and variable  ----------*/
const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const multi = (a,b) => a*b;
let author = "Shiv";

// First Way
/*
module.exports.add = add;
module.exports.sub = sub;
module.exports.multi = multi;
module.exports.author = author;
*/

//Second Way
//module.exports = {add, sub, multi, author};

// Third way
module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    author: author
};
