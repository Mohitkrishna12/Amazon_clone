import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
	return (
		<div className="header">
			<img className="header-logo" src="http://pngimg.com/uploads/amazon//amazon_PNG11.png" />
			<div className="header-search">
				<input className="header-searchinput" type="text" />
				<SearchIcon className="header-searchicon" />
			</div>
			<div className="header-nav">
				<div className="header-options">
					<span className="header-option1">hello user</span>
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
			</div>
		</div>

	)
}

export default Header