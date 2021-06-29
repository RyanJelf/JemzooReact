import React from 'react';
import './AnimalGrid.css';
import Animal from '../Animals/Animal';

const AnimalGrid = (props) => {
    return (
    <div className="AnimalGrid">
        {props.animals.map((animal, i) => (
          <Animal key={i} {...animal} />
          ))}
    </div>
    )
};

export default AnimalGrid;
