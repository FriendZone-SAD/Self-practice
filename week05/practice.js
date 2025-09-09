function addProperty(obj, key, value) {
    obj[key] = value
    return obj
}

function mergeObject(obj1, obj2) {
    return {...obj1, ...obj2}
}

function getFreqOfWords(sentence) {
    if (typeof sentence !== "string" || !sentence) return undefined;
    const words = sentence.toLowerCase().split(/\s+/);
    const freq = {};
    for (const word of words) {
        if (word) freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}

function extractAndRename(obj) {
    let {name: fullName, age: yearOld} = obj;
    return {fullName, yearOld};
}

function mergeAndDestructure(obj1, obj2) {
    const merge = {...obj1, ...obj2};
    const { name: fullName, age: yearOld} = merge;
    return {fullName, yearOld};
}

function removeDuplicateWords(sentence) {
    if (sentence === null || sentence === "") {
        return "";
    }

    const seen = new Set();
    const result = [];


    for (const word of sentence.split(/\s+/)) {    
        const lower = word.toLowerCase();
        if (!seen.has(lower)){
            seen.add(lower)
            result.push(word)
        }
    }
    return result.join(" ");
}

function findValue(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const sum = arr.reduce((total, curVal) => total + curVal, 0)
    const avg = sum / arr.length
    return {min, max, sum, avg};
}

function convertToUppercase(arr) {
    const upperCase = arr.map(x => x.toUpperCase())
    return upperCase;
}

function findMax(arr) {
    return Math.max(...arr);
}

function removeFalsyValues(arr) {
    const noFalsy = arr.filter(Boolean)
    return noFalsy;
}

function doubleAndFilterEvenNumbers(arr) {
    const evenArr = arr.filter(val => val % 2 == 0)
    const double = evenArr.map(val => val * 2)
    return double;
}

function filterEvenNumbers(arr) {
    const even = arr.filter(val => val % 2 == 0)
    return even;
}

function populateArray(length, value) {
    return Array(length).fill(value)
}

function squareNumbers(arr) {
    return arr.map(val => val ** 2)
}

function processNumbers(arr) {
    const oddNum = arr.filter(val => val % 2 == 1)
    const squareNum = oddNum.map(val => val ** 2)
    return squareNum.reduce((total, val) => total + val, 0)
}

console.log(addProperty({name : 'John'}, 'age', 25))
console.log(addProperty({}, 'city', 'New York'))
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) 
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' })) 
console.log(extractAndRename({ name: 'Jane', age: 30 }))
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' })) 
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' })) 

console.log(removeDuplicateWords("This is a test This test is easy."))  // "This is a test easy."
console.log(removeDuplicateWords("Hello hello HELLO world!")) // "Hello world!"
console.log(removeDuplicateWords("One two two three three three")) // "One two three"
console.log(removeDuplicateWords("")) // ""
console.log(removeDuplicateWords(null)) // ""

console.log(findValue([1,2,3,4,5]))

console.log(convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD']
console.log(convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN'
console.log(findMax([1, 2, 3, 4])) // 4
console.log(findMax([10, 5, 8, 7])) // 10

console.log(removeFalsyValues([0, 1, false, 2, '', 3]))
console.log(removeFalsyValues(['a', '', 'b', null, 'c']))
console.log(removeFalsyValues([null, undefined, 'A']))

console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4])) // [4, 8]
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]))

console.log(filterEvenNumbers([1, 2, 3, 4])) // [2, 4]
console.log(filterEvenNumbers([5, 6, 7, 8]))

console.log(populateArray(3, 'a')) // ['a', 'a', 'a']
console.log(populateArray(5, 0))

console.log(squareNumbers([1, 2, 3, 4])) // [1, 4, 9, 16]
console.log(squareNumbers([5, 6]))

console.log(processNumbers([1, 2, 3, 4])) // 10 (1^2 + 3^2) 
console.log(processNumbers([5, 6, 7, 8])) // 74 (5^2 + 7^2)