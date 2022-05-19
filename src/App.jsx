import React from 'react';
import ReactDOM from 'react-dom';
import GetText from './getText.jsx'
import GetImage from './GetImage.jsx'
import Menu from './Menu/Menu.jsx'
import Author from './Author.jsx'
import Contact from './Contact.jsx'
import Homepage from './Homepage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



class App extends React.Component {
items = [{value:"Главная", href:"/", icon: "adjust"}, {value:"Контакты", href:"/contact", icon: "adjust"}, {value:"Об авторе", href:"/author", icon: 'adjust'}, ]

constructor(props) {
    super(props)
    this.state = {
      number: 4, 
      menuActive: false,
    }
    
    this.setMenuActive = this.setMenuActive.bind(this)
  }

   
  setMenuActive(active) { 
      this.setState( { menuActive : !(active)} );
  }

  render() { 
  
  return(
    <div className="site-wrapper">
    <Router>
      <nav>
        <div className="burger-btn" onClick={() => this.setMenuActive(this.state.menuActive)}>
          <span />
        </div> 
         
      </nav>
      <Menu items = {this.items} active={this.state.menuActive} />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/author" element={<Author />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
    </div>

    )
}
}


export default App;
