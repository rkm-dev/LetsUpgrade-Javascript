// Q1

for(i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log(i + " : fizzbuzz");
    }
    else if(i%5 == 0){
        console.log(i + " : buzz");
    }
    else if(i%3 ==0){
        console.log(i + " : fizz")
    }
    else{
        continue;
    }
}
console.log("========================================================== \n\n\n");
//--------------------------------------------------------------------



//Q2
const student = {
    name: "Helsinki",
    age: 24,
    projects : {
        diceGame: "Two player dice game using Javascript"
    }
}
const {name, age, projects, projects:{diceGame}} = student;

//console.log(diceGame);
console.log(`${name} aged ${age} is working on a project called '${Object.keys(projects)[0]}' which is a ${Object.values(projects)[0]}`);

console.log("========================================================== \n\n\n")
//--------------------------------------------------------------------



//Q3
let shoppingList = ['Milk', 'Bread', 'Cereals', 'Corn Flakes', 'Tea'];
console.log(shoppingList);

let shoppingBasket =[...shoppingList];
shoppingBasket.push('Sugar', 'Cream', 'buiscuts');
console.log(shoppingBasket);

console.log("========================================================== \n\n\n");
//======================================================================



// Q4
op   = prompt("Choose the operation that you want to perform:\n 1 - Add\n 2 - Sub\n 3 - Multiply\n 4 - Divide\n 5 - Square root\n 6 - Percentage");

if(op==1||op==2||op==3||op==4){
    num1 = prompt("Enter the first number")
    num2 = prompt("Enter the second number");
    if(op==1){
        alert(`The addition value of ${num1} and ${num2} is ${parseInt(num1)+parseInt(num2)}`);
    }
    else if(op==2){
        alert(`The Subtraction value of ${num1} and ${num2} is ${parseInt(num1)-parseInt(num2)}`);
    }
    else if(op==3){
        alert(`The Multiplication value of ${num1} and ${num2} is ${parseInt(num1)*parseInt(num2)}`);
    }
    else if(op==4){
        alert(`The Division value of ${num1} and ${num2} is ${parseInt(num1)/parseInt(num2)}`);
    }
}else if(op == 5){
    num1 = prompt("Enter the number of which the square root is to found");
    alert(`Square root of the ${num1} is ${Math.sqrt(num1)}`);
}
else if(op == 6){
    num1 = prompt("Enter the percentage value");
    num2 = prompt("Enter the total value");
    alert(`${num1}% of ${num2} is ${(parseInt(num1)/100) * parseInt(num2)}`);
}
else{
    alert("Please enter a correct option");
}
//-----------------------------------------------------------------------



// Q5 
tS = parseInt(prompt("Enter the total sales value, the employee has generated"));
function SalesCommision(n){
    (n>20000)              ? c = 0.1*n  : 
    (n>=10001 && n<=20000) ? c = 0.07*n : 
    (n>=5001  && n<=10000) ? c = 0.05*n :
    (n>=0     && n<=5000 ) ? c = 0.1*n : c = 0;
    return Math.round(c); 
}
console.log(`The total commision will be ${SalesCommision(tS)}`);

console.log("========================================================== \n\n\n");
//======================================================================



// Q6
flag = true;
while(flag){
    input = prompt("Enter a number greater than 100");
    (input>100 || input == null) ? flag=false : console.log("Input unacceptable");
}

console.log("========================================================== \n\n\n");
//======================================================================



// Q7
inputNum = parseInt(prompt("Enter the number upto which prime numbers have to be logged"));

function prime(n){
    let str = '';
    for(i=2; i<=n; i++) {
        let flag = 1;
        for(j=2; j<i; j++) {
            if(i%j == 0) {
                flag = 0;
                break;
            }
        }
        if(flag == 1) {
            str = str + `${i} `;
        }
    }
    return str;
}

if(inputNum){
    console.log(`Prime number from 0 to ${inputNum} : `);
    console.log(prime(inputNum));
}
else{
    console.log("Input not accepted");
}

console.log("========================================================== \n\n\n");
//=========================================================================


// Q8

let question = "do you agree?";
let yes = ()=>alert("You agree.");
let no  = ()=>alert("You canceled the execution.");

let ask = (q,y,n)=>confirm(question) ? y() : n();

ask(question,yes,no);
