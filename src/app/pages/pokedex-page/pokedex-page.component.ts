import { Pokemon } from './../../shared/pokemon';
import { PokedexService } from './../../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {

  pokemons: Pokemon[];
  pokemonDetail: Pokemon;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokemons = this.pokedexService.getPokemons();
    console.log(this.pokemons);
  }

  onCheckDetails(data: Pokemon): any {
    this.pokemonDetail = data;
    console.log(this.pokemonDetail);

  }
}
