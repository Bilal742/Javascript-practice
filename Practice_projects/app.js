let inp = document.querySelector("#inp");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");

let allBtn = document.querySelector("#allBtn");
let doneBtn = document.querySelector("#doneBtn");
let pendingBtn = document.querySelector("#pendingBtn");

let todos = [];


function render(data) {

    list.innerHTML = "";

    data.map(function (item, index) {

        let li = document.createElement("li");

        li.innerHTML = `
        <span>${item.text}</span>
        <button class="done">Done</button>
        <button class="delete">Delete</button>
        `;

        if (item.status == "done") {
            li.classList.add("done");
        }

        list.appendChild(li);
    });

}


addBtn.addEventListener("click", function () {

    let obj = {
        text: inp.value,
        status: "pending"
    };

    todos.push(obj);

    render(todos);

    inp.value = "";

});


list.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {

        let index = e.target.closest("li").index;

    }

});


list.addEventListener("click", function (e) {

    if (e.target.classList.contains("done")) {

        let li = e.target.closest("li");

        let text = li.children[0].innerText;

        todos.map(function (item) {

            if (item.text == text) {
                item.status = "done";
            }

        });

        render(todos);

    }

});


allBtn.addEventListener("click", function () {

    render(todos);

});


doneBtn.addEventListener("click", function () {

    let data = todos.filter(function (item) {
        return item.status == "done";
    });

    render(data);

});


pendingBtn.addEventListener("click", function () {

    let data = todos.filter(function (item) {
        return item.status == "pending";
    });

    render(data);

});