//JSON: Javascript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages
...not just in Javascript.
*/

const myObj = {
  myName: "Manny",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.myName);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.myName);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
