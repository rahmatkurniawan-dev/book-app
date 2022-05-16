import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useGetPokemonByNameQuery } from '../services/Pokemon';
import pokemon, { getPokemons } from '../slice/pokemon';

function PokemonPage() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPokemons());
  }, [dispatch]);

  const pokemons = useSelector((state) => state.pokemon.value);

  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  const formatName = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1) ?? "-";
  }

  return (
    <div className="flex flex-col gap-2">
      <h5 className="font-semibold my-4 text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Pokemon</h5>
      {pokemons.results && pokemons.results.map(pokemon => (
        <div className="px-4 py-2 cursor-pointer hover:font-semibold hover:text-purple-500 text-gray-600 flex flex-col rounded-md border border-gray-300 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out">
          <h5>{formatName(pokemon.name)}</h5>
        </div>
      ))}
    </div>
  )
}

export default PokemonPage