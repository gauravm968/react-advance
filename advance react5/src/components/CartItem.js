import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

export default function SingleCart({item, itemIndex}) {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className='p-4 border-b-2 last:border-none border-slate-700'>
      
      <div className='flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row'> 
          <div className='md:w-[30%] w-full flex justify-center items-center'>
            <img src={item.image} alt='Product' className='w-[40%] md:w-[50%] lg:w-full'/>
          </div>
          <div className='md:w-[70%] w-full flex flex-col gap-5'>
            <h1 className='text-xl font-[600] text-slate-700'>{item.title}</h1>
            <p className='text-slate-700'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
            <div className='flex justify-between'>
              <p className='font-bold text-[#16a34a] text-lg'>${item.price}</p>
              <div onClick={removeFromCart}
              className='w-10 h-10 rounded-full flex bg-red-500 justify-center items-center  hover:text-white transition-all cursor-pointer'>
                <MdDeleteSweep fontSize= {25}/>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}
