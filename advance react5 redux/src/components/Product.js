import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';

export default function Product({ item }) {           //Home.js

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  const removeCartHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return ( 
    //----> box shadow manu arora
    <div className='flex flex-col items-center justify-between gap-1 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40'>{item.title.split(" ").slice(0,3).join(" ")+"..."}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[11px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={item.image} alt='Product' className='h-full w-full'/>
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-3'>
        <p className='text-green-600 font-semibold'>${item.price}</p>
        {
        cart.some( (p) => p.id === item.id) ? 
        (<button onClick={removeCartHandler}
        className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Remove Item</button>) 
        :
        (<button onClick={addCartHandler}
          className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Add to Cart</button>)
      }
      </div>
      
    </div>
  )
}
