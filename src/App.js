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

  switchJediName = () => {
    this.setState({
      jedies: [
        {name : "Ben Kenobi", age : 42},
        {name : "Master Yoda", age : 900},
        {name : "Mace Windu", age : 37}
       ],
       otherState: 'some other value'
    })
  }

  render(){
    return (
      <div>
        <h1>Hello there!</h1>
        <button onClick={this.switchJediName}>Get Jedi info during the Empire's time!</button>
        <Jedi name = {this.state.jedies[0].name} age={this.state.jedies[0].age} />
        <Jedi name = {this.state.jedies[1].name} age={this.state.jedies[1].age} />
        <Jedi name = {this.state.jedies[2].name} age={this.state.jedies[2].age} />
      </div>
    );
  }
}

export default App;
