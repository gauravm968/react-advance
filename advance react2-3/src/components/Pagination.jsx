import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination() {

  //Step-3
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center fixed bottom-0 bg-white border border-gray-400'>

      <div className='flex justify-between items-center w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-3'>
        {
          page > 1 && (<button className='rounded-md border border-gray-400 px-3 py-1 text-sm'
          onClick={() => handlePageChange(page-1)}>
          Previous
        </button>)
        }

        {
          page < totalPages && (<button className='rounded-md border border-gray-400 px-3 py-1 text-sm'
          onClick={() => handlePageChange(page+1)}>
            Next
          </button>)
        }
        </div>
      <p className='font-bold text-sm'>
          Page {page} of {totalPages}
      </p>
      </div>

    </div>
  )
}
