import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return ( 
        <div>
            {
                robots.map( (user, index) => {
                    return (
                        <Card 
                            key={index} 
                            id={user[index].id} 
                            name={user[index].name} 
                            email={user[index].email} 
                        />
                    );
                })
            }
        </div>
     );
}

export default CardList;