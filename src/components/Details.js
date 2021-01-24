import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/Base';
import axios from 'axios';

const Details = ({characterId, close}) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/${characterId}`)
            .then(res => {
                setDetails(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [characterId])

    return (
        <div className='container2'>
            <h2>Details For {details.name}:</h2>
            {
                details && 
                <>
                <p>Location: {details.location.name}</p>
                <p>Origin: {details.origin.name}</p>
                <p>Species: {details.species}</p>
                <p>Gender: {details.gender}</p>
                <p>Status: {details.status}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    );

}

export default Details;