console.log("Hello World");
window.console.log(window);

let a = prompt("Enter your name");
document.querySelector("h1").innerText = `Your name is: ${a}`;
alert(`Your name is: ${a}`)

let a1 = prompt("Enter your father name");
document.querySelector("h2").innerText = `Your father name is: ${a1}`;
alert(`Your father name is: ${a1}`)

let color = prompt("Enter random color name");

if (color === "red") {
    document.body.style.background = "red"
}

else if (color === "blue") {
    document.body.style.background = "blue"
}

else if (color === "yellow") {
    document.body.style.background = "yellow"
}

else if (color === "black") {
    document.body.style.background = "black"
}

else if (color === "purple") {
    document.body.style.background = "purple"
}

else if (color === "orange") {
    document.body.style.background = "orange"
}

else if (color === "gray") {
    document.body.style.background = "gray"
}

else {
    alert("Somthing worng...")
}

let color1 = prompt("Enter any color name");

let test = document.createElement("div");
test.style.color1 = color1;

if (test.style.color1 !== "") {
    document.body.style.background = color1;
} else {
    alert("Invalid color name")
}

let age = prompt("Enter your age");
age = Number.parseInt(age);
let runAgain = true;

let carDrive = (age) => {
    return age >= 18 ? true : false;
};

while (runAgain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if (isNaN(age)) {
        alert("Please enter a valid number");
    } else if (carDrive(age)) {
        alert("Yes, you can drive");
    } else {
        alert("You cannot drive");
    };

    runAgain = confirm("Do you want to play again!");
};   