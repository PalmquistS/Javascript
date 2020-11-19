"use strict";

// Skapa ett Book konstruktur (constructor function) med följande properties och methods:
function Book(name, subject, pages, isbn) {
  this.bookName = name;
  this.bookSubject = subject;
  this.bookPages = pages;
  this.isbnNumber = isbn;
  this.getBookInfo = function () {
    return (
      "Book: " +
      this.bookName +
      "\n" +
      "Topic: " +
      this.bookSubject +
      "\n" +
      "Pages: " +
      this.bookPages +
      "\n" +
      "ISBN: " +
      this.isbnNumber
    );
  };
}

// Skapa en array med namnet books och lägg till 3 böcker (book objekt) i array:n books (hårdkoda).
let books = [];
books.push(new Book("It", "Horror", 1138, "0-670-81302-8"));
books.push(new Book("Pet sematery", "Horror", 373, "978-0-385-18244-7"));
books.push(new Book("A painted house", "Thriller", 1138, "0-385-50120-x"));

// Låt användaren mata in antal böcker som ska läggas till. (Tip: använd prompt())
let numberInput = prompt("Hur många böcker vill du lägga till?");

// Låt användaren mata in informationen en efter en d.v.s bookens namn, ämne, antal sidor och ISBN nummer. (Tip: använd prompt())
// Lägg till böckerna i array:n (books).
if (numberInput != null) {
  for (let index = 0; index < numberInput; index++) {
    books.push(
      new Book(
        prompt("Ange bokens titel."),
        prompt("Ange bokens gren."),
        prompt("Ange antalet sidor."),
        prompt("Ange bokens ISBN-nummer.")
      )
    );
  }
}

// Skriv ut alla böcker till konsolen med hjälp av getBookInfo metoden.
books.forEach((book) => {
  console.log(book.getBookInfo()), console.log("-----");
});
