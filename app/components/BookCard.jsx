import React from "react";
import Image from "next/image";
//import DeleteBlock from "./DeleteButton";

export default function BookCard({ book }) {
  const altText = book.description;

  return (
    <>
      <div key={book.id} className="border-2 bg-card text-default-text flex flex-row gap-6 border-nav px-4 py-4 m-4 relative w-11/12 h-fit md:w-[600px]">
        <Image
          className="w-fit h-fit"
          key={book._id}
          src={book.cover}
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
          {/* <DeleteBlock key={book._id} id={book._id} /> */}
        </div>
      </div>
    </>
  );
}
