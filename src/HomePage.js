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
            <img className='HomePage-img' src={require('./imgs/home/homepage.jpg')} alt='homepage image'/>
        </div>
        <div>
          <h2>Discover The Catalogue</h2>
        </div>
        <div className='Links-container'>
          <div className='HomePage-link' >
            <Link to='/lamps/ceiling'>Ceiling Lamps</Link>
            <img src={require('./imgs/lucrezia.jpg')} alt='chandelier link'/>
          </div>
          <div className='HomePage-link'>
            <Link to='/lamps/floor'>Floor Lamps</Link>
            <img src={require('./imgs/lucrezia.jpg')} alt='floor lamps link'/>
          </div>
          <div className='HomePage-link'>
            <Link to='/lamps/table'>Table Lamps</Link>
            <img src={require('./imgs/cirene.jpg')} alt='table lamps link'/>
          </div>
        </div>
      </div>

    )
  }
}

export default HomePage;