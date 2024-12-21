"use client";
import React from "react";
import Image from "next/image";
import DeleteBlock from "./DeleteButton";
import { useState } from "react";
import { deleteBook } from "../actions/actions";

export default function BookCard({ book }) {
  // const startingBookData = {
  //   author: "",
  //   title: "",
  //   cover: "",
  //   description: "",
  //   mainCharacter: "",
  //   category: "",
  //   isbn: "",
  //   series: "",
  //   seriesNumber: "",
  // };
  // startingBookData["title"] = book.title;
  // startingBookData["description"] = book.description;
  // startingBookData["mainCharacter"] = book.mainCharacter;
  // startingBookData["author"] = book.author;
  // startingBookData["series"] = book.series;
  // startingBookData["seriesNumber"] = book.seriesNumber;
  // startingBookData["category"] = book.category;
  // const [showUpdateInput, setShowUpdateInput] = useState(false);
  // const [formData, setFormData] = useState(startingBookData);

  const altText = book.title;
  let cover;
  if (!book.cover) {
    cover = "http://lgimages.s3.amazonaws.com/nc-md.gif";
  } else {
    cover = book.cover;
  }
  // console.log(book.cover);

  return (
    <>
      <div
        key={book.id}
        className="border-2 bg-card text-default-text flex flex-row gap-6 border-nav px-4 py-4 m-4 relative w-11/12 h-fit md:w-[600px]"
      >
        <Image
          className="w-fit h-fit"
          key={book._id}
          src={cover}
          width={160}
          height={230}
          alt={altText}
        />

        <div>
          <h3 className="text-2xl font-bold capitalize pb-4">{book.title}</h3>
          <h2 className="text-lg capitalize font-semibold pb-4">
            {book.author}
          </h2>

          <p className="text-base min-w-fit">{book.description}</p>
        </div>
        <div className="px-4">
          <button onClick={() => deleteBook(book._id)}>Del</button>
        </div>
      </div>
    </>
  );
}
