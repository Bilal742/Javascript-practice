console.log("helllo world");

let array = ["Orange", "Mango", "Banana", "Apple", true, 50];
array[6] = 30
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log("The length of arrays " + array.length);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
};

let num = [10, 20, 30, 40, 50, 60, 70, 80,];
num[8] = 500;
let r = num.pop();

let m = num.push(90)
let n = num.unshift(45, 50909, 3333)

console.log(num, n);

let num = [1, 2, 3, 2, 6, 5, 7, 6];
num.sort((a, b) => a - b);
console.log(num);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((element, index) => {
    console.log(index, element + element);

});

num.reverse()
console.log(num);

num.splice(3, 2, 30090, 2309, 8766);
console.log(num);

let newNum = num.slice(1, 5)
console.log(newNum);

let name = "harry";
let arr = Array.from(name);
console.log(arr);

num.reverse();
for (const i of num) {
    console.log(i);
}

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    console.log(element);
};

for (const key in num) {
    // if (!Object.hasOwn(num, key)) continue;
    const element = num[key];
    console.log(element);
};
