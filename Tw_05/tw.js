//! 1. Capital Letters
//? The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.

const capitalLetters = (text) => {
  const myArray = text.split(" ");
  console.log(myArray);
  let newArray = myArray.map((item) => item[0].toUpperCase() + item.slice(1));
  return newArray.join(" ");
};
const text = `There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, by injected humour, or randomised words
which don't look even slightly believable. If you are going to use a passage of
Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
predefined chunks as necessary, making this the first true generator on the
Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
model sentence structures, to generate Lorem Ipsum which looks reasonable. The
generated Lorem Ipsum is therefore always free from repetition, injected humour, ornon-characteristic words etc.
`;
console.log(capitalLetters(text));

//! 2. Filtering and Transforming Data
//! You have an array of objects representing books, and each object has properties like "title," "author," and
//? "rating." Your task is to create a JavaScript function that filters the books based on a specific rating
//? threshold and then transforms the filtered books into a new array containing only the "title" and "author"
//? properties of the selected books.

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 4.2 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.6 },
  { title: "1984", author: "George Orwell", rating: 4.0 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.7 },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.5 },
  { title: "Moby-Dick", author: "Herman Melville", rating: 4.1 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", rating: 4.8 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.3 },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    rating: 4.7,
  },
  { title: "Brave New World", author: "Aldous Huxley", rating: 4.0 },
  { title: "The Shining", author: "Stephen King", rating: 4.2 },
  { title: "The Da Vinci Code", author: "Dan Brown", rating: 3.9 },
  { title: "The Alchemist", author: "Paulo Coelho", rating: 4.4 },
  { title: "War and Peace", author: "Leo Tolstoy", rating: 4.9 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", rating: 4.5 },
  { title: "The Odyssey", author: "Homer", rating: 4.6 },
  { title: "Frankenstein", author: "Mary Shelley", rating: 4.2 },
  { title: "The Hunger Games", author: "Suzanne Collins", rating: 4.1 },
  { title: "The Road", author: "Cormac McCarthy", rating: 4.3 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    rating: 4.7,
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    rating: 4.8,
  },
];

const topRatedBooks = (books, rt) => {
  let newBooks = books.filter((book) => book.rating > rt);
  let arr = newBooks.map((item) => ({
    title: item.title,
    author: item.author,
  }));
  return arr;
};
console.log(topRatedBooks(books, 4.7));

// mehmet bey
const minRate = (arr) => {
  return arr
    .filter((p) => p.rating >= 4.5)
    .map((a) => ({ title: a.title, author: a.author }));
};
console.log(minRate(books));

let myName = "Anthony harold";
myName = myName.slice(8);
myName.toUpperCase();
console.log(myName);
