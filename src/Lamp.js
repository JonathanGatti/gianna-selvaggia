import React, { Component } from 'react';
import './Lamp.css';

class Lamp extends Component{
  render(){
    const { name, src, price, type, description, dimension} = this.props.lamp;
    console.log(src)
    return ( 
      <div className='Lamp' key={name}>
        <h1 >{name}</h1>
        <img src={require(`./imgs/${src}`)} />
        <p>{description}</p>
        <p>{price}</p>
        <p>{type}</p>
      </div>      
    )
  }
}

export default Lamp;