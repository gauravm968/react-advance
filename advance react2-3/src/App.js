import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  
  //access n update parameters of query 
  const [searchParams, setSearchParams] = useSearchParams();       //searchParams object
  //access current location in component
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;     //find page value in searchParams object otherwise 1

    if(location.pathname.includes("tags")){
      //show TagPage
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search])   //when be changes in pathname then run and also change page no. then run

  return (

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/blog/:blogId" element={<BlogPage/>} />
    <Route path="/tags/:gta" element={<TagPage/>} />
    <Route path="/categories/:category" element={<CategoryPage/>} />
  </Routes>

  );
}

export default App;
