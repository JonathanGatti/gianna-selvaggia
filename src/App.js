import React, { Component } from 'react';
import seedLamps from './seedLamps';
import LampList from './LampList';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Lamp from './Lamp';
import ContactPage from './ContactPage';
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
        <Navbar />
        <Switch>
          <Route exact path='/gianna-selvaggia' render={() => <HomePage lamps={seedLamps}/>} />
          <Route 
            exact 
            path='/lamps/:type' 
            render={(routeProps) => 
              <LampList {...routeProps} lamps={seedLamps} />} />
          <Route exact path='/lamps/:type/:name' render={getLamp} />
          <Route exact path='/gianna-selvaggia/contact' render={() => <ContactPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
