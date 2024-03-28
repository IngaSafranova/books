import { NextResponse} from "next/server";
 

export async function POST(req) {
    try {
   const  formData = await req.json();
     
//        const data = await fetch(
//         `https://www.googleapis.com/books/v1/volumes?q=${author, title}`
//       );
//        if (!data.ok) throw new Error('failed to fetch data')
//  console.log(data)
     return NextResponse.json({formData}, {status:200});
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}



 
export async function GET(req) {
  try {
    const formData = await req.json();
    const { author, title } = formData;
    const queryParams = {
      author: formData.author,
      title: formData.title,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${queryString}`
    );
    const book = await response.json()
    console.log(book)
    return new NextResponse.json({book}, {status:200})
  } catch (err) {
console.log(err);
return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
  
}
