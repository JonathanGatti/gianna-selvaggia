import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LampList.css';


class LampList extends Component{
  render(){
    return  (
      <div className='Lamp-list'>
        {this.props.lamps.map(lamp => (
          <div>
            <h1>{lamp.name}</h1>
            <p>{lamp.type}</p>
            <img src={require(`./imgs/${lamp.src}`)} />
            <Link to={`/lamps/${lamp.name}`} >discover more</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default LampList;