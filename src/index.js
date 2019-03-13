document.addEventListener('DOMContentLoaded', () => {
  function showPokemon(arrayOfPokemon) {
    for (creature of arrayOfPokemon) {
      const divCard = document.createElement('div')
      divCard.setAttribute('class', 'pokemon-card')

      const divFrame = document.createElement('div')
      divCard.appendChild(divFrame)
      divFrame.setAttribute('class', 'pokemon-frame')

      const h1 = document.createElement('h1')
      divFrame.appendChild(h1)
      h1.setAttribute('class', 'center-text')
      h1.innerText = creature.name

      const divImage = document.createElement('div')
      divFrame.appendChild(divImage)
      divImage.setAttribute('class', 'pokemon-image')

      const imgTag = document.createElement('img')
      divImage.appendChild(imgTag)
      imgTag.src = creature.sprites.front
      imgTag.className = 'toggle-sprite'
      imgTag.setAttribute('data-id', creature.id)
      imgTag.setAttribute('data-action', 'flip')
      imgTag.setAttribute("orientation", "front")
      imgTag.addEventListener("click", function() {
        const parent = this
        const id = parseInt(parent.getAttribute("data-id"))

        foundPokemon = POKEMON.find(function(element) {
          return element.id === id
        })
        
        if (parent.getAttribute("orientation") === "back") {
          parent.src = foundPokemon.sprites.front
          parent.setAttribute("orientation", "front") 
        } else {
          parent.src = foundPokemon.sprites.back
          parent.setAttribute("orientation", "back") 
        }
      })

      pokemonContainer.appendChild(divCard)
    }
  }

  function keyHandler() {
    if (query.value !== "") {
      filteredPokemon = POKEMON.filter(function(creature) {
        if (creature.name.includes(query.value)) { return creature }
      })
    }

    resetView()
    query.value !== "" ? showPokemon(filteredPokemon) : showPokemon(POKEMON)
  }

  function resetView() {
    while (pokemonContainer.firstChild) {
      pokemonContainer.removeChild(pokemonContainer.firstChild)
    }
  }

  const query = {
    htmlElement: document.getElementById('pokemon-search-input'),
    get value() { return this.htmlElement.value }
  }

  pokemonContainer = document.getElementById("pokemon-container")
  query.htmlElement.addEventListener("keyup", keyHandler)
  showPokemon(POKEMON)
})
