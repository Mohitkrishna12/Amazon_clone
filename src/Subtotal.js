import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider.js";
import {getCartTotal} from "./reducer";
import {useHistory} from "react-router-dom";


function Subtotal() {
	const history=useHistory();

	const [{cart},dispatch]=useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) =>(
					<>
						<p>
							Subtotal ({cart.length} items)
							<strong> {value}</strong>
						</p>
						<small className="subtotal-gift">
							<input type="checkbox" />This order contains a gift
						</small>
					</>
					)}
					decimalScale={2}
					value={getCartTotal(cart)}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"Rs."}
					/>
			<button onClick={e => history.push("/payment")} >Proceed to Payment</button>
		</div>
	)
}

export default Subtotal