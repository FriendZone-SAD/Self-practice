// Create the array practice
let books = ['The End Of Time', 'I Have No Mouth, And I Must Scream', "Don't Knock Twice", 'The Cat Lady'];
let moreBooks = [...books, 'Horrorstor', 'Tender Is The Flesh'];
let emptyShelves = new Array(3);
let rating = Array.of(5, 4, 3, 5);
let titleLengths = Array.from(books, title => title.length);

// Print the array practice
console.log(books[0]);
books[1] = 'Harry Potter';
let i = 2;
books[i] = 'The Shining';
books.push('IT');

// Add Delete Practice
books.unshift('The Raft');
books.pop();
books.shift();

// Destructuring Practice
const [firstBooks, secondBooks] = books;
console.log(firstBooks);
console.log(secondBooks);

// Interating Practice
books.forEach((title, index) => {
    console.log(`${index}: ${title}`);
});
books.forEach((title, index) => {
    console.log(`${index}: ${title} (Length: ${title.length})`);
});

console.log(books);
console.log(moreBooks);
console.log(emptyShelves);
console.log(rating);
console.log(titleLengths);

