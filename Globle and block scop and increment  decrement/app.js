console.log("helllo world");

{
    var firstName = "Harry";
}

function name() {
    var firstName = "Harry";
    // console.log(firstName);
}

console.log(name());

// Globle scope
var firstName = "Harry";
function name() {
    console.log(firstName);
}

{
    let num = 10;
    // console.log(num);  
}

console.log(num);

let num = 10;
num++;
num--;
console.log(num);

// let num = 09;
console.log(num);

let firstName = Symbol("Harry");
// let last_name = Symbol("Harry");
let firstName = "Harry";
let last_name = "Harry";

console.log(firstName === last_name);

let name = "Bilal";
// let num = 10;
console.log(name + num);

const obj = {
    name: "Bilal",
    age: 18,
    city: "karahi"
}

obj["fond"] = "harry";

console.log(obj);

// let num1 = 10
// let num2 = 1;
console.log(num1 + num2);
console.log(++num1);
console.log(num1++);

let num1 = 10;
console.log(++num1);
console.log(num1);

let num2 = 10;
console.log(num2++);
console.log(num2);   