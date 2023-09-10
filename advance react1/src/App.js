import "./App.css";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
   <div className="w-full h-screen flex flex-col items-center background">

      <h1 className="bg-white rounded-xl w-11/12 text-center mt-[20px] px-10 py-2 text-3xl font-bold" >RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>

   </div>
  );
}

export default App;
