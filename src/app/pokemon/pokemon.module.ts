import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BorderCardDirective} from "./list-pokemon/pipe/border-card.directive";
import {PokemonTypeColorPipe} from "./detail-pokemon/pipe/pokemon-type-color.pipe";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./services/pokemon.service";

const pokemonRoutes: Routes = [
  {
    path : 'pokemons', component: ListPokemonComponent
  },
  {
    path : 'pokemon/:id', component: DetailPokemonComponent
  }

];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]//Ajouter cette ligne dans les modules qui peuvent utiliser le service
})
export class PokemonModule { }
