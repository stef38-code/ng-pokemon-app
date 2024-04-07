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
