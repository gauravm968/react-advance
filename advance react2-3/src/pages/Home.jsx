import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}
