import { useState } from "react";
import "./App.css";

function App() {

  const[count, setCount]= useState(0);
  function decreaseHandler(){
      setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
<div className="h-screen w-screen bg-[#344151] flex justify-center items-center flex-col gap-5">
    <div className="text-[#0398d4] font-medium text-2l">Increment & Decrement</div>
    <div className="bg-white flex justify-center p-3 gap-12 rounded-sm text-[25px] text-[#34451]">
        <button className="border-r-2 w-20" onClick={decreaseHandler}>-</button>
        <div className="font-bold">{count}</div>
        <button className="border-l-2 w-20" onClick={increaseHandler} >+</button>
    </div>
    <button className="bg-[#0398d4] p-3 rounded-md text-white"  onClick={resetHandler}>Reset</button>
</div>
  );
}

export default App;
