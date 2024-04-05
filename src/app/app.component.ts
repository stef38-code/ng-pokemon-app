import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "./mock-pokemons";
import {Pokemon} from "./pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }
  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
