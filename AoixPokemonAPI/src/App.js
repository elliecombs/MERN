import React, {useState, useEffect} from "react";
//Destructuring the use state key from the object
import './App.css';
import axios from 'axios';

function App() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then((response) => {
            setPokemon(response.data.results);
            })

            //Display error in react console
            .catch(error => console.log(error));
          },[]);
    return (
        <div class="app">
            <h2>Axios Pokemon API List</h2>
          <ul>
            {pokemon.map((pokemon, x) => (
              <li key={x}>
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
    );
}

export default App;
