const fs = require("fs");
fs.writeFileSync("read.txt", "Hello World");
fs.writeFileSync("read.txt", "All fine!!");

// fs.appendFileSync("read2.txt","Hello");
// fs.appendFileSync("read2.txt","World");

let bufData = fs.readFileSync("read2.txt");

console.log(bufData);

let orgData=bufData.toString();
console.log(orgData);

fs.renameSync("read.txt","read1.txt");