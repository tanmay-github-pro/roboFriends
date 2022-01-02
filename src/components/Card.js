import React from 'react';
import './Card.css';

const Card = ( { name, email, id} ) => {
    return (
        // <div className='tc bg-light-green dib br4 ma2 grow bw2 shadow card'>
        <div className='tc dib br4 ma2 grow bw2 shadow card'>
            <img src = { `https://robohash.org/${id}?200x200` } alt='robot pic' />
            <div className='card-info'>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;