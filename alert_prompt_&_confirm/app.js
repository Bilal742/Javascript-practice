console.log("Hello world");

alert("Enter the value of a");
let a = prompt("Enter a here", "304");
a = Number.parseInt(a);

let write = confirm("Do you want to write in to the page");

if (write) {
    document.writeln(`<h1>${a}</h1>`);
}

else {
    document.writeln("Please allow me to write");
};

write ?
    document.writeln(`<h1>${a}</h1>`)
    : document.writeln("Please allow me to write");