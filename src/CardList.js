import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const CardComponent = robots.map( (user, index) => {
                return <Card key={index} id={user[index].id} name={user[index].name} email={user[index].email} />
        })
    return ( {CardComponent} );
}

export default CardList;