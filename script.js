const url = 'https://api.openbrewerydb.org/breweries'



// function getData (event) {    
//      event.preventDefault()
// let textInput = document.querySelector('#inputBar').value;
// console.log(textInput)
//  ///FETCH code
   fetch(url) 
        .then(result => { 
            return result.json() 
         })
        .then (result => {
            console.log(result)
        }) 
       


// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let pokemon = data.results;
//         let pokeDiv = document.querySelector('.pokemon');
//         pokemon.forEach(pokemon => {
//             let pokemonName = pokemon.name;
//             let pokemonUrl = pokemon.url;
//             let pokemonId = pokemonUrl.split('/')[6];
//             let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//             let div = document.createElement('div');
//             div.classList.add('pokemon-item');
//             div.innerHTML = `
//                 <div class="pokemon-item-image">
//                     <img src="${image}" alt="${pokemonName}">
//                 </div>
//                 <div class="pokemon-item-info">
//                     <h3>${pokemonName}</h3>
//                 </div>
//             `;
//             pokeDiv.appendChild(div);
//         });
//     }).catch(error => {
//         console.log(error);
//     })