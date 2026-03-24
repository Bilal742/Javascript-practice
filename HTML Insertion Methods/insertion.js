// Accessing_children_of_an_lement, Alert and variable, Arrays, Assign compare logic operators, Console Object, DOM,_BOM_&_Window_Object, Element_only_Navigation, Escape sequence character, Function, Globle and block scop and increment decrement, HTML Attributes and their methods, If_eles_condition, Loops, Map_filter_&_reduce, Parents_&_Siblings_of_an_Element, Practice_set_on_arrays, Searching_the_DOM, Walking_the_DOM, alert_prompt_&_confirm, innerHTML, outerHTML and other properties, matches, closest and contains,)  abhi tk ye parha hai 

// const div = document.getElementsByTagName("div")[0]
// div.innerHTML = div.innerHTML + "<h1>Hello World</h1>";

// const div = document.getElementsByTagName("div")[0];
// div.insertAdjacentHTML("beforeend", "<h1>Hello</h1>");

// const div1 = document.getElementsByTagName("div")
// console.log(div1);

// a.innerHTML = div.innerHTML + "<h1>Hello World</h1>";

// const a = document.getElementById("div");

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello World</h1>"
// a.appendChild(div)

// const a = document.getElementById("div");

// for (let i = 1; i <= 10; i++) {
//     let div = document.createElement("div");
//     div.innerHTML = "<h1>Hello World " + i + "</h1>";
//     a.appendChild(div);
// };


const a = document.getElementById("div");

const div = document.createElement("div")
div.innerHTML = "<h1>Hello world</h1>";

// a.append(div)
// a.prepend(div)
// a.before(div)
a.after(div)

// a.replaceWith(div)