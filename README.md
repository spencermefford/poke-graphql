# poke-graphql

This project was built with Apollo Server and Express.

## Getting Started

```bash
# Start the app
npm i
npm run dev

# Run the tests
npm test
```

## Doing the Things with the Stuff

This project does offer GraphQL Playground, but Playground is pretty aggressive about introspection to build it's documentation. Because of that, you'll encounter the rate limiting quickly. I'd recommend something like Altair, Insomnia, or Postman to view this. The GraphQL endpoint will be available at [http://localhost:4000/graphql](http://localhost:4000/graphql).

You'll need to pass the API key as a request header. The header is `X-Api-Key` and here are the partner keys:
- partner-a: `123-ABC`
- partner-b: `456-DEF`

You can hit the rate limit on the first partner, and then switch to the second and the rate limit should be expired.

Here is the query you can use:

```
query ($names: [String]) {
  pokemonStatsByNames(names: $names) {
    heights
    meanHeight
    medianHeight
    modeHeight
    weights
    meanWeight
    medianWeight
    modeWeight
  }
}
```

```json
{
  "names": ["squirtle", "pikachu", "charmander", "charizard", "eevee", "ditto", "bulbasaur"]
}
```