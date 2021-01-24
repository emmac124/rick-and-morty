import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/Base';
import Characters from './components/Characters';
import Details from './components/Details';
import './App.css';


function App() {

  const [character, setCharacter] = useState([]);
  const [currentCharacterId, setCurrentCharacterId] = useState("1");

  const openDetails = id => {
    setCurrentCharacterId(id);
  }

  const closeDetails = () => {
    setCurrentCharacterId(null);
  }
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}/1, 2, 3, 4, 5, 15`)
      .then(res => {
        console.log(res);
        setCharacter(res.data);
      })
      .catch(err => {
        console.log(err, 'Oops something went wrong!');
      })
  }, []);
  
  return (
    <div className='container'>
      <h1>Characters</h1>
      {
        character.map(char => {
          return <Characters key={char.id} info={char} action={openDetails} />
        })
      }
      {
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails} />
      }
    </div>
  );
}



export default App;
