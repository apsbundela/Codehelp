import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import FilterData from "./components/FilterData";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {apiUrl,filterData} from "./data"
import { toast } from "react-toastify";
const App = () => {

  const[loading,setLoading]=useState(false);
  const[courses,setCourses]= useState([]);
  const [category,setCategory] = useState(filterData[0].title);
 async function fetchDataOne(){

  try {
    let response = await fetch(apiUrl);
    let output = await response.json();
    setCourses(output.data);

  }catch(error){
    toast.error("Something went wrong !!");
  }

 }

 useEffect(()=> {
  fetchDataOne();
 },[])

  return (<div className="bg-slate-700">
    <div className="d-flex  flex-column">
      <NavBar></NavBar>
    </div>
    <div>
       <FilterData filterdata={filterData} category={category} setCategory={setCategory}></FilterData>
    </div>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-row justify-evenly items-center min-h-[50vh]  ">
      <Cards courses={courses} category={category}></Cards>
    </div>
  </div>);
};

export default App;
