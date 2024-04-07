import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../model/pokemon";
import {POKEMONS} from "../mock/mock-pokemons";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{
  pokeminList : Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
    this.pokeminList= POKEMONS;
  }

  ngOnInit(): void {
    const pokemonId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokeminList.find(pokemon => pokemon.id == +pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
