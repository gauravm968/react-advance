import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// custom hook
export default function useGif(tag) {
    const [gif, setGif] = useState("");
    //for spinner
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {      //if tag(outside prop) prop not pass here then show warning in useEffect dependency
        setLoading(true);     //before api data load,show loader
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);        //const {data} = ...   //destructuring
        const imageSource = output.data.data.images.downsized_large.url;
        setGif(imageSource);
        // console.log(imageSource)
        setLoading(false)         //after data fetch, no need show loader
    }

    useEffect(() => {
        fetchData("dog")      //
    },[])

    return {gif, loading, fetchData};
}
