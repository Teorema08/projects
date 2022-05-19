import React from 'react';
import stihi from './stihi.js';

function GetText(props) {
  return(<div className="text">{stihi[props.num]}</div>) 
}


export default GetText;
