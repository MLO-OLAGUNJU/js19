// Javascript Errors and Error Handling
"use strict";

/*// Reference error
variable = "Manny";
console.log(variable);*/

/* //Syntax Error... Bcoz i added two dots (unexpected token ".")
Object..create(); */

/* // Type Error... Assigning a const twice
const myName = "Manny";
myName = "MLO"; */

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new error("Odd number!");
      }
      console.log("Even number!");
      /* const myName = "Manny";
      myName = "MLO"; */
    } catch (err) {
      // console.warn(err);
      // console.table(err);
      console.error(err.stack); //give all of error detail.. i like this
      // console.error(err.name);
      // console.error(err.message);
      // logTheError(err.stack);
    } finally {
      console.log("........ finally");
      i++;
    }
  }
};
makeError();

/* function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
} */
