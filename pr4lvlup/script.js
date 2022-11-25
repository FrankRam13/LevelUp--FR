const pokemonContainer= document.querySelector('.pokemon-container');

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=> res.json())
    .then((data)=> {
        crearPokemones(data); 
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function fetchPokemonesKanto(cantidad){

    for (let i = 1; i<=cantidad; i++) {
        const rPoke = getRandomInt(150);
        fetchPokemon(rPoke);
    }
    
    
}

function crearPokemones(pokemon){
    const carta= document.createElement('div');
    carta.classList.add('pokemon-block');

    const spriteContainer= document.createElement('div');
    spriteContainer.classList.add('img-container');
    
    const sprite = document.createElement('img');
    sprite.src= pokemon.sprites.front_default 

    spriteContainer.appendChild(sprite);
    
    const number = document.createElement('p');
    number.textContent= `#${pokemon.id.toString().padStart(3,0)}`;

    const nombre = document.createElement('p');
    nombre.classList.add('nombre');
    nombre.textContent = pokemon.name

    carta.appendChild(spriteContainer);
    carta.appendChild(number);
    carta.appendChild(nombre);

    pokemonContainer.appendChild(carta);


}
fetchPokemonesKanto(6);