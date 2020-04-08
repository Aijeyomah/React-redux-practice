import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
import { UserContext} from '../../App'
import { Link } from 'react-router-dom'
import {useContext} from 'react'

// import React from 'react';
// import logo from '../logo.svg';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../App'

const Header = () => {

const user = useContext(UserContext)

  return (
    <div className="container">
    <div className="wrapper">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
      <ul>
      <li><Link to='/' className="links">Home</Link></li>
      <li><Link to='/about' className="links">About</Link></li>
      <li><Link to='/contact' className="links">Contact</Link></li>
      <li><Link to='/services' className="links">Services</Link></li>

   <div className="links">{user}</div>


      </ul>
      </div>
      </div>
   
    </div>
  );
}

export default Header;