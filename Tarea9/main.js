/* 
https://pokeapi.co/

Nombre
Foto
Tipo
Height
weight
Stats (Nombre y Valor)
Movimientos
 */
/* import Swal from './node_modules/sweetalert2/src/sweetalert2.js';
 */




const pokemon = document.getElementById('name');
const form = document.getElementById('form');
const moreMovesContainer = document.getElementById('moreMovesContainer');

const moreMoves = document.getElementById('moves');

const pknImg = document.querySelector('.card__pokemon__image')
const pknName = document.querySelector('.card__pokemon__info__name')
const pknType = document.querySelector('.card__pokemon__info__type')
const pknHeight = document.querySelector('.card__pokemon__info__height')
const pknWeight = document.querySelector('.card__pokemon__info__weight')
const pknAbilities = document.querySelector('.card__pokemon__info__abilities')
const pknStats = document.querySelector('.card__pokemon__info__stats')
const pknMoves = document.querySelector('.card__pokemon__info__moves')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    pokemon.value = pokemon.value.toLowerCase();
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value}`;


    fetch(url).then(response => {

        if (response.ok){ 

            return response.json();

        }
        else{
            Swal.fire({
                title: 'Pokemon no valido!',
                text: 'Ingresa un pokemon valido',
                icon: 'error',
                confirmButtonText: 'Ok',
                timer: 1500
              })

            clearInput();
        }

    
    }).then((pokemon) =>  {

        
        pknImg.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="pokemon"></img>`;
        pknName.innerHTML = pokemon.name;
        pknType.innerHTML = pokemon.types[0].type.name;
        pknHeight.innerHTML = pokemon.height;
        pknWeight.innerHTML = pokemon.weight;
        pknAbilities.innerHTML = `${pokemon.abilities[0].ability.name} ${pokemon.abilities[1].ability.name}`;
        pknStats.innerHTML = `${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}`;
        pknMoves.innerHTML = `<li>${pokemon.moves[0].move.name}</li> <li>${pokemon.moves[1].move.name}</li> <li>${pokemon.moves[3].move.name}...</li>`;
        moreMovesContainer.innerHTML = `<a href="moves.html" target="_blank" rel="noopener noreferrer">more moves</a>`;
        /* moreMoves.innerHTML = pokemon.moves.map(`<li>${move.name}</li>`) */
        
        clearInput();
    
    
    }).catch(error => console.log(error));

});


//Clear input
function clearInput(){
    pokemon.value = '';
}
