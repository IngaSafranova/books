import React from 'react'
import Image from 'next/image';
export default function BookCard({ book }) {
  

  const altText = book.description
  
  return (
    <>
      <div className="border-2 text-white border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
        <h2 className='text-white'>{book.author}</h2>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        
          <Image src={book.cover} width={300} height={300} alt={altText} />
      </div>
    </>
  );
}
