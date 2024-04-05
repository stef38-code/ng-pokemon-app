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
  }
  selectPokemon(event: MouseEvent){
    // le plus devant la paranthèse convert string en number
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
  }
}
