import React from 'react';
import Votes from './Votes.js'
import Company from './Company.jpg';
import Comapny2 from  './Comapny2.png';
import './styles.css';
const Arts=()=>{
	return(
			<div>
			<h1 className='name'>Arts</h1>
			<p>hseoifvdlvndigfhdlvndo</p>
			<div id = "ap1">
					<h4><img className='profile' src={Company} width = "30" height="30" />someone</h4>
					<p>fjghkeshvldsknsduj ksdhgkuvhljzk kzidhvudbj</p>
					<img src={Comapny2} width = "400" height="250"/>
					<Votes />
				</div>
				<div id = "tp2">
					<h4><img className='profile' src={Comapny2} width = "30" height="30"/>hulk</h4>
					<p>fjghkeshvldsknsduj ksdhgkuvhljzk kzidhvudbj</p>
					<img src={Company} width = "400" height="250" />
				</div>
			<Votes />
			</div>
		)
}
export default Arts;