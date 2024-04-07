import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemons";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  ngOnInit(): void {
    console.table(this.pokemonList);
  }
  selectPokemon(pokemon: Pokemon){
    // le plus devant la paranthèse convert string en number
    // si String = null alors le cast convertit en 0
    this.pokemonSelected = pokemon;
  }

}
