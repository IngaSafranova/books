// export default async function fetchCover(req) {
//   try {
//     const body = await req.json();
//     const bookData = body.formData;
//     const queryParams = {
//       author: bookData.author,
//       title: bookData.title,
//       orderBy: "relevance",
//     };
//     const queryString = new URLSearchParams(queryParams).toString();
//     console.log(queryString);
//     const response = await fetch(
//       `https://openlibrary.org/search.json?q=${queryString}`
//     );
//     const book = await response.json();
//     console.log(book);
//     const isbnNumber = book.docs[0].isbn[0];
//     return isbnNumber
   
//   }
//   catch(err) {
//  console.log(err);
//   }
// }

