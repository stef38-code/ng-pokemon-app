import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pokemonList = ['Bulbizarre','Salamèche','Carapuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }
  selectPokemon(pokemonName: string){
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`);
  }
}
