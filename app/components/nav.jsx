
import Link from 'next/link'
import React from 'react'

const Nav
 = () => {
   return (
     <>
       <nav className="flex justify-between place-items-center py-6 px-4 lg:p-10 bg-gradient-to-r from-nav to-orange-300 text-white w-screen h-[100px]">
         <div className="flex  flex-col lg:flex-row justify-evenly h-fit w-3/4">
           <Link href="/" className="text-4xl font-extrabold">
             My Library
           </Link>
           <ul className="flex items-center space-x-4 text-2xl font-bold">
             <Link href="/books">Books</Link>
             <Link href="/books/new">Add Book</Link>
           </ul>
         </div>
         <div>
           <p className="text-default-text">Enter new book</p>
         </div>
       </nav>
     </>
   );
}

export default Nav
