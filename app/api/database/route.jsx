import Book from "../../lib/books";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const books = await Book.find();
    //console.log(books);
    return NextResponse.json({ books }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    let bookData = body.formData;
    //console.log(bookData);

    // const queryParams = {
    //   author: bookData.author,
    //   title: bookData.title,
    //   isbn: bookData.isbn,
    // };
    // const queryString = new URLSearchParams(queryParams).toString();
    // console.log(queryString);
    // const response = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${queryString}`
    // );
    // const book = await response.json();
    // //   const publisher = book.items[0]
    // console.log(book);
    // const coverUrl = book.items[0].volumeInfo.imageLinks.thumbnail;
    // console.log(coverUrl);

    // const res = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${bookId}`
    // );
    // const bookDetails = await res.json();
    // console.log(bookDetails)
    const isbnNumber = bookData.isbn;
    // console.log(isbnNumber);
    let coverUrl;
    if (!isbnNumber) {
      coverUrl = "";
    } else {
      coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnNumber}-M.jpg`;
    }

    bookData.cover = coverUrl;
    //console.log(bookData);

    await Book.create(bookData);

    return NextResponse.json({ message: "Book Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
