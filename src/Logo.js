import { React, useState } from 'react';

const Logo = (props) => {

  // console.log(props);
//  const [state, setState] = useState()
//  console.log(useState);

  return (
    <header>
      <h1> Welcome to {props.appName}'s Pokedex </h1>
      <img onClick = {props.handleClicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </header>
  )
};

export default Logo;