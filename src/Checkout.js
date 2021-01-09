import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout-left">
				<img className="checkout-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />
				<div>
					<h2 className="checkout-title">Your shopping Cart</h2>
					
				</div>
			</div>
			<div className="checkout-right">
				<Subtotal />
				
			</div>
		</div>
	)
}

export default Checkout