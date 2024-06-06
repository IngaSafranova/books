import { faBook, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav
 = () => {
  return (
    <nav className="flex justify-between bg-nav p-4 text-default-text">
      <div className="">
        <Link href="/" className='text-2xl font-extrabold'>My Library</Link>
        <ul className="flex items-center space-x-4 text-xl">
          <Link href="/books">Books</Link>
          <Link href="/books/new">Add Book</Link>
          <Link href="/authors">Authors</Link>
          <Link href="/authors/new">Add Author</Link>
        </ul>
      </div>
      <div>
        <p className="text-default-text">Enter new book</p>
      </div>
    </nav>
  );
}

export default Nav
