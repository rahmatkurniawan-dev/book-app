import React from 'react'
import { useGetPokemonByNameQuery } from '../services/Pokemon';

function PokemonPage() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>

    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}

export default PokemonPage