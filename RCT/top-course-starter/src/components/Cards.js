import { useState } from "react";
import Card from "./Card";

function Cards(props){

    let courses = props.courses;
    let allCourses =[];
    let category = props.category;
   const[likedCards,setLikedCards] = useState([]);
    function getAllCourses(){
        if(category==='All'){
            Object.values(courses).forEach(array => {
                array.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }else{
            return courses[category];
        }

    }
    return(
    <div className="flex flex-wrap justify-center gap-4 mb-4 ">
            {
                   getAllCourses().map((course)=>(
                        <Card key={course.id} course={course}  likedCards={likedCards}  setLikedCards={setLikedCards}></Card>
                   ))
            }
    </div>);
}

export default Cards;