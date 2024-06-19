import React from "react";
import Image from "next/image";
import BookCard from "./components/BookCard";

async function getBooks() {
  try {
    const response = await fetch("http://localhost:3000/api/database", {
      cache: "no-cache",
    }); 
    return response.json()
  } catch (error) {
    console.log('Failed to get books', error)
   }
 }


export default async function Dashboard() {
  const data = await getBooks();
  

  //if no books available
  if (!data.books) {
    return <p> No Books available...</p>
  }
  const books = data.books;
  console.log(books)
  const uniqueCategories = [
    ...new Set(books?.map(({category})=> category))
  ]

  return (
    <>
      <h1>My Books</h1>
      <div className="p-5">
        <div>
          {books &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                  {books.filter((book) => book.category === uniqueCategory)
                    .map((filteredBook, _index) => (
                      <BookCard
                        id={_index}
                        key={_index}
                        book={filteredBook}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
