const fs = require("fs");
// Synchronus
fs.writeFileSync("sync.txt", "Hello World");
const syncData = fs.readFileSync("sync.txt", "utf-8");
console.log(syncData);
console.log("After reading...");

// Asynchronous
console.log("Asynchronous starts from here...");
fs.writeFile("async.txt", "Hello world Async", function (err) {
    console.log("Async file created");
});
const asyncData = fs.readFile("async.txt", "utf-8", function (err, response) {
    console.log(response);
});
console.log("After async");

