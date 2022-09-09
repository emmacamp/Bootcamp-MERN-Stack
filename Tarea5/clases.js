
// ? OBJETOS

let estudiantes = [
    {
        nombre: 'Aaron',
        pasantia: 'Talending',
        pago: '40,700'
    },
    {
        nombre: 'Aaron',
        pasantia: 'Talending',
        pago: '30,000'
    }
];

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].pago)
}


// ? CLASES

class Estudiantes {
    
    constructor(nombre, pasantia, pago) {
        this.nombre = nombre;
        this.pasantia = pasantia;
        this.pago = pago;
    }

    escribir(){
        console.log(`${this.nombre} sabe escribir, esta haciendo una pasantia en ${this.pasantia} y actualmente cobra ${this.pago}`);
    }

    hablar(){
        console.log(`${this.nombre} sabe hablar`)
    }
    
}


let estudiantes = new Estudiantes('Aaron', 'Talending',  '40,700');

estudiantes.escribir()
 
console.log(estudiantes); 

estudiantes.hablar();




