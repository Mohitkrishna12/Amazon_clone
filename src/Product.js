import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider"

function Product({id,title,image,price,rating}) {
	const [{cart},dispatch] =useStateValue();
	console.log({cart});

	const addToCart =() =>{

		dispatch({
			type:"ADD_TO_CART",
			item:{
				id:id,
				title:title,
				image:image,
				price:price,
				rating:rating
			}
			

		})
	}






	return (
		<div className="product">
			<div className="product-info">
				<p>{title}</p>
				<p className="product-price">
					<small>Rs.</small>
					<strong>{price}</strong>
				</p>
				<div className="product-rating">
					 {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
				</div>
					
			</div>
			<img src={image} />
			<button onClick={addToCart}>Add to cart</button>
		</div>
	)
}

export default Product