import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../../shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon: Pokemon;

  @Input() pokemons: Pokemon[];
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
  }


  checkDetails(data: Pokemon) {
    this.pokemonClick.emit(data);
  }
}
