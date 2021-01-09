import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";

function Subtotal() {
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) =>(
					<>
						<p>
							Subtotal (0 items)
							<strong> {value}</strong>
						</p>
						<small className="subtotal-gift">
							<input type="checkbox" />This order contains a gift
						</small>
					</>
					)}
					decimalScale={2}
					value={2000}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"Rs."}
					/>
			<button>Proceed to Payment</button>
		</div>
	)
}

export default Subtotal