//console functions:

console.clear();  //clears the console window with any previous messages.

console.log("This is a console log message"); //to print out any values in the console.

console.warn("This is a warning message"); //for any warnings to the user.

console.error("Error message"); //to print out error messages.

console.info("Same as console.log() prints out informational messages"); 

// starts a timer in the console view.
console.time();
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();  //stops the timer.

console.log("\n\n\n");

//-----------------------------------------------------------------------------------------

var greeter = "hey hi";
    
function newFunction() {
    var hello = "hello";
}

console.log(greeter); //shows up in the console.

//console.log(hello); // error: hello is not defined.

//re-declaration is possibe using var
var greet = "hey hi";
var greet = "say Hello instead";
console.log (greet);

//variable hoisting
console.log (hello); //undefined value but the variable declaration is hoisted and doesn't show any errors.
var hello = "say hello"

//weaakness of var
var a = "hey hi";
var times = 4;

if (times > 3) {
    var a = "say Hello instead";   //re-declaration causes value change no matter the condition
}
console.log(a) // "say Hello instead"

console.log("\n");

//let variable declarations
let greeting = "say Hi";
let time = 4;

if (time > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined

    greeting = "say Hello instead";
//let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared


//scope declarations
greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"


//const 
  const g = "say Hi";
//      g = "say Hello instead";// error: Assignment to constant variable.
//const g = "say Hello instead";// error: Identifier 'greeting' has already been declared


console.log("\n\n\n");

//-----------------------------------------------------------------------------------------

var length = 100;                               // Number
var lastName = "Rahul";                         // String
var x = {firstName:"Rahul", lastName:"K M"};    // Object

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
console.log(length);
console.log(lastName);
console.log(x.firstName);
console.log(x.lastName);
console.log("\n\n\n");

