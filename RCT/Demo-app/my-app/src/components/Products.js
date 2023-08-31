import './Products.css'
import ProductItem from './ProductItem';

function Products(props){
    return (
    <div className='product-paraent'>
   <div className='products'>
        <ProductItem tittle={props.items[0].tittle} date={props.items[0].date}></ProductItem>
        <ProductItem tittle={props.items[1].tittle} date={props.items[1].date}></ProductItem>
        <ProductItem tittle={props.items[2].tittle} date={props.items[2].date}></ProductItem>

        <ProductItem tittle={props.items[3].tittle} date={props.items[3].date}></ProductItem>

    </div>
    </div>
 );
}

export default Products;