import React,{ Component } from 'react';
import './App.css';
import Jedi from './Jedi/Jedi';

class App extends Component {
  state = {
    jedies: [
      {id:'0', name : "Obi-Wan Kenobi", age : 24},
      {id:'1', name : "Master Yoda", age : 860},
      {id:'2', name : "Mace Windu", age : 37}
     ],
    showJediMasters: false
  }

  switchJediName = (event, id) => {
    const jediIndex = this.state.jedies.findIndex(j => {
      return j.id === id;
    })

    const jedi = {...this.state.jedies[jediIndex]}

    jedi.name = event.target.value

    const jedies = [...this.state.jedies]
    jedies[jediIndex] = jedi;
    
    this.setState({ jedies : jedies })
  }


  removeJediMaster = (jediMasterIndex) => {
    const jediMasters =[...this.state.jedies]
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
                          return <Jedi click={() => this.removeJediMaster(index)} 
                          name = {jedi.name} 
                          age={jedi.age}
                          changed = {(event) => this.switchJediName(event, jedi.id)}
                          key={index}/>
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
