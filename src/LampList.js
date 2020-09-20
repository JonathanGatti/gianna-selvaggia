import React, { Component } from 'react';
import Lamp from './Lamp'
import './LampList.css';


class LampList extends Component{
  render(){
    const lamps = this.props.lamps.map(lamp => <Lamp lamp={lamp} />);
    return (
      <div className='Lamp-list'>
        {lamps}
      </div>
    )
  }
}

export default LampList;