import React from 'react';
import './Menu/Menu.css';


class Contact extends React.Component {
	constructor(props) {
  super(props)
  
}

render() {
	return(
		<div>
			<div className="content">
       			<div className="text">
       				inst: @instagram <br />
       				vk: vk/group <br />
       				tel: 8 (977) 999-99-99 <br />
       				email: Example@example.com 
       			</div>
       			<div className="image_box">
     				<img src={"./image/contact.jpg"} />
    			</div>
       		</div>
		</div>)
	}
}

export default Contact;