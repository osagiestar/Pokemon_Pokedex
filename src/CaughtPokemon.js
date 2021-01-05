import { React, useState } from 'react';

const CaughtPokemon = ({date}) => {
  const [caught, setCaught] = useState([])
  // const date = new Date().toLocaleDateString();
  const pokemonArray = ["Puckachu", "Eevee", "Snorlax", "Charizard", "Mewtwo", "Ditto", "Squirtle", "Gengar", "Charmander", "Lucario", "Bulbasaur", "Gyarados", "Gardevoir", "Mew", "Lapras", "Rayquaza"]
  const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
  const catchPokemon = () => {
    setCaught(caught.concat([randomPokemon].splice(',')))
  }
  return (
    <>
      {" "}
      Caught {caught} Pokemon on {date}{" "}
      <button onClick={catchPokemon}> Catch Pokemon </button>
      <ul>
        {caught.map((item, index) => {
          return (
              <li key={index}>{item}</li>
          );
        })}
      </ul>
    </>
  );
};

export default CaughtPokemon;