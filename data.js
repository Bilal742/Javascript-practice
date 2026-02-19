console.log("Hello World");

// console.log(document.body.children[1]);

// let arr = Array.from(document.body.childNodes)
// console.log(arr);

// let promt = prompt("Enter your name");
// let name = "Bilal " + promt;
// console.log(name);


// let name = prompt("Enter your name");
// let result = "Welcome " + name;
// alert(result);
// console.log(result);


// let age = prompt("Enter your age");
// let ageResult = `You are ${age} years old`;
// alert(ageResult);
// console.log(ageResult);

// let firstName = prompt("Enter your first name");
// let last_name = prompt("Enter your last name");
// alert(`${firstName} ${last_name}`);
// console.log(`${firstName} ${last_name}`);

// let output = 10 + 5 * 2
// let output2 = (10 + 5) * 2
// console.log(output + output2);


// var total = ++num num++ + --num;
// var num = 10;
// let total = ++num + num++ + --num
// console.log(total);
// console.log(num);

// let price = +prompt("Item price enter karo:");
// let quantity = +prompt("Quantity enter karo:");
// let total = price * quantity;

// alert(`Total bill: ${total}`);
// console.log(total);

// let name = prompt("Enter your name");
// name = "Harry";

// alert(`Welcome: ${name}`);
// console.log(`Welcome: ${name}`);

// let firstNumber = Number(prompt("Enter your firstnumber"));
// let lastNumber = Number(prompt("Enter your lastnumber"));


// document.writeln(`<h1>Addition: ${firstNumber + lastNumber}</h1>`);
// document.writeln(`<h1>Substraction: ${firstNumber - lastNumber}</h1>`);
// document.writeln(`<h1>Divide: ${firstNumber / lastNumber}</h1>`);
// document.writeln(`<h1>Multiply: ${firstNumber * lastNumber}</h1>`);

// console.log(`Addition: ${firstNumber + lastNumber}`);
// console.log(`Substraction: ${firstNumber - lastNumber}`);
// console.log(`Divide: ${firstNumber / lastNumber}`);
// console.log(`Multiply: ${firstNumber * lastNumber}`);

// alert("Enter the value of a");
// let a = prompt("Enter a value","304");
// a = parseInt(a);

// let write = confirm("Do you confirm to write the value");

// if (write) {
//     document.writeln(`<h1>${a}</h1>`)
// }

// else{
//     document.writeln("Plase to write a value of a");
// };

let array = ["mango", "banana", "orange", 20, true, undefined, 300];
// array[7] = 30
// console.log(array);
// console.log("The length of array " + array.length);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// console.log(array.pop());
// console.log(array.push(500));
// console.log(array.unshift(456));
// console.log(array.delete[0]);


// console.log(array);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.length = 2;
// let myList = fruits.toString()
// let fruit = fruits[2];

// console.log(fruit);

// document.getElementById("demo").innerHTML = fruits.join(" * ");

// let name = "ali";
// let arr = Array.from(name);
// console.log(arr);

// let splice = fruits.splice(0, 1, "444", "777");
// console.log(splice);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// delete fruits[3];
// console.log(fruits);
// console.log(fruits.reverse());

// let a = []
// let a1 = [1, 2, 3, 4, 5, 6];
// let a2 = [7, 8, 9, 10, 11, 12];
// let a3 = [13, 14, 15, 16, 17, 18];

// // console.log(a);
// // console.log(a.push(a1, a2, a3));
// // console.log(a1, a2, a3);

// for (const i of a1) {
//     console.log(i);
// }

const fruits = ["Banana", "Orange", "Apple"];

// let Obj = {
//     name: "bilal"
// }

// for (let key in Obj) {
//     console.log(key, Obj[key]);
// }

for (const element of fruits) {
    console.log(element[1]);
}