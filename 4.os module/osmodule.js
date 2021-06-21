const os = require("os");
const arch = os.arch();
console.log(arch);
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());

const freeRAM = os.freemem();
console.log(freeRAM / 1024 / 1024 / 1024);

const totRAM = os.totalmem();
console.log(totRAM / 1024 / 1024 / 1024);