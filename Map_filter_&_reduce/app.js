console.log("helllo world");

let arr = [10, 20, 30, 40, 50, 60];
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
})

console.log(a);

let b = arr.forEach((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
});

console.log(b);

let c1 = [20, 40, 60, 7, 8, 9];
let c = c1.filter((a) => {
    return a < 10;
})

console.log(c);

let c2 = [1, 2, 3, 4, 5, 6];
let newarr = c2.reduce((h1, h2) => {
    return h1 + h2;
});

console.log(newarr);

let c3 = [1, 2, 3, 4, 5, 6];
let reduce_func = ((h1, h2) => {
    return h1 + h2;
});

let newarr1 = c3.reduce(reduce_func);
console.log(newarr1);
