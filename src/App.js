import React,{ Component } from 'react';
import './App.css';
import Jedi from './Jedi/Jedi';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello there!</h1>
        <button>Get Jedi!</button>
        <Jedi name="Obi-Wan Kenobi" age="24" />
        <Jedi name="Master Yoda" age="860">Funny this is...</Jedi>
        <Jedi name="Mace Windu" age="37" />
      </div>
    );
  }
}

export default App;
