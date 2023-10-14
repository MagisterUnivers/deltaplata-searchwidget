import React from 'react';
import SearchSVG from '../../assets/svg/search.svg';
import './Header.style.scss';

const Header = () => {
	return (
		<>
			<nav>
				<div>
					<button>
						<SearchSVG />
					</button>
					<input />
				</div>
				<div>
					<h2>Looking for more details?</h2>
					<button></button>
				</div>
			</nav>
		</>
	);
};

export default Header;
