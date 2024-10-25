import Book from "@/app/models/books";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToMongoDB } from "@/app/lib/mongodb";

connectToMongoDB()
export async function GET(req,{params}) {
  const id = req.query.id;

  const foundBook = await Book.findOne({ _id: id });
  return NextResponse.json({ foundBook }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    //const { id } = params;
     const id = req.query.id;

    const body = await req.json();
    const bookData = body.formData;

    const updateBookData = await Book.findByIdAndUpdate(id, {
      ...bookData,
    });

    return NextResponse.json({ message: "Book updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
     const { id } = params;
 //const id = req.query.id;
    await Book.findByIdAndDelete(id);
    return NextResponse.json({ message: "Book Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
