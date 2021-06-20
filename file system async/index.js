const fs=require("fs");
// In Asynchronous , Call back function is must

fs.writeFile("read1.txt","Hello",function(err){
    console.log("File created");
});

fs.appendFile("read1.txt","World",function(err){
    console.log("Content Added at last");
});

fs.readFile("read1.txt","utf-8",function(err,response){
    console.log(response);
    console.log("Reading File.....");
});
