import { RESTDataSource } from 'apollo-datasource-rest';

export default class PokemonDataSource extends RESTDataSource {
  baseURL = 'https://pokeapi.co/api/v2/';

  async getPokemonByName(name: string): Promise<any> {
    return this.get(`pokemon/${name}`);
  }

  async getPokemonByNames(names: [string]): Promise<Array<any>> {
    const pokemonList = await Promise.all(
      names.map(async (name) => this.get(`pokemon/${name}`)),
    );
    return pokemonList;
  }
}
