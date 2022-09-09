"use strict";

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
var pokemon = document.getElementById('name');
var form = document.getElementById('form');
var moreMovesContainer = document.getElementById('moreMovesContainer');
var moreMoves = document.getElementById('moves');
var pknImg = document.querySelector('.card__pokemon__image');
var pknName = document.querySelector('.card__pokemon__info__name');
var pknType = document.querySelector('.card__pokemon__info__type');
var pknHeight = document.querySelector('.card__pokemon__info__height');
var pknWeight = document.querySelector('.card__pokemon__info__weight');
var pknAbilities = document.querySelector('.card__pokemon__info__abilities');
var pknStats = document.querySelector('.card__pokemon__info__stats');
var pknMoves = document.querySelector('.card__pokemon__info__moves');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  pokemon.value = pokemon.value.toLowerCase();
  var url = "https://pokeapi.co/api/v2/pokemon/".concat(pokemon.value);
  fetch(url).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      Swal.fire({
        title: 'Pokemon no valido!',
        text: 'Ingresa un pokemon valido',
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 1500
      });
      clearInput();
    }
  }).then(function (pokemon) {
    pknImg.innerHTML = "<img src=\"".concat(pokemon.sprites.front_default, "\" alt=\"pokemon\"></img>");
    pknName.innerHTML = pokemon.name;
    pknType.innerHTML = pokemon.types[0].type.name;
    pknHeight.innerHTML = pokemon.height;
    pknWeight.innerHTML = pokemon.weight;
    pknAbilities.innerHTML = "".concat(pokemon.abilities[0].ability.name, " ").concat(pokemon.abilities[1].ability.name);
    pknStats.innerHTML = "".concat(pokemon.stats[0].stat.name, ": ").concat(pokemon.stats[0].base_stat);
    pknMoves.innerHTML = "<li>".concat(pokemon.moves[0].move.name, "</li> <li>").concat(pokemon.moves[1].move.name, "</li> <li>").concat(pokemon.moves[3].move.name, "...</li>");
    moreMovesContainer.innerHTML = "<a href=\"moves.html\" target=\"_blank\" rel=\"noopener noreferrer\">more moves</a>";
    /* moreMoves.innerHTML = pokemon.moves.map(`<li>${move.name}</li>`) */

    clearInput();
  })["catch"](function (error) {
    return console.log(error);
  });
}); //Clear input

function clearInput() {
  pokemon.value = '';
}