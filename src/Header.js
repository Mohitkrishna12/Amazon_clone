import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider.js"
import {auth} from "./firebase";

function Header() {
	const [{cart,user},dispatch]=useStateValue();
	const handleAuthentication =()=>{
		if(user){
			auth.signOut();
		}
	}

	return (
		<div className="header">
			<Link to="/">
				<img className="header-logo" src="http://pngimg.com/uploads/amazon//amazon_PNG11.png" />
			</Link>
			<div className="header-search">
				<input className="header-searchinput" type="text" />
				<SearchIcon className="header-searchicon" />
			</div>
			
			<div className="header-nav"  >
				<Link to={!user &&"/login"}>
					<div className="header-options" onClick={handleAuthentication}>
						<span className="header-option1">Hello {user?user?.email:"Guest"}</span>
						<span className="header-option2">{user?"Sign-out":"Sign-in"}</span>
					</div>
				</Link>
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