document.addEventListener('DOMContentLoaded', () => {
  let pokemons = POKEMON;
  // let pokemonContainer = document.getElementById('pokemon-container');
  let pokemonContainer = document.querySelector('#pokemon-container');
  // let userInput = document.getElementById('pokemon-search-input').value;
  let pokemonSearch = document.getElementById('pokemon-search-input');

  function searchPokemon(pokemons) {

    pokemons.forEach(function(pokemon) {
      // let pokemonCard = document.createElement('div');
      // pokemonCard.className = 'pokemon-card';
      // pokemonCard.innerHTML = `
      // <div class="pokemon-frame">
      //   <h1 class="center-text">charizard</h1>
      //   <div class="pokemon-image">
      //     <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
      //   </div>
      // </div>`;
      // return pokemonContainer.appendChild(pokemonCard);
      pokemonContainer.innerHTML += `
      <div class="pokemon-card">
      <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      </div>
      </div>`;
    });
  }
  searchPokemon(pokemons);

  pokemonSearch.addEventListener('input', function(event) {
    pokemonContainer.innerHTML = '';

    const foundPokes = pokemons.filter(pokemon => {
      return pokemon.name.includes(event.target.value);
      // this works.
    });
    searchPokemon(foundPokes);
  });

  pokemonContainer.addEventListener('click', event => {
    if (event.target.className === 'toggle-sprite') {
      let chosenOne = pokemons.find(pokemon => {
        // debugger
        return pokemon.id === parseInt(event.target.dataset.id);
      });
      console.log(chosenOne);
      event.target.src === chosenOne.sprites.front
        ? event.target.src = chosenOne.sprites.back
        : event.target.src = chosenOne.sprites.front;
    }
  });

});

// POKEMON
