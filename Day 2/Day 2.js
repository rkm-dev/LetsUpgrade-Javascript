//prompt

let user = prompt("Hello, please mention your name.");

if(user){
    console.log("Hello, "+user);
}else{
    console.log("hello, User");
}
//--------------------------------------------------------------------

var txt = "a,b,c,d,e";   // String
txt1=txt.split(",");          // Split on commas
//  txt.split(" ");          // Split on spaces
//  txt.split("|");          // Split on pipe

console.log(txt1+"\n");

let str = "HELLO WORLD";
console.log(str.charCodeAt(0)+"\n\n")     // returns 72

console.log(str.charAt(0)+"\n\n");        // returns H

var str1 = "       Hello World!        ";
console.log(str1.trim()+"\n\n");

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
console.log(text+"\n\n");



var text1 = "Hello World!";       // String
console.log(text1)
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2)
var text3 = text1.toUpperCase();  // text3 is text1 converted to upper
console.log(text3+"\n\n")


let str12 = "Please visit Microsoft!";
console.log(str12+"\n\n")
let n = str12.replace("Microsoft", "W3Schools");
console.log(n +"\n\n")


var str15 = "Apple, Banana, Kiwi";
var res = str15.substr(-4);
console.log(res + "\n\n");

//===========================================

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.fill("Kiwi");
console.log(fruits+"\n\n");

var ages = [32, 33, 16, 40];
console.log(ages);

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.filter(checkAdult) +"\n\n");

ages = [3, 10, 18, 20]
console.log(ages.find(checkAdult) +"\n\n");

console.log(ages.findIndex(checkAdult) +"\n\n");

//--------------------------------------------------------------------

let age_confirm = confirm("Are you over 21 ?");

if(age_confirm){
    console.log("Yay, lets have some shots");
}else{
    console.log("Sorry, you're too young for this");
}