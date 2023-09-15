import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

export default function Blogs() {
    ////Step-3 consume context
    const { loading, posts } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-5 mt-[40px] mb-[50px]'>
      
      {
        loading ? 
        (<Spinner />) : 
        (posts.length===0 ? 
          (<div className='flex justify-center items-center'><p>No Post Found</p></div>) : 
            (posts.map((post) => (
              <BlogDetails key={post.id} post={post} />
            )))
        )
      }


    </div>
  )
}
