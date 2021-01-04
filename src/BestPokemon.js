import React from 'react';

const BestPokemon = ({abilities}) => {
  
  return (
    <div>
      <p> My favourite Pokemon is Squirtle </p>
      <ul>
        {abilities.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon