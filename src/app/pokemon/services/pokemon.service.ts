import { Injectable } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {POKEMONS} from "../mock/mock-pokemons";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList():Pokemon[]{
    return POKEMONS;
  }
  getPokemonById(pokemonId: number):Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }
  getPokemonTypeList(): string[]{
    let types = POKEMONS.flatMap(pokemon => pokemon.types);
    return Array.from(new Set(types));
  }
}
