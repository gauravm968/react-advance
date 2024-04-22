import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { fetchTests } from "./redux/slices/CounterSlice";

function App() {
  const dispatch = useDispatch();      //access reducers (methods)
  const data = useSelector((state) => state.counter.data);     //state.sliceName.(initialState->var)

  console.log("data: ", data);

  return (
    <div className="bg-[#0f172a] flex justify-center items-center flex-col w-full ">
    <Counter/>
    <button className="wrapper bg-[#0f172a] text-white p-4 rounded-xl font-bold text-2xl mt-5 border border-white hover:bg-[#1d8abc] transition-all"
        onClick={(e) => {
          dispatch(fetchTests());
          alert("Data fetched successfully! Plz scroll");
        }}
      >
        Fetch Testing Data
      </button>

      <div className="mt-5 flex flex-col justify-center ">
        {
          //access objects array /json
         data.map((obj) => <p key={obj.id} className="text-white text-xl font-semibold">{`${obj.id}-> ${obj.title} `}</p>)
        }
      </div>
    </div>
  );
}

export default App;
