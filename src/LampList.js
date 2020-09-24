import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LampList.css';


class LampList extends Component{
  render(){
    let type = this.props.match.params.type;
    console.log(type)
    console.log(this.props.lamps[0].type)

    const getType = (type) =>{
      const lampType = this.props.lamps.filter(lamp =>
        lamp.type === type
      )
      return lampType
    }
    return  (
      <div className='Lamp-list'>
        {getType(this.props.match.params.type).map(lamp => (
          <div>
            <h1>{lamp.name}</h1>
            <p>{lamp.type}</p>
            <img src={require(`./imgs/${lamp.src}`)} />
            <Link to={`/lamps/${lamp.type}/${lamp.name}`} >discover more</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default LampList;