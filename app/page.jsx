import { POST } from "./api/books/route"
import Image from "next/image";


export default async function Home() {
  const coverData = await POST()
  const cover = coverData;
  console.log(cover)
  
  return (
    <>
      <h1>My Books page</h1>
      <Image src={cover.imageUrl} alt='' width={cover.imageWidth}
      height={cover.imageHeight} />
    </>
  );
  
}
