// Q1
let input = parseInt(prompt("Please enter a positive number"));

if(Number(input)){
    let n = Math.abs(input);
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let arr1 = arr.filter((n)=>n%2!==0).map((n)=>n**3)
    console.log(arr1 + "\n\n");
}

console.log("========================================================== \n\n\n");
// //--------------------------------------------------------------------


// //Q2

class User {
    constructor(name, age, email){
        this.name = name;
        this.age  = age;
        this.email = email;
        this.credits = 0;
        this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }

    getDetails(){
        console.log(`Name = ${this.name}, Age = ${this.age}, Email = ${this.email}, Credits = ${this.credits}, Courses = ${this.courses}`);
        return this;
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    addCredits(user,c=1){
        user.credits += c;
        console.log(`Credits provided to ${user.name}, now the total credits = ${user.credits}`);
    }

    removeCredits(user,c=1){
        user.credits -= c;
        console.log(`Credits aquired from ${user.name}, now the total credits = ${user.credits}`);
    }
}

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        return this;
    }

    arrayRemove = (arr, value) => arr.filter((e)=> e != value)

    removeCourse(user, course){
        this.arrayRemove(user.courses, course)
        return this;
    }
}

let user1 = new User('Rahul', 23, 'r@gmail.com');
let user2 = new User('Tony', 25, 't@gmail.com');

user1.login().getDetails().logout();

let mod = new Moderator('Alex', 26, 'alex@gmail.com');

let admin = new Admin('Alan', 30, 'alan@alan.com');

mod.addCredits(user1,5);
mod.addCredits(user2,10);
mod.addCredits(user1);
mod.removeCredits(user2,5);

user1.getDetails();
user2.getDetails();

admin.addCourse(user1, 'Javascript');
admin.addCourse(user2, 'Java');
admin.addCourse(user1, 'Python');

user1.getDetails();
user2.getDetails();

admin.addCourse(user2,'SQL');
admin.addCourse(user2,'PHP');

admin.addCredits(user1, 20);
admin.addCredits(user2, 30);
user2.login().getDetails().logout();


console.log("========================================================== \n\n\n")
// //--------------------------------------------------------------------


// //Q3

const fetchAsync = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            return await response.json();
  }

fetchAsync()
    .then(data => data.forEach(d=>d.completed==true ? console.log(d):console.log()))
    .catch(reason => console.log(reason.message))

console.log("========================================================== \n\n\n");
//======================================================================

