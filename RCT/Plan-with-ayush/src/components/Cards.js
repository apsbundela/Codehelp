import { useState } from "react";

function Cards({id,name,info,image,price,removeTour}){

    const[readMore,setReadMore] = useState(false);
    let description = readMore ?  info :`${info.substring(0,200)}....`;

    function showHandler(){
        setReadMore(!readMore);
    }
    return (
        <div className="card-container">
                <img src={image}></img>
            <div className="tour-info">
                <div>₹{price}</div>
                <div>{name}</div>
            </div>
            <div className="tour-description">
                {description}
                <span onClick={showHandler}>
                    {readMore ? `...read less`:`read more`}
                </span>
            </div>
            <button onClick={()=>removeTour(id)}>Intrested</button>
        </div>
    );
}

export default Cards;