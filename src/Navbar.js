import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props){
  return(
    <nav className='Navbar'>
      <div>
        <Link className='Navbar-link' to='/'>Home</Link>
        <Link className='Navbar-link' to='/'>About</Link>
      </div>
      <div className='Navbar-icons'>
        <i className="fa fa-instagram fa-2x"></i>
        <i className="fa fa-facebook fa-2x"></i>
        <i className="fa fa-envelope fa-2x"></i>
      </div>
    </nav>
  )
}

export default Navbar;