import './ProductItem.css'
import ProductDate from './ProductDate';
import { useState } from 'react';
function ProductItem(props){
    const [title,setTitle] = useState(props.tittle);
    function clickHandler(){
        setTitle('popcorn')
    }
    return(
    <div>
        <div className='product-Item-description'>
        <ProductDate date={props.date}></ProductDate>
            <h2>{title}</h2>
            <button onClick={clickHandler}>Add to cart</button>
        </div>
    </div>);
}

export default ProductItem;