import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";


function Checkout() {
	const [{cart,user},dispatch]=useStateValue();
	return (
		<div className="checkout">
			<div className="checkout-left">
				<img className="checkout-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />
				<div>
					<h3>hello, {user?.email}</h3>
					<h2 className="checkout-title">Your shopping Cart</h2>
					{cart.map(item =>(
							<CheckoutProduct id={item.id}
									 image={item.image}
									 title={item.title}
									 price={item.price}
									 rating={item.rating} />
						))}
					
				</div>
			</div>
			<div className="checkout-right">
				<Subtotal />
				
			</div>
		</div>
	)
}

export default Checkout