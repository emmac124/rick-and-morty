import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/Base';
import Characters from './components/Characters';
import Details from './components/Details';
import './App.css';
import styled from 'styled-components';

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
    <div>
      <Header>Rick and Morty Characters</Header>
      <Ultimate>
      {
        character.map(char => {
          return <Characters key={char.id} info={char} action={openDetails} />
        })
      }
      {
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails} />
      }
    </Ultimate>
    </div>
  );
}

const Ultimate = styled.section`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
max-width:100%;
`;

const Header = styled.h1`
  text-shadow: 1px 1px 5px ${pr => pr.theme.fourthColor};
  text-align:center;
`;


export default App;
