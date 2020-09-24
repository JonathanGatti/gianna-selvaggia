import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LampList.css';


class LampList extends Component{
  render(){
    const { type } = this.props.match.params;

    const getType = (type) =>{
      const lampType = this.props.lamps.filter(lamp =>
        lamp.type === type
      )
      return lampType
    }

    return  (
      <div className='container'>
        <div className='Lamp-list'>
        {getType(type).map(lamp => (
          <div className='Lamp'>
            <Link className='Lamp-title'to={`/lamps/${lamp.type}/${lamp.name}`} >{lamp.name}</Link>
            <img className='Lamp-img' src={require(`./imgs/${lamp.src}`)} />
          </div>
        ))}
        </div>
        <div className='Lamp-link'>
          <Link to='/'>Go Back</Link>
        </div>
      </div>
    )
  }
}

export default LampList;