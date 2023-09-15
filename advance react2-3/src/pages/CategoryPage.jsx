import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1)
  return (
    <div>
      <Header />
      <div>
        <button onClick={navigate(-1)} className='rounded-md border border-gray-400 px-3 py-1 text-sm'>
            Back
        </button>
        <h2>
            Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}
