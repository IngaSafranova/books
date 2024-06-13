
import Image from "next/image";
import { NextResponse } from "next/server";


export default async function Home() {
  // const coverData = fetchCover(req);
  // const cover = await coverData;
  //console.log(isbnNumber);
  //const book = await Promise.all(POST());
  // const isbnNumber = book.docs[0].isbn[0];
  //console.log(book);

  return (
    <>
      <h1>My Books page</h1>
      {/* <Image
        src={`https://covers.openlibrary.org/b/isbn/9780230753181-M.jpg`}
        alt=""
        width={400}
        height={400}
      /> */}
    </>
  );
}
