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
      <div className='Lamp-list'>
        {getType(type).map(lamp => (
          <div className='Lamp'>
            <Link className='Lamp-title'to={`/lamps/${lamp.type}/${lamp.name}`} >{lamp.name}</Link>
            <img src={require(`./imgs/${lamp.src}`)} />
          </div>
        ))}
        <Link to='/'>Go Back</Link>
      </div>
    )
  }
}

export default LampList;