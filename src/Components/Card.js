import React from 'react';
import './Card.css';
import data from '../Constants/data'

import iconLocation from '../images/icon-location.png';

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

const Card = (props) => {
    let image = "../images/" + props.image;


    return (
        <div key={props.id} className='card--container'>
            <img className='card--banner' src={image} alt='card' />
            <div className='text--container'>
                <div className='card--location'>
                    <img className='icon-sm' src={iconLocation} alt="location-icon" />
                    <span className='wide'>{props.location}</span>
                </div>
                <h2 className='card--title'>{props.title}</h2>
                <div className='card--description'>
                    <span className='card--date'>{props.startDate} - {props.endDate}</span>
                    <span className='description'>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Cards;