"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditBookForm = ({ book }) => {
  const EDITMODE = book._id === "new" ? false : true;
    const router = useRouter();
    
  const startingBookData = {
    author: '',
    title: '',
    description: '',
    series: '',
    seriesNumber: '',
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

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

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

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
        <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
        <label>Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.author}
        />
        <label>Title</label>
        
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
           
          />
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
    
            value={formData.description}
            rows="5"
          />

          
        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default EditTicketForm;
