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

  switchJediName = (newName) => {
    this.setState({
      jedies: [
        {name : newName, age : 42},
        {name : "Master Yoda", age : 900},
        {name : "Mace Windu", age : 37}
       ],
       otherState: 'some other value'
    })
  }

  jediNameChangeHandler = (event) => {
    this.setState( {
      jedies: [
        {name : "Obi-Wan", age : 42},
        {name : event.target.value, age : 900},
        {name : "Mace Windu", age : 37}
       ]
    })
  }

  render(){

    const styleButton = {
      backgroudColor:'white',
      font: 'inherit',
      border: '1px solid black',
      padding:'8px',
      cursor: 'pointer'
    }


    return (
      <div className="App">
        <h1>Hello there!</h1>
        <button style={styleButton} onClick={() => this.switchJediName("Ben Kenobi")}>Get Jedi info during the Empire's time!</button>
        <Jedi 
          name = {this.state.jedies[0].name} 
          age={this.state.jedies[0].age}
          click = {this.switchJediName.bind(this, "Obi")} />
        <Jedi 
          name = {this.state.jedies[1].name} 
          age={this.state.jedies[1].age} 
          changed = {this.jediNameChangeHandler}/>
        <Jedi 
          name = {this.state.jedies[2].name} 
          age={this.state.jedies[2].age} />
      </div>
    );
  }
}

export default App;
