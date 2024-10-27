'use server';

import Book from "../models/books";
import { revalidatePath } from "next/cache";  
import { connectToMongoDB } from "../lib/mongodb";
import {ObjectId} from 'mongodb'

export async function createBook(formData) {
  console.log(formData)
  await connectToMongoDB();
  const author = formData.author
  const title = formData.title
  const mainCharacter = formData.mainCharacter
  const description = formData.description
  const category = formData.category
  const isbn = formData.isbn
  const series = formData.series
  const seriesNumber = formData.seriesNumber
  const seriesName = formData.seriesName
  let coverUrl;
    if (!isbn) {
      coverUrl = null;
    } else {
      coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    }
  try {
    const newBook = await Book.create({
      author, title, mainCharacter, description, category, isbn, series, seriesNumber, seriesName, coverUrl
    });
    newBook.save();
    revalidatePath("/");
    return newBook.toString();
  
  } catch (error) {
    console.log(error);
    return { message: 'error creating Book'}
    
}
      
}
export async function getBooks() {
  try {
    const books = await Book.find();
    return {
      books: JSON.parse(JSON.stringify(books)),
    };
  } catch (error) {
    console.log(error);
  }
}
export async function deleteBook(formData) {
  await connectToMongoDB();
  const {id} = formData
  
  const deleteBook = await Book.findOneAndDelete({ _id: ObjectId.createFromHexString(formData) })
  console.log(formData)
  revalidatePath('/')
  
}
