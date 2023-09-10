import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  // const[gif, setGif] = useState("");
  // //for spinner
  // const[loading, setLoading] = useState(false);

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
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-1/2 bg-[#0db10d] rounded-xl border border-gray-500 flex flex-col items-center gap-y-5 mt-[15px]'>
        
        <h1 className='text-2xl underline uppercase font-bold mt-[10px]'> A Random Gif</h1>

        {
          loading ? (<Spinner />) : (<img src={gif} alt="" width="450" />)
        }

        <button onClick={ () => fetchData() } 
        className='w-10/12 bg-[yellow] text-lg py-2 rounded-lg mb-[20px] hover:font-bold'>GENERATE</button>

    </div>
  )
}
