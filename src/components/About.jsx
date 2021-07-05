import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const About = () => {
  const { params } = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
      })
  }, [params])

  return (
    <>
    { pokemon && (
    <div className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
      <h3 className="text-2xl text-green-900 uppercase">{pokemon.name}</h3>
      <div className="flex justify-center">
        <img className="w-48" src={pokemon.sprites["front_shiny"]} alt={pokemon.name} />
        <img className="w-48" src={pokemon.sprites["back_shiny"]} alt={pokemon.name} />
      </div>
    </div>
    )}
    </>
  )
}

export default About;
