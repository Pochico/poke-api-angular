import { PokemonFilterPipe } from './pokemon-list/pokemon-filter.pipe';

describe('PokemonFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
