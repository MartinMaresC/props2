import imagen from './imagenpokemon.webp';
import Pikachu from './Pikachu.jpeg';
import PropTypes from 'prop-types';
import './App.css';
import React from 'react';

function Pokemon(props) {
  return (
    <div style={
      {
        backgroundColor: props.color,
      }
    }>
    <img src={props.pokemonImagen}></img>
    <p>Pokemon: {props.name}</p>
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <Pokemon pokemonImagen={Pikachu} name="Pikachu" color="Black"/>
      <Pokemon />
      <Pokemon />
    </div>
  );
}

Pokemon.propTypes={
  name:PropTypes.string,
}

Pokemon.defaultProps={
  pokemonImagen:imagen,
  name:"Quien es ese pokemón",
  color:"Red"
}





export default App;
