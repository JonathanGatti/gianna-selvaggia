import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render(){
    const imgSrc = process.env.PUBLIC_URL + '/imgs/home/homepage.jpg'
    return(
      <div className='HomePage'>
        <div className='HomePage-header'>
          <div className='HomePage-header-text'>
            <h1 className='HomePage-title'>Gianna Selvaggia</h1>
            <p>I LIKE TO RECYCLE BECAUSE MORE OR LESS ANYTHING CAN BE RECYCLED. IT IS TIME TO BE AWARE OF HOW TO CONTRIBUTE TO RECYCLING  AND ENLIGHTEN THE WORLD THROUGHOUT THE USE OF SALVAGED MATERIALS, BRINGING BACK THE BALANCE BETWEEN DARKNESS AND LIGHT
            </p>
            </div>
            <img className='HomePage-img' src={imgSrc} alt='HomePage-img'/>
        </div>
        <Link className='HomePage-link' to='/lamps'>Discover The Catalogue</Link>
      </div>

    )
  }
}

export default HomePage;