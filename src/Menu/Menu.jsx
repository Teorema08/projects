import React from 'react';
import './Menu.css';

const Menu = ({items, active}) => { 

return ( 
	<div className= {active ? 'menu active' : 'menu'}>
		<div className='blur' />
		<div className='menu__content'>	
		{items.map( item => 
					<a href={item.href}>
					<div className='menu__header'>
						{item.value}
					</div>
					</a>     
					)}
		</div>	
		</div>

	)
}


export default Menu; 


