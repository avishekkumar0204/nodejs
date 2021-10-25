// const obj = {
//     name: "Avishek",
//     roll: 4
// };

// Convert the object to JSON
// Create a new file and write JSON into it
// read that file
// then again convert into obj



const obj = {
    name: "Avishek",
    roll: 4
};
const json=JSON.stringify(obj);
const fs=require("fs");

fs.writeFile("jsonFile.txt",json,(err)=>{
    if(err)
        console.log(err);
    else
        console.log("File created");
})


fs.readFile("jsonFile.txt","utf-8",(err,data)=>{
    if(err)
        console.log(err);
    else
    {
        // let newObj=JSON.parse(data);
        console.log(data);
    }
})

