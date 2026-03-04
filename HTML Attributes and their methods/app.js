console.log("Hello World");

const first = document.getElementById("first")

let a = first.getAttribute("class");
console.log(a);

let b = first.hasAttribute("style");
console.log(b);

let c = first.setAttribute("style", "color:red");
console.log(c);

console.log(first.getAttribute("style"));
 