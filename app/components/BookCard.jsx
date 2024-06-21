import React from 'react'
import Image from 'next/image';
export default function BookCard({ book }) {
  

  const altText = book.description
  
  return (
    <>
      <div className="border-2 bg-card text-default-text flex flex-row gap-6 border-nav px-4 py-4 m-4 relative w-fit h-fit lg:w-500 lg:h-64">
        <Image
          
          src={book.cover}
          width={160}
          height={230}
          alt={altText}
        />
        <div>
          <h3 className="text-2xl capitalize pb-4">{book.title}</h3>
          <h2 className="text-lg capitalize pb-4">{book.author}</h2>

          <p className='text-base'>{book.description}</p>
        </div>
      </div>
    </>
  );
}
