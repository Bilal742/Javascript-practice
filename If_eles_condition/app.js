console.log("helllo world");

let a = prompt("Hey whats your age?");
// let value = a.trim();

if (value == "") {
    alert("Please enter your age. Input is empty!");
} else {
    let age = parseInt(value);
    if (age <= 14) {
        alert("not a drive...")
    }

    else if (age <= 15) {
        alert("Abhi nhi 2 saal bt")
    } 

    else {
        alert("You can drive now your age is 18")
    }
}

a <= 14 
  ? alert("You are not allowed to drive") 
  : a < 18 
    ? alert("Learning license allowed") 
    : alert("You can drive");


a >= 18 && a >= 10 ?
    alert("You can drive now...")
    : alert("You not a driver")

let result = 10 + 10 + 5 * 2 + 20;
console.log(result);

let value = ""; 

while (value.trim() === "") {
    value = prompt("Hey what's your age?");

    if (value === null) {
        alert("Please enter your age, you cancelled the input!");
        value = "";
    }
}

let age = parseInt(value.trim());

if (age <= 14) {
    alert("Not a drive...");
}
else if (age <= 15) {
    alert("Abhi nhi 2 saal baad!");
}
else {
    alert("You can drive now, your age is 18+");
}