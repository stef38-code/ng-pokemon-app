import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css'
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute : ActivatedRoute,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    const pokemonId: string |  null = this.activatedRoute.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }else{
      this.pokemon = undefined;
    }
  }
}
