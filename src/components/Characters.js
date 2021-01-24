import React from 'react';

const Characters = ({info, action}) => {

    return (
        <div>
            <img src={info.image} alt='Characters' />
            <p>{info.name}</p>
            <button onClick={() => action(info.id)}>See Details</button>
        </div>
        
    );

}

export default Characters;