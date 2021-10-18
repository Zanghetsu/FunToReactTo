import React,{ useState } from 'react';
import './App.css';
import Jedi from './Jedi/Jedi';



const App = props => {


  
  const [jediState, setJediState] = useState({
      jedies: [
        {name : "Obi-Wan Kenobi", age : 24},
        {name : "Master Yoda", age : 860},
        {name : "Mace Windu", age : 37}
       ]
    
  });

  const switchJediName = () => {
    setJediState({
      jedies: [
        {name : "Ben Kenobi", age : 46},
        {name : "Master Yoda", age : 900},
        {name : "Mace Windu", age : 37}
       ]  
    })
  };

  return (
    <div>
      <h1>Hello there!</h1>
      <button onClick={switchJediName}>Get Jedi info during the Empire's time!</button>
      <Jedi name = {jediState.jedies[0].name} age={jediState.jedies[0].age} />
      <Jedi name = {jediState.jedies[1].name} age={jediState.jedies[1].age} />
      <Jedi name = {jediState.jedies[2].name} age={jediState.jedies[2].age} />
    </div>
  );
}


export default App;
