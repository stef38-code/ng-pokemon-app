import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  goToPokemon(pokemon: Pokemon): void{
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
