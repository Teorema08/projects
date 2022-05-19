import React from 'react';
import ReactDOM from 'react-dom';
import GetText from './getText.jsx'
import GetImage from './GetImage.jsx'

class Homepage extends React.Component {
constructor(props) {
  super(props)
  this.state = { 
      number: 1,
      menuActive: false,
    }
    this.GetNewPage = this.GetNewPage.bind(this);
}

GetNewPage() {
    let random = getRandomInt(10);
    this.setState( { number: random,
                     menuActive: false,
                      } );

    }

render() {
return(
  <div>
      <div className="btn-box">
        <button onClick = {this.GetNewPage}>Еще!</button>  
      </div>
      <div className="content">
       <GetText num = {this.state.number} />    
       <GetImage num = {this.state.number} />
       
      </div>
      </div>   

  )
}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export default Homepage;