import React from 'react'
import { POST } from '../api/books/route.jsx'


export default async function FetchCover() {
  const bookData = POST()
  const book = await bookData
console.log(book)

  return (
    <div>FetchCover</div>
  )
}
