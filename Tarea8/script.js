
const url = "https://jsonplaceholder.typicode.com/users"
const div = document.getElementById("app");

fetch(url).then(response => response.json())
.then((users) =>  {
    const list = users.map((user) => `<li>${user.name}, ${user.username}, ${user.email}</li>`);
    div.innerHTML = `<ul>${list}</ul>`;
});



























/* const datos = [
     {
        id: 1,
        Titulo: "Batman",
        year: 2008,
    },
    {
        id: 2,
        Titulo: "Superman",
        year: 2001,
    },
    {
        id: 3,
        Titulo: "El señor de los anillos",
        year: 2001,
    }
]; 

// 
const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0){
            reject(new Error('No hay datos'));
        }
        
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

//Obteniendo los datos de forma asincrona
 getyDatos().then(data => {console.log(data)})
.catch(err => console.log(err.message))
.finally(() => console.log('Finalizado'));
 

async function FetchData(){
    try{
        const dataPelicula = await getDatos();
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
    finally{
        console.log('Finalizado');
    }
}


FetchData();
console.log('Fin del programa'); */