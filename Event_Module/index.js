
/*----------  Syntax for initialising events  ----------*/
const EventEmitter = require('events');
const event = new EventEmitter();


/*----------  fire events- we can create multiple function with one events ----------*/
event.on('sayMyName', () => {
    console.log("Shiv is my name");
});

event.on('sayMyName', () => {
    console.log("What's your name");
});


/*----------  Creating own event  ----------*/
event.emit('sayMyName',200,'ok');
