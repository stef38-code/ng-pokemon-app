import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit{
  @Input()
  pokemon: Pokemon;

  types: string[];
  constructor(private pokemonService: PokemonService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }
  onSubmit() {
    console.log("Formulaire soumit !!")
    this.router.navigate(['/pokemon',this.pokemon.id]);
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type );
  }

  isTypesValid(type: any) {
    return false;
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      const index: number = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }
  }


}
