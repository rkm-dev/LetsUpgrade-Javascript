//Q1 prompt, even or odd

usrInput = prompt("Please Enter a number.");

let response = function() {
    if(usrInput){
        if(usrInput == 0 || Number.isNaN(Number(usrInput))){
            return "Input can not be catagorized as even or odd."
        }
        else if(usrInput % 2 == 0){
            return "You've entered an even number."
        }
        else{
            return "You've entered an odd number."
        }
    }else{
        return "You haven't provided an input."
    }
}

console.log(response() + "\n\n\n");


//-----------------------------------------------------------

Input = (prompt("Please Enter the OS name and version number with a space in between.")).trim();

let str1 = function(){
    if(Input){
        let words = Input.split(" ");
        return `The OS name is ${words[0]} and version is ${words[1]}.`
    }
}
console.log(str1() + "\n\n\n");

//-----------------------------------------------------------

//if else if

marksInput = prompt("Please Enter your Marks.");

let marks, grade;

let inputCheck = function(num) {
    if(num){
        if(num<0 || num>100 || Number.isNaN(Number(num))) {
            console.log("Please provide a valid number less than or equal to 100.");
        }
        else{
            return Number(num)
        }
    }else{
        console.log("No input provided");
    }
}
marks = inputCheck(marksInput);

//if else if

if((marks)){
    if(marks>=90 && marks<=100){
        grade = "A+";
    }
    else if(marks>=85 && marks<=89){
        grade = "A";
    }
    else if(marks>=80 && marks<=84){
        grade = "A-";
    }
    else if(marks>=75 && marks<=79){
        grade = "B+";
    }
    else if(marks>=70 && marks<=74){
        grade = "B";
    }
    else if(marks>=65 && marks<=69){
        grade = "C+";
    }
    else if(marks>=60 && marks<=64){
        grade = "C";
    }
    else if(marks>=55 && marks<=59){
        grade = "D+";
    }
    else if(marks>=50 && marks<=54){
        grade = "D";
    }
    else if(marks>=40 && marks<=49){
        grade = "E";
    }
    else if(marks>=0 && marks<=39){
        grade = "F";
    }
    
    console.log("Marks : " + marks);
    console.log("Grade : " + grade + "\n\n");
}

//switch case
if((marks)){
    switch (marks) {
        case (marks>=90 && marks<=100) : grade = "A+"
            break;
        case (marks>=85 && marks<=89) : grade = "A"
            break;
        case (marks>=80 && marks<=84) : grade = "A-"
            break;
        case (marks>=75 && marks<=79) : grade = "B+"
            break;
        case (marks>=70 && marks<=74) : grade = "B"
            break;
        case (marks>=65 && marks<=69) : grade = "C+"
            break;
        case (marks>=60 && marks<=64) : grade = "C"
            break;
        case (marks>=55 && marks<=59) : grade = "D+"
            break;
        case (marks>=50 && marks<=54) : grade = "D"
            break;
        case (marks>=40 && marks<=49) : grade = "E"
            break;
        case (marks>=0 && marks<=39) : grade = "F";
    }
    
    console.log("Marks : " + marks);
    console.log("Grade : " + grade + "\n\n");
}


//ternary operation

if((marks)){
    (marks>=90 && marks<=100) ? grade = "A+" :
    (marks>=85 && marks<=89) ? grade = "A"   :
    (marks>=80 && marks<=84) ? grade = "A-"  :
    (marks>=75 && marks<=79) ? grade = "B+"  :
    (marks>=70 && marks<=74) ? grade = "B"   :
    (marks>=65 && marks<=69) ? grade = "C+"  :
    (marks>=60 && marks<=64) ? grade = "C"   :
    (marks>=55 && marks<=59) ? grade = "D+"  :
    (marks>=50 && marks<=54) ? grade = "D"   :
    (marks>=40 && marks<=49) ? grade = "E"   : grade = "F";
    
    console.log("Marks : " + marks);
    console.log("Grade : " + grade);
}