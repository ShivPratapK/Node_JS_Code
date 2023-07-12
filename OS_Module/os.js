const os = require('os');

const bitVersion = os.arch();
console.log(bitVersion);

const totalMemory = os.totalmem();
console.log(totalMemory/1024/1024/1024, "GB");

const freeMemory = os.freemem();
console.log(freeMemory/1024/1024/1024, "GB");

const operatingSystem = os.type();
console.log(operatingSystem);




