// import { NextResponse, NextRequest } from "next/server";

// export async function POST(req) {
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
//     console.log(book)
//     const isbnNumber = book.docs[0].isbn[0];
    

//   const res = await fetch(
//     `https://covers.openlibrary.org/b/isbn/${isbnNumber}-M.jpg`
//     );
//     const cover = await res.blob()
// console.log(cover)
//     const imageUrl = `https://covers.openlibrary.org/b/isbn/${isbnNumber}-M.jpg`;
//     const imageWidth = cover.width;
//     const imageHeight = cover.height;
//     cover.src = imageUrl
//     console.log(imageUrl)
//     console.log(isbnNumber);
//     return Response({ props: {book}})
//   } catch (err) {
//     console.log(err);
//      return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }



// // export async function GET(req) {
// //   try {
// //     const formData = await req.json();
// //     const { author, title } = formData;
// //     const queryParams = {
// //       author: formData.author,
// //       title: formData.title,
// //     };
// //     const queryString = new URLSearchParams(queryParams).toString();

// //     const response = await fetch(
// //         `https://www.googleapis.com/books/v1/volumes?q=${req.body}`
// //     );
// //     const book = await response.json()
// //     console.log(book)
// //     return new NextResponse.json({book}, {status:200})
// //   } catch (err) {
// // console.log(err);
// // return NextResponse.json({ message: "Error", err }, { status: 500 });
// //   }

// // }
