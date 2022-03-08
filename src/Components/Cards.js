import React from 'react';
import data from '../Constants/data';
import Card from '../Components/Card';

const Cards = () => {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className='cards--container'>
            {cards}
        </div>
    )
}

export default Cards;