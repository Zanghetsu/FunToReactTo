import React,{ Component } from 'react';
import './App.css';
import Jedi from './Jedi/Jedi';

class App extends Component {
  state = {
    jedies: [
      {name : "Obi-Wan Kenobi", age : 24},
      {name : "Master Yoda", age : 860},
      {name : "Mace Windu", age : 37}
      
     ]
  }


  render(){
    return (
      <div>
        <h1>Hello there!</h1>
        <button>Get Jedi!</button>
        <Jedi name = {this.state.jedies[0].name} age={this.state.jedies[0].age} />
        <Jedi name = {this.state.jedies[1].name} age={this.state.jedies[1].age} />
        <Jedi name = {this.state.jedies[2].name} age={this.state.jedies[2].age} />
      </div>
    );
  }
}

export default App;
