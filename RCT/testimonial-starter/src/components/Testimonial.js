
import { useState } from "react";
import {PiCaretLeftBold,PiCaretRightBold, IconName } from "react-icons/pi";
function Testimonials(props){
let reviews = props.reviews; 
const intialIndex = 0;
const [currentIndex, setcurrentIndex] = useState(intialIndex);
const[currentReview, setCurrentReview] = useState(reviews[currentIndex]);

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function slideRightHandler(){
    setcurrentIndex((prevIndex) => (prevIndex +1)% reviews.length);
    setCurrentReview(reviews[currentIndex]);
}

function slideLeftHandler(){
    setcurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length)% reviews.length);
    setCurrentReview(reviews[currentIndex]);
}

function surpriseHandler(){
    setcurrentIndex(getRandomArbitrary(0,4));
    setCurrentReview(reviews[currentIndex]);

}

    return (
    <div>
        <div>{currentReview.id}</div>
        <div>
            <img src={currentReview.image} className="h-[300px] w-[300px]" ></img>
        </div>
        <div>{currentReview.name}</div>
        <div>{currentReview.job}</div>
        <div>
            {currentReview.text}
        </div>
        <div>
            <button >
                <PiCaretLeftBold onClick={()=> slideLeftHandler()}></PiCaretLeftBold>
            </button>
            <button onClick={()=> slideRightHandler()}>
                <PiCaretRightBold></PiCaretRightBold>
          </button>

        </div>
        <div>
            <button onClick={surpriseHandler} >Surprise Me</button>
        </div>

    </div>);
}

export default Testimonials;