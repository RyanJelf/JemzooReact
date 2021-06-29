import React from 'react';
import './Animal.css';

const Animal = (props) => {
    return (
    <div className="Animal">
        <h2>{props.animalType}</h2>
        <img className="myPic" src={props.animalPic} alt={props.animalName} />
        <p>{props.animalDesc}</p>
    </div>
    )
};

export default Animal;
