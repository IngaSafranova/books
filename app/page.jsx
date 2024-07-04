

import BookCard from "./components/BookCard";

export async function getBooks() {
  try {
    const response = await fetch("http://localhost:3000/api/database/route.jsx", {});
    return response.json();
  } catch (error) {
    console.log("Failed to get books", error);
  }
}

export default async function Dashboard() {
  const data = await getBooks();

  const books = data.books;
console.log(books);
  //if no books available
  if (!books) {
    return <p> No Books available...</p>;
  }
  //console.log(books)
  const uniqueCategories = [...new Set(books?.map(({ category }) => category))];

  return (
    <>
      <h1 className="py-10 text-center text-4xl lg:text-6xl font-serif font-bold">
        My Books
      </h1>
      <div className=" w-screen h-full">
        <div className="w-screen h-full mx-auto">
          {books &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4 ml-4 w-fit">
                <h2 className="uppercase font-medium">{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                  {books
                    .filter((book) => book.category === uniqueCategory)
                    .map((filteredBook, _index) => (
                      <BookCard id={_index} key={_index} book={filteredBook} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
