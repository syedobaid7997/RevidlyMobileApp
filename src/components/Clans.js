import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './clanStyles.css';
const Clans=()=>{
		return(
			<div>
			<ul>
				<li className='clanButton first'><Link to="/">Home</Link></li>
				<li className='clanButton'><NavLink to="/Technology">technology</NavLink></li>
				<li className='clanButton'><NavLink to="/Arts">arts</NavLink></li>
			</ul>
			</div>
			);
}
export default Clans;