import imagen from './imagenpokemon.webp';
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
      <Pokemon pokemonImagen={imagen} name="Pikachu" color="red"/>
      <Pokemon pokemonImagen={imagen} name="Pikachu" color="blue"/>
      <Pokemon pokemonImagen={imagen} name="Pikachu" color="green"/>
    </div>
  );
}

export default App;
