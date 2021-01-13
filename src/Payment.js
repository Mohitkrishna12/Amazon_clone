import React from 'react';
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";

function Payment() {
	const [{cart,user},dispatch]=useStateValue();
	return (
		<div className="payment">
			<div className="payment-container">
			<h1>
				Checkout (<Link to="/Checkout">{cart?.length} items </Link>)
			</h1>
				<div className="payment-section">
					<div className="payment-title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment-address">
{/*optional chaining to protect incase user is loged in and browser throws error.*/}
						<p>{user?.email}</p>
						<p>B.B road perambur</p>
						<p>Chennai, India</p>
					</div>
				</div>
				<div className="payment-section">
					<div className="payment-title">
						<h3>Review your items for delivery</h3>
					</div>
					<div className="payment-products">
						{cart.map(item =>(
							<CheckoutProduct id={item.id}
									 image={item.image}
									 title={item.title}
									 price={item.price}
									 rating={item.rating} />
						))}
					</div>
				</div>
				<div className="payment-section">
					<div className="payment-title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment-details">
						
					</div>
				</div>
				
			</div>
			
		</div>
	)
}

export default Payment