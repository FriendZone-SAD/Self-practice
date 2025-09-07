//Part1 : Basic Iterators
let numbers = [10, -15, -20, 30, 125, 250]

console.log("----- Main Array -----")

let multipleNumber = []
let plusTen = numbers.map(num => num + 10) //map
let evenNumber = numbers.filter(num => num % 2 === 0) //filter

numbers.forEach((num => multipleNumber.push(num ** 2))) //forEach

console.log(numbers)
console.log(multipleNumber)
console.log(plusTen)
console.log(evenNumber)

console.log("----- End Of Part 1 -----")

//Part2 : Search & Find
let firstLessThanZero = numbers.find(num => num < 0)
let moreThanHundred = numbers.findIndex(num => num > 100)
let isEven = (number) => number % 2 === 0
let positiveNumber = (number) => number > 0

console.log(firstLessThanZero)
console.log(moreThanHundred)
console.log(`numbers.some(isEven) : ${numbers.some(isEven)}`)
console.log(`numbers.every(positiveNumber) : ${numbers.every(positiveNumber)}`)

console.log("----- End Of Part 2 -----")

//Part3 : Reduce
let sumAll = numbers.reduce((total, num) => total + num)
let maxNum = numbers.reduce((max, num) => Math.max(max, num))

console.log(sumAll)
console.log(maxNum)

console.log("----- End Of Part 3 -----")

//Part4 : Stack & Queue
let title = []
title.push("The Shining")
title.push("The End Of Time")
title.push("A Killer By Design")
title.push("The Stranger Beside Me")
title.push("Blob")
console.log(`title after push five time : ${title}`)
title.pop()
console.log(`title after pop one time : ${title}`)
title.unshift("IT")
title.unshift("Killer Clown")
title.unshift("The Man Who Died Seven Times")
console.log(`title after unshift three time : ${title}`)
title.shift()
console.log(`title after shift one time : ${title}`)

console.log("----- End Of Part 4 -----")

//Part5 : Subarray
let someTitle = title.slice(2, 4)
title.splice(2, 0, "Trust Me")

console.log(someTitle)
console.log(title)
console.log(title.fill("Been Replace", 6, 7))

console.log("----- End Of Part 5 -----")

//Part6 : Sorting & Searching
console.log(title.includes("cat"))
console.log(title.reverse())
console.log(title.sort())

console.log("----- End Of Part 6 -----")

//Part7 : Combine & Convert
let combine = numbers.concat(title)

console.log(combine)
console.log(`Name of the book that i like : ${title.join(", ")}`)

console.log("----- End Of Part 7 -----")