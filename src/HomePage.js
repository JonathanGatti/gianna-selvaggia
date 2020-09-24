import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render(){
    return(
      <div className='HomePage'>
        <div className='HomePage-header'>
          <div className='HomePage-header-text'>
            <h1 className='HomePage-title'>Gianna Selvaggia</h1>
            <p>I LIKE TO RECYCLE BECAUSE MORE OR LESS ANYTHING CAN BE RECYCLED. IT IS TIME TO BE AWARE OF HOW TO CONTRIBUTE TO RECYCLING  AND ENLIGHTEN THE WORLD THROUGHOUT THE USE OF SALVAGED MATERIALS, BRINGING BACK THE BALANCE BETWEEN DARKNESS AND LIGHT
            </p>
            </div>
            <img className='HomePage-img' src={require('./imgs/home/homepage.jpg')} alt='HomePage-img'/>
        </div>
        <div>
          <Link className='HomePage-link' to='/lamps/ceiling'>Ceiling Lamps</Link>
        </div>
        <div>
          <Link className='HomePage-link' to='/lamps/floor'>floor Lamps</Link>
        </div>
        <div>
          <Link className='HomePage-link' to='/lamps/table'>table Lamps</Link>
        </div>
      </div>

    )
  }
}

export default HomePage;