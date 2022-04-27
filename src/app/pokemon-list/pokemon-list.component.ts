import { Pokemon, PokemonResult } from './pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  title = "Pokemon List";
  pokemonList: Pokemon[] = [];
  service;
  resultsPokemon: PokemonResult = { results: this.pokemonList };
  pokeFilter: Pokemon[] = [];
  currentPage: number = 1;

  constructor(pokemonListService: PokemonListService) {
    this.service = pokemonListService;
  }

  ngOnInit(): void {
    this.service.getPokemonList(0).subscribe((data: any) => {
      this.resultsPokemon = data;
      this.pokemonList = this.resultsPokemon.results;
    })
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.service.getPokemonList((this.currentPage - 1) * 10).subscribe((data: any) => {
      const resultsPokemon: PokemonResult = data;
      this.pokemonList = resultsPokemon.results;
      console.log(this.currentPage)
    })
  }

}
