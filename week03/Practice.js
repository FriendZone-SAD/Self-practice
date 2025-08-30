//Part1 : basic function
// function square(number) {
//     return number ** 2;
// }

let square = (number) => number ** 2

// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }

let isEven = (number) => number % 2 === 0 ? true : false

// function greet(name = "Guest") {
//     return `Hello, ${name}`;
// }

let greet = (name = "Guest") => `Hello, ${name}`

console.log(square(5));
console.log(square(19));
console.log(isEven(2));
console.log(isEven(3));
console.log(greet("Bell"));
console.log(greet());

console.log("----- End Of Part 1 -----");


//Part2 : Function Expressions % Arrow Functions
let getRectangleArea = function(w, h) {
    return w * h;
}

const add = (a, b) => a + b;

console.log(getRectangleArea(3, 5));
console.log(add(3, 5));

console.log("----- End Of Part 2 -----");

//Part3 : Parameters & Arguments

// function sumAll(...nums) {
//     let sum = 0;
//     for (const number of nums) {
//         sum += number;
//     }
//     return sum;
// }

let sumAll = (...nums) => {
    let sum = 0;
    for (const number of nums) {
        sum += number;
    }
    return sum;
}

let nums = [5, 10, 15]

// function multiplyArray(num1, num2, num3) {
//     return num1 * num2 * num3;
// }

let multiplyArray = (num1, num2, num3) => num1 * num2 * num3

console.log(sumAll(10, 20, 30, 40));
console.log(multiplyArray(...nums));

console.log("----- End Of Part 3 -----");

//Part4 : Destructuring

// function printFullName({firstName, lastName}) {
//     return firstName + " " + lastName;
// }

let printFullName = ({firstName, lastName}) => firstName + " " + lastName

const student = {
    stid : 1,
    firstName : "Kritsanaphong",
    lastName : "Jaritpot",
    sex : "Male"
}

// function arrayAdd([x1, x2], [y1, y2]) {
//     return x1 + y1 + x2 + y2
// }

let arrayAdd = ([x1, x2], [y1, y2]) => x1 + y1 + x2 + y2

console.log(printFullName(student));
console.log(arrayAdd([1,2], [3,4]));

console.log("----- End Of Part 4 -----");

//Part5 : Higher-Order Functions
function operator(n1, n2, fn) {
    return fn(n1, n2)
}

console.log(operator(3,5,add));
console.log(operator(3,5,getRectangleArea)); //ใช้เพราะมันเหมือน function คูณกันครับผม

console.log("----- End Of Part 5 -----");
