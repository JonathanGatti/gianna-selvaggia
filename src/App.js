import React, { Component } from 'react';
import seedLamps from './seedLamps';
import LampList from './LampList';
import HomePage from './HomePage';
import Lamp from './Lamp';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  
  render() {
    const getLamp = props =>{
      let name = props.match.params.name;
      let currLamp = seedLamps.find(
        lamp => lamp.name.toLowerCase() === name.toLowerCase()
      )
      return <Lamp {...props} lamp={currLamp}/>;
    }
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/lamps' render={() => <LampList lamps={seedLamps} />} />
          <Route exact path='/lamps/:name' 
                render={getLamp} />
        </Switch>
      </div>
    );
  }
}

export default App;
