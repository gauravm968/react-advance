import { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  // const[gif, setGif] = useState("");
  // //for spinner
  // const[loading, setLoading] = useState(false);
  const[tag, setTag] = useState("dog");

  // async function fetchData(){
  //   setLoading(true);     //before api data load,show loader
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const output = await axios.get(url);        //const {data} = ...   //destructuring
  //   const imageSource = output.data.data.images.downsized_large.url;      
  //   setGif(imageSource);
  //   // console.log(imageSource)
    
  //   setLoading(false)         //after data fetch, no need show loader
  // }

  // useEffect( () => {
  //   fetchData();
  // },[])
                                 //custom hook
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 rounded-xl border border-gray-500 flex flex-col items-center gap-y-5 mt-[15px]'>
        
        <h1 className='text-2xl underline uppercase font-bold mt-[10px]'>Random {tag} Gif</h1>

        {
          loading ? (<Spinner />) : (<img src={gif} alt="" width="450" />)
        }

        <input className='w-10/12 text-lg py-2 rounded-lg text-center outline-none' 
        type='text'
        onChange={(event) => setTag(event.target.value)}
        value={tag} />

        <button onClick={ () => fetchData(tag) }  
        className='w-10/12 bg-[yellow] text-lg py-2 rounded-lg mb-[20px] hover:font-bold'>GENERATE</button>

    </div>
  )
}
