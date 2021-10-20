
import React,{ Component } from 'react';
import styleClasses from './App.module.css';
import JediMasters from '../Components/JediMasters/JediMasters'
import Cockpit from '../Components/Cockpit/Cockpit';


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

    let jediMasters = null;

    if(this.state.showJediMasters){
        jediMasters=(
                      <div>
                        <JediMasters  jedies ={this.state.jedies} 
                                      click={this.removeJediMaster} 
                                      changed={this.switchJediName}
                                      />
                      </div>
                    )
    }


    return (
      <div className={styleClasses.App}>
      <Cockpit  showJediMasters = {!this.state.showJediMasters} 
                jedies={this.state.jedies}
                click = {this.toggleJediMasters}/>
       { jediMasters}
      </div>

    );
  }
}

export default App;
