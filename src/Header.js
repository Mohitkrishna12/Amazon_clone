import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider.js"

function Header() {
	const [{cart},dispatch]=useStateValue();

	return (
		<div className="header">
			<Link to="/">
				<img className="header-logo" src="http://pngimg.com/uploads/amazon//amazon_PNG11.png" />
			</Link>
			<div className="header-search">
				<input className="header-searchinput" type="text" />
				<SearchIcon className="header-searchicon" />
			</div>
			<div className="header-nav">
				<div className="header-options">
					<span className="header-option1">Hello User</span>
					<span className="header-option2">Sign-in</span>
				</div>
				<div className="header-options">
					<span className="header-option1">Orders</span>
					<span className="header-option2">& returns</span>
				</div>
				<div className="header-options">
					<span className="header-option1">your</span>
					<span className="header-option2">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header-optionbasket">
					<ShoppingCartIcon  />
					<span className="header-option2 header-basketcount">{cart?.length}</span>
				</div>
				</Link>
				
			</div>
		</div>

	)
}

export default Header