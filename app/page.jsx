import { GET } from "./api/books/route";

export default async function Home() {

   const bookData = GET()
   const book = await bookData;
   console.log(book)
  return (
    <h1>My Books page</h1>
    
    
  )
  
}
