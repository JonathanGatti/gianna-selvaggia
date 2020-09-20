import React from 'react';
import seedLamps from './seedLamps';
import LampList from './LampList';


function App() {
  return (
    <div>
      <LampList lamps={seedLamps} />
    </div>
  );
}

export default App;
