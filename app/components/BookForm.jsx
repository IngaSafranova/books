"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditBookForm = ({ book }) => {
  // const EDITMODE = book._id === "new" ? false : true;
    const router = useRouter();
    
  const startingBookData = {
    author: '',
    title: '',
    description: '',
    category:'',
    // series: '',
    // seriesNumber: '',
  };

  // if (EDITMODE) {
  //   startingBookData["title"] = book.title;
  //   startingBookData["description"] = book.description;
  //   startingBookData["author"] = book.author;
  //   startingBookData["series"] = book.series;
  //   startingBookData["seriesNumber"] = book.seriesNumber;
  //   startingBookData["category"] = book.category;
  // }

  const [formData, setFormData] = useState(startingBookData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (EDITMODE) {
    //   const res = await fetch(`/api/Books/${book._id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({ formData }),
    //   });
    //   if (!res.ok) {
    //     throw new Error("Failed to update book");
    //   }
    // } else {
      const res = await fetch("/api/books", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create book");
      }
    // }

    router.refresh();
    router.push("/");
  };

  

  return (
    <div className=" flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        {/* <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3> */}
        <label>Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.author}
          className="text-black"
        />
        <label>Title</label>

        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
          className="text-black"
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          rows="5"
          className="text-black"
        />
        <label>Category</label>

        <input
          id="category"
          name="category"
          type="text"
          onChange={handleChange}
          value={formData.category}
          className="text-black"
        />

        <input
          type="submit"
          className="btn max-w-xs"
          // value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default EditBookForm;
