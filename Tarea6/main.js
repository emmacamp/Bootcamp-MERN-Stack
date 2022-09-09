const arr = [];


const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const nota = Number(document.getElementById("nota").value);
  const id = document.getElementById("id").value;

  const student = new Student(name, surname, nota, id);
  arr.push(student);
  console.log(arr);
  getElements();

  let promedio =
    arr.reduce((acc, element) => acc + element.nota, 0) / arr.length;
  const averageContainer = document.getElementById("promedio");
  averageContainer.innerHTML = Math.round(promedio);

  dataClear();
  
});


class Student {
  constructor(name, surname, nota, id) {
    this.name = name;
    this.surname = surname;
    this.nota = nota;
    this.id = id;
  }
}

function getElements() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  arr.forEach((element) => {
    tbody.innerHTML += 
    `<tr>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.id}</td>
        <td>${element.nota}</td>
    </tr>`;
    });
}


//funcion eliminar
const btnDelete = document.querySelector('.btn-delete');
const btnEdit = document.querySelector('.btn-edit');

function editar() {
  
}




function eliminar() {
    

};



function dataClear() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("id").value = "";
    document.getElementById("nota").value = "";
}