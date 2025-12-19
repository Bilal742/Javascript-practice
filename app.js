console.log("helllo world");

const burger1 = document.querySelector(".burger");
const navList1 = document.querySelector(".list ul");
const btn1 = document.querySelector(".btn");

burger.addEventListener('click', () => {
    navList.classList.toggle("active");
    btn.classList.toggle("active");
    burger.classList.toggle("active");
});

const dropdown1 = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
    dropdown.querySelector(".dropdown-menu").classList.toggle("active");
});

document.getElementById("output").innerHTML = output;

const burger = document.querySelector(".burger");
const navList = document.querySelector(".list ul");
const btn = document.querySelector(".btn");

burger.addEventListener('click', () => {
    navList.classList.toggle("active");
    btn.classList.toggle("active");
    burger.classList.toggle("active")
})

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
    dropdown.querySelector(".dropdown-menu").classList.toggle("active");
});