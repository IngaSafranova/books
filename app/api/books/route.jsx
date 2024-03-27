import Book from "../../models/mongodb";
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
  console.log('book done')
  try {
    const body = await req.json();
    const bookData = body.formData;

    await Book.create(bookData);

    return NextResponse.json({ message: "Book Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
