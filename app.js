// alert("Hello Bilal")

// var promt = prompt("Enter your name");

// var name = "bilal " + promt;
// console.log(name);
// name = "harry"
// console.log(name);

// alert("Welcome Bilal");
// alert("I ama 18 years old");


// var firstName = "Bilal";
// var lastName = "ali";
// lastName = "rehman"

// console.log(firstName + " " + lastName);

 
// var name = "Bilal";
// alert(name)

// var firstNumber = 100;
// var lastNumber = 200;
// var total = firstNumber + lastNumber + firstNumber * lastNumber;
// console.log(total);


// var var = "variable";
// var Number = "Numbers";
// var 11Bilal = "Worng";
// var @$%y&7 = "Worng";

// var Name = "Bilal";
// var firstName = "Bilal";
// var last_name = "ali"

// var numbers = 10 + 5 * 7 / 8 - 10;
// console.log(numbers);


// var num = 10;
// total = ++num + --numbers
// console.log(total);

// var name = "Bilal";
// console.log(name);

// {
//     var firstName = "Harry";
// }

// function name() {
//     var firstName = "Harry";
//     // console.log(firstName);
// }

// console.log(name());

// Globle scope
// var firstName = "Harry";
// function name() {
//     console.log(firstName);
// }

// {
//     let num = 10;
//     // console.log(num);  
// }

//     console.log(num);


// let num = 10;
// num++;
// num--;
// console.log(num);

// let num = 09;
// console.log(num);


// let firstName = Symbol("Harry");
// let last_name = Symbol("Harry");
// let firstName = "Harry";
// let last_name = "Harry";

// console.log(firstName === last_name);


// let name = "Bilal";
// let num = 10;
// console.log(name + num);

// const obj = {
//     name:"Bilal",
//     age:18,
//     city:"karahi"
// }

// obj["fond"] = "harry";

// console.log(obj);

// let num1 = 10
// let num2 = 1;
// // console.log(num1 + num2);
// console.log(++num1);
// console.log(num1++);

// let num1 = 10;
// console.log(++num1); // 11 → pehle increment hua phir print
// console.log(num1);   // 11


// let num2 = 10;
// console.log(num2++); // 10 → pehle print, phir increment
// console.log(num2);   // 11 → ab increment ho chuki

// const burger = document.querySelector(".burger");
// const navList = document.querySelector(".list ul");
// const btn = document.querySelector(".btn");

// burger.addEventListener('click', () => {
//     navList.classList.toggle("active");
//     btn.classList.toggle("active");
//     burger.classList.toggle("active");
// });

// const dropdown = document.querySelector(".dropdown");

// dropdown.addEventListener("click", () => {
//     dropdown.querySelector(".dropdown-menu").classList.toggle("active");
// });

// let assignment = 1;
// // assignment += 10;
// assignment -= 10;
// console.log(assignment);

// let comp1 = 30;
// let comp2 = 20;

// let output = "";

// output += "comp1 == comp2 : " + (comp1 == comp2) + "<br>";
// output += "comp1 != comp2 : " + (comp1 != comp2) + "<br>";
// output += "comp1 !== comp2 : " + (comp1 !== comp2) + "<br>";
// output += "comp1 === comp2 : " + (comp1 === comp2) + "<br>";

// output += "comp1 > comp2 : " + (comp1 > comp2) + "<br>";
// output += "comp1 < comp2 : " + (comp1 < comp2) + "<br>";

// output += "comp1 >= comp2 : " + (comp1 >= comp2) + "<br>";
// output += "comp1 <= comp2 : " + (comp1 <= comp2) + "<br>";

// output += "comp1 > comp2 && comp1 > comp2 : " + (comp1 > comp2 && comp1 > comp2) + "<br>";
// output += "comp1 > comp2 || comp1 < comp2 : " + (comp1 > comp2 || comp1 < comp2) + "<br>";

// output += "!false : " + (!false);

// document.getElementById("output").innerHTML = output;

// const burger = document.querySelector(".burger");
// const navList = document.querySelector(".list ul");
// const btn = document.querySelector(".btn");

// burger.addEventListener('click', () => {
//     navList.classList.toggle("active");
//     btn.classList.toggle("active");
//     burger.classList.toggle("active")
// })

// const dropdown = document.querySelector(".dropdown");

// dropdown.addEventListener("click", () => {
//     dropdown.querySelector(".dropdown-menu").classList.toggle("active");
// });


// let a = prompt("Hey whats your age?");
// let value = a.trim();

// if (value == "") {
//     alert("Please enter your age. Input is empty!");
// } else {
//     let age = parseInt(value);
//     if (age <= 14) {
//         alert("not a drive...")
//     }

//     else if (age <= 15) {
//         alert("Abhi nhi 2 saal bt")
//     }

//     else {
//         alert("You can drive now your age is 18")
//     }
// }


// a <= 14 
//   ? alert("You are not allowed to drive") 
//   : a < 18 
//     ? alert("Learning license allowed") 
//     : alert("You can drive");


// a >= 18 && a >= 10 ?
//     alert("You can drive now...")
//     : alert("You not a driver")

// let result = 10 + 10 + 5 * 2 + 20;
// console.log(result);


// let value = ""; 

// while (value.trim() === "") {
//     value = prompt("Hey what's your age?");

//     // Agar user Cancel press kare
//     if (value === null) {
//         alert("Please enter your age, you cancelled the input!");
//         value = ""; // force loop to continue
//     }
// }

// let age = parseInt(value.trim());

// // Age check logic
// if (age <= 14) {
//     alert("Not a drive...");
// }
// else if (age <= 15) {
//     alert("Abhi nhi 2 saal baad!");
// }
// else {
//     alert("You can drive now, your age is 18+");
// }


// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }

// let sum = 0
// let a = prompt("Enter your number");
// a = Number.parseInt(a);

// for (let i = 0; i < a; i++) {
//     sum += (i+1)
// }

// console.log("Sum of first " + a + " natural number is " + sum);

// let sum = 1

// for (let i = 0; i < 10; i++) {
//     sum += (i)
//     console.log(sum);
// }

// let person = {
//     name: "Bilal",
//     age: 20,
//     city: "Karachi"
// };

// for (let key in person) {
//     console.log(key);          // property ka name
//     console.log(person[key]);  // property ki value
// }

// let Obj = {
//     name: "Ali",
//     age: 20,
//     city: "karachi"
// }

// for (const key in Obj) {
//     console.log(key, Obj[key]);
//     // console.log(Obj[key]);
// }


// let array = [10,20,30,40,50];
// let a = "Harry"
// for (let b of a) {
//     console.log(b);
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i);
// }

// let i = 1;
// while (true) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 4

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
// function name(x, y) {
//     return 1 + x + y
// }


// let a = 1
// let b = 2
// let c = 3

// console.log(name(a, b));


// function add(a, b) {
//  return a + b;
// }

// let result = add(2, 3);
// console.log(result); 


// function number(a, b, name) {
//     return a + b + name + " ali"
// }

// console.log(number(1, 2, " Bilal"));


// function name() {
//     console.log("Bilal ali");
//     return null
// }

// console.log(name());

// function num(a, b) {
//     return a + b
// }

// let a = 50;
// let b = 50;

// console.log(num(a, b));

let Obj = {
    harry: 50,
    rohan: 10,
    subham: 8,
    kainat: 80,
    suman: 80,
    amna: 6
}

// for (let i = 0; i < Object.keys(Obj).length; i++) {
//     console.log("This marks of " + Object.keys(Obj)[i] + " are " + Obj[Object.keys(Obj)[i]]);
// };

// for (let key in Obj){
//     console.log("This marks of " + key + " are " + Obj[key]);
// }

// let i = 1;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let cn = 40;
// let i;

// for (; i != cn;) {
//     i = prompt("Enter cn number");
//     if (i != cn) {
//         alert("Try again")
//     }

//     else {
//         alert("You have entered a correct number");
//     }
// }

// while (i != cn) {
//     i = prompt("Enter cn number")
// };

// alert("You have entered a correct number");


// let meno = (a, b, c) => {
//     return (a + b + c) / 4;
// }

// console.log(meno(2, 4, 5,));


// Escape sequence character
// let name = "Bil\tal"
// console.log(name);
// console.log('It\rs my book');
// console.log("Name:\tBilal\nAge:\t20\nCountry:\tPakistan");


// let name = "Bilal";
// console.log(name.slice(0,5));

// let array = ["Orange", "Mango", "Banana", "Apple", true, 50];
// array[6] = 30
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);

// console.log("The length of arrays " + array.length);

 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// };
