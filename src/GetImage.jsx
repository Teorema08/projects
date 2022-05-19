import React from 'react';
import stihi from './stihi.js';

function GetImage(props) {
  
  return(
    <div className="image_box">
     <img src={"./image/" + props.num + ".png"} />
    </div>) 
}


export default GetImage;
