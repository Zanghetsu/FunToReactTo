import React,{ Component } from 'react';
import './App.css';
import person from './Jedi/Jedi';
import Jedi from './Jedi/Jedi';

class App extends Component {
  state = {
    jedies: [
      {name : "Obi-Wan Kenobi", age : 24},
      {name : "Master Yoda", age : 860},
      {name : "Mace Windu", age : 37}
     ],
    showJediMasters: false
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


  removeJediMaster = (jediMasterIndex) => {
    const jediMasters = this.state.jedies
    jediMasters.splice(jediMasterIndex, 1)
    this.setState({jedies : jediMasters})

  }


  toggleJediMasters = () => {
      const doesShow = this.state.showJediMasters;
      this.setState({showJediMasters : !doesShow})
  }

  render(){

    const styleButton = {
      backgroudColor:'white',
      font: 'inherit',
      border: '1px solid black',
      padding:'8px',
      cursor: 'pointer'
    }

    let jediMasters =null;

    if(this.state.showJediMasters){
      jediMasters = <div>
                      {this.state.jedies.map((jedi, index) => {
                          return <Jedi click={() => this.removeJediMaster(index)} name = {jedi.name} age={jedi.age}/>
                      })}
                    </div>
    }

    return (
      <div className="App">
        <h1>Hello there!</h1>
        <button style={styleButton} onClick={() => this.toggleJediMasters()}>Get Jedi Masters!</button>
        { jediMasters}
      </div>
    );
  }
}

export default App;
