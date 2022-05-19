import React from 'react';
import './Menu/Menu.css';


class Author extends React.Component {
	constructor(props) {
  super(props)
  
}

render() {
	return(
		<div>
			<div className="content">
       			<div className="text">
       				Станислав Станиславович Минаков - Поэт, Радиоведущий, Автор песен. В своих работах Станислав Станиславич часто эксперементирует, играет с формой подачи, со звукосочетаниями и ритмикой. Отличительной чертой являются яркие, специфичные образы, которые сразу рисуют необычную картину в головах читающих. 
       			</div>
       			<div className="image_box">
     				<img src={"./image/author.jpg"} />
    			</div>
       		</div>
		</div>)
	}
}

export default Author;