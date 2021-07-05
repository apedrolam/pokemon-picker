import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import { useState, useEffect, useMemo } from 'react'

function App() {

  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, id) => {
          return {...pokemon, id: id + 1}
        })
        setPokemon({ ...data, results })
      })
  })

  useMemo(() => {
    if(text.length === 0){
      setFilteredPokemon([])
    }

    setFilteredPokemon(() => 
      pokemon.results?.filter((pokemon) => pokemon.name.includes(text))
    )
  }, [pokemon.results, text])

  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>
      </div>
      
     
      <Switch>
        <Route path="/about/:params">
          <About />
        </Route>
        <Route path="/">
          <div className="w-full flex justify-center">
            <input type="text"
              onChange={(event) => setText(event.target.value)}
              placeholder="Enter Pokemon here"
              className="mt-10 p-2 border-blue-500 border-2"
            />
          </div>
          { pokemon &&
            <Home pokemon={filteredPokemon} />
          }
          
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
