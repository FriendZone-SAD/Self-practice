//B

let number = [1, 2, 3, 4, 5];
//1
console.log(number.length);
//2
console.log(number[0]);
//3
console.log(number[number.length - 1]);
//4
const student = {
    name: 'Micheal'
};
number[number.length] = student;
let array2 = ['hello', 'hi', 5, 5, 5];
number[number.length] = array2;
console.log(number[5]);
console.log(number[6]);
console.log("--------------------------------------------------------")
//6
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
//pop
console.log("--------------------------------------------------------");
console.log(number.length);
number.pop();
console.log(number);
console.log(number.length);
//spread string
let name = 'john';
const strch = [...name];
console.log(strch);
console.log("--------------------------------------------------------");
//array constructor
let newarray = new Array();
console.log(newarray);
let newarray1 = new Array(5);
console.log(newarray1);
let newarray2 = new Array(1, 'js', true);
console.log(newarray2);

let newarray3 = Array.of(10);
console.log(newarray3);
let newarray4 = Array.from(newarray3)
console.log(newarray4);
let str = Array.from(strch);
console.log(str);
console.log("--------------------------------------------------------");
const [, , x, , ...y] = [5, 10, 15, 20, 25]
console.log(x, y);
console.log(typeof(x), typeof(y));
