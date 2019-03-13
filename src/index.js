document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  let userInput = document.getElementById('pokemon-search-input').value;

  let foundPokemon = POKEMON.filter(function(pokemon){
    return userInput === pokemon['name'];
  });

  let pokemonContainer = document.getElementById('pokemon-container');

  let pokemonCard = document.createElement('div')
  pokemonCard.className = "pokemon-card";

  let pokemonFrame = document.createElement('div')
  pokemonFrame.className = "pokemon-frame";

  let centerText = document.createElement('h1')
  centerText.className = "center-text";

  let pokemonImg = document.createElement('div')
  pokemonImg.className = "pokemon-image";

  let flip = document.createElement('img')
  flip.className = "toggle-sprite";

  // make the sentence disappear removeChild
  // userInput, if this is true then replace the sentence with do removeChild(the sentence)


  // pokemonContainer.removeChild(document.getElementsByTagName('center'));

  pokemonContainer.appendChild(pokemonCard);
  pokemonCard.appendChild(pokemonFrame);
  pokemonFrame.appendChild(centerText);
  pokemonFrame.appendChild(pokemonImg);
  pokemonImg.appendChild(flip);

  centerText[0].innerText = foundPokemon[0].name;
  console.log('here', pokemonCard)
  // appendChild

});

// POKEMON
