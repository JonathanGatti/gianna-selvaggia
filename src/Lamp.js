import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Lamp.css';

class Lamp extends Component{
  render(){
    const { name, src, price, description, dimension} = this.props.lamp;
    const { history } = this.props
    return ( 
      <div className='Lamp' key={name}>
        <h1 >{name}</h1>
        <img src={require(`./imgs/${src}`)} alt={`${name}`}/>
        <p>{description}</p>
        <p>{price}</p>
        <div>
          <button 
            className='Back-button' 
            onClick={() => history.goBack()}>
              Go Back
          </button>
        </div>
      </div>      
    )
  }
}

export default withRouter(Lamp);