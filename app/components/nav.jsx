import { faBook, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav
 = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/MyBooks">
          <FontAwesomeIcon icon={faBook} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">Enter new book</p>
      </div>
    </nav>
  );
}

export default Nav
