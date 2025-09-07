// export function echo(msg) {
//     return msg;
// }

// export default function getLength(str) {
//     return str.getLength
// }
// const GPAAverage = 3.0

// class Book {
//     constructor(isbn) {
//         this.isbn = isbn;
//     }
// }
// module.exports = { echo, getLength, GPA: GPAAverage}


function echo(msg) {
    return msg;
}

export default function getLength(str) {
    return str.length
}
const GPAAverage = 3.0

export class Book {
    constructor(isbn) {
        this.isbn = isbn;
    }
}

export { echo, getLength as default, GPAAverage, Book }