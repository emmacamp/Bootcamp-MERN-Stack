
const boby = document.body;
/* 
const div = document.createElement('div');

div.innerHTML = '<h1>Hola mundo</h1>';

body.append(div); */

const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//Agregar una clase 
spanHi.classList.add('new-class');
// Eliminar una clase
spanHi.classList.remove('clase1');
//Si la clase està, se elimina, sino, se agrega
spanHi.classList.toggle('Klk')
