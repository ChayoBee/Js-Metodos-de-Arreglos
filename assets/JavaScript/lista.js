const titulo = document.getElementById('inputTarea');
const btnAdd = document.getElementById('btnAdd');
const total = document.getElementById('spanTotal');
const hecho = document.getElementById('spanHecho');
const lista = document.getElementById('tareaList');

// Tareas impresas

let tareas = [
    { id: 1, name: ' Imprimir los stickers', done: false},
    { id: 2, name: ' Armar las chapitas', done: false},
    { id: 3, name: ' Ir a buscar los llaveros', done: false}
];

let newID = 4;

const contador = () => {
    total.innerHTML = tareas.length;
    hecho.innerHTML = tareas.filter((tarea) => tarea.done == true).length
  };
  
  contador(tareas); 

function renderTareas(tareas) {
    let html = '';
    for (let tarea of tareas) {
        html += `
        <div>
        <li>${tarea.id} ${tarea.name}
        <input type="checkbox" ${tarea.done ? 'checked' : ''} onchange = "checkea(${tarea.id})">
        <div class = "boton" onclick = 'borrar(${tarea.id})'>❌</div>
        </li>
        </div>`
    };
    lista.innerHTML = html;
    contador();
};
renderTareas(tareas);

btnAdd.addEventListener("click", () => {
    const nameTarea = titulo.value;
    if (nameTarea.trim() != ''){
        const nuevaTarea = {id: newID, name:nameTarea, done: false};
        tareas.push(nuevaTarea);
        newID++
    } else {
        alert('Por favor ingresa una tarea')
    };
    //titulo.value= '';

    
   renderTareas(tareas);
});

const checkea = (id) => {
    const tarea = tareas.find(t => t.id === id);
    tarea.done = !tarea.done;
    contador();
    renderTareas();
};

function borrar(id){
    const index = tareas.findIndex((elemento) => elemento.id == id);
    tareas.splice(index, 1);
    renderTareas(tareas);
};