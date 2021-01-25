import React from 'react';
import styled from 'styled-components';


const Characters = ({info, action}) => {

    return (
        <Main>
            <CharacterContainer>
                <img src={info.image} alt='Characters' />
                <p>{info.name}</p>
                <button onClick={() => action(info.id)}>See Details</button>
            </CharacterContainer>
        </Main>
    );

}

const Main = styled.div`
    width: 25%;
    display:flex;
    flex-wrap:wrap; 
    align-items:center;
    margin: 1%;
    border: 4px solid ${pr => pr.theme.fourthColor};
    background-color: ${pr => pr.theme.thirdColor};
`;

const CharacterContainer = styled.div`
    margin: 0 auto;
    padding:3%;
    p {
        color: ${pr => pr.theme.black};
        text-shadow: 1px 1px 5px ${pr => pr.theme.fourthColor};
        font-weight:bold;
        font-size:1.5rem;
    };
    button {
        background-color: ${pr => pr.theme.fourthColor};
        font-weight:bolder;
        text-shadow: 1px 1px 5px ${pr => pr.theme.white};
        padding:2%;
    }
`;

export default Characters;