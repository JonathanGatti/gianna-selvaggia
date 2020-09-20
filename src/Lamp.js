import React, { Component } from 'react';
import './Lamp.css'

class Lamp extends Component{
  render(){
    const { name, src, price, type} = this.props.lamp;
    const imgSrc = process.env.PUBLIC_URL + src;
    console.log(imgSrc)
    return ( 
      <div className='Lamp' key={name}>
        <h1 >{name}</h1>
        <img className='Lamp-img' src={imgSrc} alt={name} />
        <p>{price}</p>
        <p>{type}</p>
      </div>      
    )
  }
}

export default Lamp;