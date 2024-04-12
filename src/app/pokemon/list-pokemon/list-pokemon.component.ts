import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon|undefined;


  constructor(private router: Router,
              private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe( pokemonList => this.pokemonList = pokemonList).unsubscribe();
  }

  goToPokemon(pokemon: Pokemon): void{
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
