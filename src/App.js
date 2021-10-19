
import React,{ Component } from 'react';
import styleClasses from './App.module.css';
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

    const buttonStyle = [styleClasses.Button]

    let classes = []

    if(this.state.jedies.length <= 2){
      classes.push(styleClasses.red)
    }
    if(this.state.jedies.length <= 1){
      classes.push(styleClasses.bold)
    }



    let jediMasters = null;

    if(this.state.showJediMasters){
      jediMasters =( <div>
                      {this.state.jedies.map((jedi, index) => {
                          return <Jedi click={() => this.removeJediMaster(index)} 
                          name = {jedi.name} 
                          age={jedi.age}
                          changed = {(event) => this.switchJediName(event, jedi.id)}
                          key={index}/>
                      })}
                    </div>
      );
      buttonStyle.push(styleClasses.red)

    }


    return (
      <div className={styleClasses.App}>
        <h1>Hello there!</h1>
        <p className={classes.join(' ')}>Styling experiment</p>
        <button className={buttonStyle.join(' ')} onClick={() => this.toggleJediMasters()}>Get Jedi Masters!</button>
        { jediMasters}
      </div>

    );
  }
}

export default App;
