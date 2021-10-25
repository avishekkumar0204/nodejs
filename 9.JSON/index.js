const obj = {
    name: "Avishek",
    roll: 4
};

console.log(typeof (obj));  // object

// Converting object to JSON -> JSON.stringfy(obj)
// JSON and object are not same.
// JSON is used to transfer data from server to client side
const jsonObj = JSON.stringify(obj);
console.log(jsonObj);
console.log(typeof (jsonObj)); // String

// Traversing string(JSON object)
for (var i = 0; i < jsonObj.length; i++)
    console.log(jsonObj[i]);
