/* let array = [1,2, 3, 4, 5, 6, 7, 8]; */

/* function sum(a,b,...c){
    let result = a + b;
    for (let i = 0; i < c.length; i++) {
        const element = c[i];
        result += element;      
    } 
    return result;
}

console.log(sum(...array));
 */


/* 
//!Accessing the array
console.log(array[1]);

console.log("================================")

//!Longitude of the object
console.log(array.length);

console.log("================================")

//!Accessing the last value of the array
console.log(array[array.length - 1]);

console.log("================================")

// ! Accediendo al valor del array (Esta opcion es parecida a la 
// de los corchetes con la diferencia que este permite numeros negativos)
console.log(array.flat(-1));

console.log("================================")

//!Accessing the array with loop for
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("================================")

//!Imprimiendo los nuemeros desde el ultimo hasta el primero.
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);  
}

console.log("================================") */

// !For in a function

/* show(array)
function show(arr){
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);  
    }
} */

/* console.log([1, 10, 2, 21].sort((a, b) => b - a))


function sum(a,b){
    return a / b;
}

const sum2 = (a,b) => a + b;
 */
/* 
( () => console.log('Holas'))();
 */




/* function noRepeat(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
} */
/* 
for (let i = 0; i < 6; i++) {
      
    
}
*/

// 6 nuemeros Aleatorios entre el 1 - 80
// No pueden salir numeros repetidos
// Tienen que crear una funcion que devuelva un arreglo
// Deben imprimir el resultado
/* 
var array = [];

function getNumRand(max, min) {
    for(let i = array.length; i < 6; i++) {
        array.push(Math.floor(Math.random() * (max - min) + min));   
     
    }

  /*   while (array.length < 6) {
        array.push(Math.floor(Math.random() * (max - min) + min));   
    }  */


/* function getNumRandUnique(min, max, array) {
    let NumAleatorio = getNumRand(min, max);

    if(!array.include( NumAleatorio)){
        array.push(NumAleatorio);
        return NumAleatorio;
    }else{
        getNumRandUnique(min, max, array)
    }
}

getNumRand(6, 1);
console.log(array);  */



/*
for (let i = 0; i < 6; i++) {
    
  console.log( noRepeat(80, 1));
    
}
 */

 


//let myArray = [];
/* 
function noRepeat(max,min){

    while(myArray.length < 6){
        let numeroAleatorio = Math.floor(Math.random()* (max - min) + min);
        let existe = false;

        for(let i=0;i<myArray.length;i++){
            if(myArray [i] == numeroAleatorio){
                existe = true;
                break;
            }
        }

        if(!existe){
            myArray[myArray.length] = numeroAleatorio;
    }

}
document.getElementById('text').innerHTML = "números aleatorios : " + myArray;
}

noRepeat(6,1)
console.log(array) */
function noRepeat() {
    let myArray = [];

    function numbers(max, min) {
        while(myArray.length < 6){
            let numeroAleatorio = Math.floor(Math.random()* (max - min) + min);
            let existe = false;

            for(let i=0;i<myArray.length;i++){
                if(myArray [i] == numeroAleatorio){
                    existe = true; 
                    break;
                }
            }

            if(!existe){
                myArray[myArray.length] = numeroAleatorio;
            }
        }
    }

    numbers(7,1)
    console.log(myArray);
    document.getElementById('num1').innerHTML =  myArray[0];
    document.getElementById('num2').innerHTML =  myArray[1];
    document.getElementById('num3').innerHTML =  myArray[2];
    document.getElementById('num4').innerHTML =  myArray[3];
    document.getElementById('num5').innerHTML =  myArray[4];
    document.getElementById('num6').innerHTML =  myArray[5];


}

/* 
    for(let i = myArray.length; i < 6; i++) {

        let num = Math.floor(Math.random() * (max - min) + min);
        myArray.push(num);
        document.getElementById('text').innerHTML = "números aleatorios : " + myArray;
        
      
    }  */
    