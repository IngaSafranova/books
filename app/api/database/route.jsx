import Book from "../../models/books";
import { NextResponse } from "next/server";



export async function GET() {
  
  try {
    const tickets = await Book.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {

  
  try {
    const body = await req.json();
   let  bookData = body.formData;
    console.log(bookData)
    
    const queryParams = {
      author: bookData.author,
      title: bookData.title,
      orderBy: "relevance",
    };
    const queryString = new URLSearchParams(queryParams).toString();
    console.log(queryString);
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${queryString}`
    );
    const book = await response.json();
   
    const isbnNumber = book.docs[0].isbn[0];
    console.log(isbnNumber);
    
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnNumber}-M.jpg`;

    bookData.cover = coverUrl;
    console.log(bookData)


    await Book.create(bookData);

    return NextResponse.json({ message: "Book Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
