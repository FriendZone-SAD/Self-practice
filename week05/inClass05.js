const studentScores = [
    {name : 'Alice', score : 85},
    {name : 'Bob', score : 92},
    {name : 'Charlie', score : 68},
    {name : 'David', score : 55},
    {name : 'Eve', score : 78}
];

const passingNames = getPassingNames(studentScores);
console.log(passingNames)

function getPassingNames(student){
    return student.filter(student => student.score >= 70).map(student => student.name.toUpperCase())
}

console.log(Array.isArray([])) //true
console.log(Array.isArray(["a", 12, false])) //true
console.log(Array.isArray(new Array(2))) //true

console.log(Array.isArray("[]")) //false
console.log(Array.isArray(123)) //false
console.log(Array.isArray(false)) //false
console.log(Array.isArray("1")) //false
console.log(Array.isArray({})) //false

const num1 = [1, 2, 3]
const num2 = [3, 5, 7]
console.log([...num1, ...num2]) //spread
console.log(num1.concat(num2)) //concat

console.log(num1.toString()) //convert array to string data type
console.log(num1.toString())
console.log(num1.join(".")) //array to string with separator
console.log(num1.join(","))
console.log(num1.join(":"))
console.log(num1.join(" "))
 
const arr = [1, 30, 4, 21, 10000]
arr.sort()
console.log(arr)
arr.sort((a,b) => b-a)
console.log(arr);

const students= [
    {id : 66500102, name : "Suda", gpa : 2.5},
    {id : 66500555, name : "ada", gpa : 2.8},
    {id : 66500589, name : "pornchai", gpa : 3.25},
    {id : 66500102, name : "Pornsak", gpa : 3.8}
]
students.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)
console.log(students)