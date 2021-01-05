import React from "react";
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMoves from "./PokemonMoves";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  // const appName = 'Osagie'
  const date = new Date().toLocaleDateString();
  const logWhenClicked = () => {
    console.log("Click action expected");
  };

  // App returns
  return ( 
  <div>
    <Logo appName = 'Osagie' handleClicked = {logWhenClicked} />
    <BestPokemon abilities = {abilities} />
    <CaughtPokemon date = {date}/>
    <PokemonMoves/>
  </div>
  );
}

export default App;
