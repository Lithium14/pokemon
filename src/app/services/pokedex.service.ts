import { Pokemon } from './../shared/pokemon';
import { Injectable } from '@angular/core';
import { pokemonsMock } from '../pokemons-mock';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  getPokemons(): Pokemon[] {
    return pokemonsMock ;
  }
}
