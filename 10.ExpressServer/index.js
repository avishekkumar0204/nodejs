var express = require('express')
var app = express()
const hostname = '127.0.0.1';
const port = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get("/contact", function (req, res) {
  res.send("Hello World from contact page");
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});