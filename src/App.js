import React from 'react';
import seedLamps from './seedLamps';
import LampList from './LampList';
import HomePage from './HomePage';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/lamps' render={() => <LampList lamps={seedLamps} />} />
      </Switch>
    </div>
  );
}

export default App;
