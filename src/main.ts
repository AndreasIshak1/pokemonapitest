import './style.css'

const mainDiv = document.getElementById("app") as HTMLDivElement;

async function pokemonapi() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=100&limit=100");
    const data = await response.json();
    console.log(data.results);
    for (let i = 0; i < data.results.length; i++) {
      const divFather = document.createElement("div");
      divFather.className = "divFather";
      const h1 = document.createElement('h1');
      h1.className = "pokeName";
      const image = document.createElement('img');
      image.className = "pokeImage";
      const paragraf = document.createElement("p");
      paragraf.className = "pokeDescription";
      
      // Access the sprites and then front_default'
      const pokemonData = await (await fetch(data.results[i].url)).json();
      image.src = pokemonData.sprites.front_default;

      h1.innerHTML = data.results[i].name;
    
      divFather.appendChild(paragraf);
      divFather.appendChild(h1);
      divFather.appendChild(image);
      mainDiv.appendChild(divFather);
    }
  } catch(error) {
    console.error(`Could not get products: ${error}`);
  }
}




pokemonapi();

//Antingen såhär att man söker fritt
// https://pokeapi.co/api/v2/pokemon/mewtwo
// https://pokeapi.co/api/v2/pokemon/`${}`
//Lägger in button input clickevent

//Alt 2.
// // https://pokeapi.co/api/v2/pokemon/mewtwo
// Sen lägger man en ny API med en annan pokemon typ // https://pokeapi.co/api/v2/pokemon/charizard