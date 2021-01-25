import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/Base';
import axios from 'axios';
import styled from 'styled-components';

const Details = ({characterId, close}) => {
    const baseObj = {
    name: "name",
    status: "status",
    species: "Human",
    gender: "Gender",
    location: {
        name: "Location",
        },
    origin: {
        name:"origin",
        },
    }
    const [details, setDetails] = useState( baseObj );
    useEffect(() => {
        axios
            .get(`${BASE_URL}/${characterId}`)
            .then(res => {
                setDetails(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [characterId]);

    return (
        <Container2>
            <h2>Details For {details.name}:</h2>
            <Items>
                <p>Location: {details.location.name}</p>
                <p>Origin: {details.origin.name}</p>
                <p>Species: {details.species}</p>
                <p>Gender: {details.gender}</p>
                <p>Status: {details.status}</p>
                <button onClick={close}>Close</button>
            </Items>
        </Container2>
    );
}

const Container2 = styled.div`
    border: 4px solid ${pr => pr.theme.fourthColor};
    background-color: ${pr => pr.theme.thirdColor};
    width:80%;
    margin-bottom: 2%;
    h2 {
        color: ${pr => pr.theme.black};
        text-shadow: 1px 1px 5px ${pr => pr.theme.fourthColor};
        font-weight:bold;
        font-size:2rem;
    }
`; 

const Items = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-bottom: 1.5%;
    p {
        width:40%;
        color: ${pr => pr.theme.black};
        font-weight:bold;
        font-size: 1.15rem;
    }
    button {
        background-color: ${pr => pr.theme.fourthColor};
        font-weight:bolder;
        text-shadow: 1px 1px 5px ${pr => pr.theme.white};
        padding:0.75% 2.25%;
        font-size: 1.15rem;
    }
`;

export default Details;