import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

////Step-1 (context create)
export const AppContext = createContext();

export default function AppContextProvider({ children }) {       //here children represents <App /> (index.js)
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //fetch blog data
    async function fetchBlogPosts(page = 1, tag=null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            alert.error("Error in fetching data!!");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate( {search : `?page=${page}`})
        setPage(page);
        
    }

    //context - (required data (object))
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,            //function
        handlePageChange,         //function
    };

    ////Step-2 (context provider) 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

    ////Step-3 consume context through useContext hook (Blogs.jsx)
}