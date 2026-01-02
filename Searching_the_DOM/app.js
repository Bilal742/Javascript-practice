const div = document.getElementById("myDiv");
console.log(div.innerText);

const parass = document.getElementsByClassName("paras");
console.log(parass[0].textContent);

const paras = document.querySelector(".paras");
let change = paras.style.color = "red";
change = paras.style.background = "black"
console.log(change);

const allParas = document.querySelectorAll(".paras");
let apply = allParas.style.color = "red";
console.log(apply);

allParas.forEach(para => {
    para.style.color = "red"
});

let nums = [1, 2, 3];

let double = nums.map(n => n * 2);
console.log(double);

console.log(document.querySelector("#myDiv").getElementsByTagName("a"));

//          o o
//          | |
//         _L_L_
//      ❮\/__-__\/❯ Programming isn't about what you know
//      ❮(|~o.o~|)❯  It's about what you can figure out
//      ❮/ \`-'/ \❯
//        _/`U'\_
//       ( .   . )     .----------------------------.
//      / /     \ \    | while( ! (succeed=try() ) ) |
//      \ |  ,  | /    '----------------------------'
//       \|=====|/
//        |_.^._|
//        | |"| |
//        ( ) ( )   Testing leads to failure
//        |_| |_|   and failure leads to understanding
//    _.-' _j L_ '-._
//   (___.'     '.___)                                    