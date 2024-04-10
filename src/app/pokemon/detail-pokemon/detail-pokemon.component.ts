import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../model/pokemon";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    const pokemonId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList():void {
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon/edit',pokemon.id]);
  }
}
