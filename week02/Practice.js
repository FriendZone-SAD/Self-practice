let book1 = {
    isbn: 123456789,
    title: "JavaScript",
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript",
}

let book01 = {
    bookID: 101,
    name: "The Shinning",
    author: {
        name: "stephen king",
        DOB: "1947-09-21"
    }
}

let book02 = {
    bookID: 101,
    name: "The Shinning",
    author: {
        name: "stephen king",
        DOB: "1947-09-21"
    }
}

let objA = { a: 1, b: 2 };
let objB = { a: 1, b: 3 };
let arrA = { nums: [1, 2, 3] };
let arrB = { nums: [1, 2, 3] };
let sharedArr = [1, 2, 3];
let arrC = { nums: sharedArr };
let arrD = { nums: sharedArr };
let nestedA = { info: { x: 10 } };
let nestedB = { info: { x: 10 } };
let sharedObj = { x: 10 };
let nestedC = { info: sharedObj };
let nestedD = { info: sharedObj };
let diffA = { a: 1, b: 2 };
let diffB = { a: 1 };

function shallowEquality(obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if(key1.length !== key2.length){
        return false;
    }
    
    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log("shallow equality: " + shallowEquality(book1, book2));
console.log("shallow equality: " + shallowEquality(book01, book02));
console.log("shallow equality: " + shallowEquality(objA, objB));
console.log("shallow equality: " + shallowEquality(arrA, arrB));
console.log("shallow equality: " + shallowEquality(arrC, arrD));
console.log("shallow equality: " + shallowEquality(nestedA, nestedB));
console.log("shallow equality: " + shallowEquality(nestedC, nestedD));
console.log("shallow equality: " + shallowEquality(diffA, diffB));
