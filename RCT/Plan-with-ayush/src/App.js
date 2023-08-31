import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
const App = () => {

const[tours,setTours] = useState(data)

function removeTour(id){
  let newTours = tours.filter(tour=> tour.id !== id)
  setTours(newTours);
}

function reloadData(){
  setTours(data);
}

if(tours.length===0){

  return (<div>
      <h2>No Tours Left</h2>
      <button onClick={reloadData}>Refresh</button>
  </div>)
}


  return (<div>
    
      <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>);
};

export default App;
