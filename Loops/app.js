console.log("helllo world");

for (let i = 0; i <= 50; i++) {
    console.log(i);
}

// let sum = 0
// let a = prompt("Enter your number");
a = Number.parseInt(a);

for (let i = 0; i < a; i++) {
    sum += (i+1)
}

console.log("Sum of first " + a + " natural number is " + sum);

let sum = 1
for (let i = 0; i < 10; i++) {
    sum += (i)
    console.log(sum);
}

let person = {
    name: "Bilal",
    age: 20,
    city: "Karachi"
};

for (let key in person) {
    console.log(key);          
    console.log(person[key]); 
}

let Obj = {
    name: "Ali",
    age: 20,
    city: "karachi"
}

for (const key in Obj) {
    console.log(key, Obj[key]);
    // console.log(Obj[key]);
}

let array = [10,20,30,40,50];
let a = "Harry"
for (let b of a) {
    console.log(b);
}

// let i = 1;

while (i <= 5) {
    console.log(i);
}

// let i = 1;
while (true) {
    console.log(i);
    i++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// let i = 4

do {
    console.log(i);
    i++;
} while (i <= 5);
function name(x, y) {
    return 1 + x + y
}

// let Obj = {
//     harry: 50,
//     rohan: 10,
//     subham: 8,
//     kainat: 80,
//     suman: 80,
//     amna: 6
// }

for (let i = 0; i < Object.keys(Obj).length; i++) {
    console.log("This marks of " + Object.keys(Obj)[i] + " are " + Obj[Object.keys(Obj)[i]]);
};

for (let key in Obj){
    console.log("This marks of " + key + " are " + Obj[key]);
}

let i = 1;
while (i < 5) {
    console.log(i);
    i++;
}

let cn = 40;
// let i;

for (; i != cn;) {
    i = prompt("Enter cn number");
    if (i != cn) {
        alert("Try again")
    }

    else {
        alert("You have entered a correct number");
    }
}

while (i != cn) {
    i = prompt("Enter cn number")
};

alert("You have entered a correct number");

let meno = (a, b, c) => {
    return (a + b + c) / 4;
}

console.log(meno(2, 4, 5,));
