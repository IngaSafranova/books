"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import Book from "../lib/books";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteBook = async () => {
    const res = await fetch(`http://localhost:3000/api/database/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  // async function DELETE() {
  //   try {
  //     // const { id } = params;

  //     const res = await Book.findByIdAndDelete(id);
  //     if (res.ok) {
  //       router.refresh();
  //     }
  //     return res.json({ message: "Book Deleted" }, { status: 200 });
  //   } catch (error) {
  //     console.log(error);
  //     return res.json({ message: "Error", error }, { status: 500 });
  //   }
  // }

  return (
    <>
      <FontAwesomeIcon
        icon={faX}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={deleteBook}
      />
    </>
  );
};

export default DeleteBlock;
