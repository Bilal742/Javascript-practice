console.log("helllo world");

let assignment = 1;
assignment += 10;
assignment -= 10;
console.log(assignment);

let comp1 = 30;
let comp2 = 20;

let output = "";

output += "comp1 == comp2 : " + (comp1 == comp2) + "<br>";
output += "comp1 != comp2 : " + (comp1 != comp2) + "<br>";
output += "comp1 !== comp2 : " + (comp1 !== comp2) + "<br>";
output += "comp1 === comp2 : " + (comp1 === comp2) + "<br>";

output += "comp1 > comp2 : " + (comp1 > comp2) + "<br>";
output += "comp1 < comp2 : " + (comp1 < comp2) + "<br>";

output += "comp1 >= comp2 : " + (comp1 >= comp2) + "<br>";
output += "comp1 <= comp2 : " + (comp1 <= comp2) + "<br>";

output += "comp1 > comp2 && comp1 > comp2 : " + (comp1 > comp2 && comp1 > comp2) + "<br>";
output += "comp1 > comp2 || comp1 < comp2 : " + (comp1 > comp2 || comp1 < comp2) + "<br>";

output += "!false : " + (!false);