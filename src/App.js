import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello there!</h1>
        <button>Get Jedi!</button>
        <Person name="Obi-Wan Kenobi" age="24" />
        <Person name="Master Yoda" age="860">Funny this is...</Person>
        <Person name="Mace Windu" age="37" />
      </div>
    );
  }
}

export default App;
