import React from 'react';
import logo from './images/ReFocal.png';
//import logo from './images/ReFocal2.png';
import Converter from './converterComponent/converter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <br/>
        <Converter/>
      </header>
    </div>
  );
}

export default App;
