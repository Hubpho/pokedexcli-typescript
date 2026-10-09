import type { State } from "./state.js";

export async function commandCatch(state: State, pokemon: string) {
  console.log(`Throwing a Pokeball at ${pokemon}...`);
  const pokemonData = await state.pokeAPI.fetchPokemon(pokemon);

  let chance = Math.random();
  if (chance * 300 >= pokemonData.baseExperience) {
    console.log(`${pokemon} was caught!`);
  } else {
    console.log(`${pokemon} escaped!`);
  }
}
