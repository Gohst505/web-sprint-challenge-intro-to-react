import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
const Styles = styled.div`
display: flex;
`
  const [starWars, setStarWars] = useState([]);

useEffect(() =>{
  axios.get('https://swapi.dev/api/people')
  .then(res => {        
      console.log(res);
      setStarWars(res.data.results);
  })
  .catch(err =>{
     console.log('Error',err);
    })
},[])


  return (
    <Styles className="App">
      <h1 className="Header">Characters</h1>
      
      {starWars.map(elem =>{
    return <Character character= {elem}/> 
      })}
      
    </Styles>
  );
}

export default App;
