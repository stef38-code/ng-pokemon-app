import { Injectable } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {POKEMONS} from "../mock/mock-pokemons";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable(
  /*{ Supprimer ces lignes permet de pas mettre à disposition de toute l'application ce service
  providedIn: 'root'
}*/
)
export class PokemonService {
constructor(private http: HttpClient) {
}
  getPokemonList():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) =>this.handlerError(error,[])
      )
    );
  }

  getPokemonById(pokemonId: number):Observable<Pokemon| undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) =>this.handlerError(error,undefined)
      )
    );
  }

  getPokemonTypeList(): string[]{
    let types = POKEMONS.flatMap(pokemon => pokemon.types);
    return Array.from(new Set(types));
  }
  private log(pokemonList: Pokemon[]|Pokemon|undefined):void {
    console.table(pokemonList);
  }
  private handlerError(error: Error, errorValue: any):Observable<any>{
    console.error(error);
    return of(errorValue)
  }
}
