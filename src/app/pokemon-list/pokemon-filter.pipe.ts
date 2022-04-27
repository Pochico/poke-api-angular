import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultsPokemonFilter = [];

    for (const pokemon of value) {

      if (pokemon.name.indexOf(arg) > -1) {
        resultsPokemonFilter.push(pokemon);
      };

    };

    return resultsPokemonFilter;
  }

}