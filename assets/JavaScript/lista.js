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

const contador = () => {
    lista.innerHTML = ""
    total.innerHTML = tareas.length;
    hecho.innerHTML = tareas.filter((tarea) => tarea.done == true).length
  };
  
  contador(tareas); 



/*const contadores = () => {
    lista.innerHTML = "";
    const totalTareas = tareas.length;
    const totalHecho = tareas.filter(t => t.done == true).length;
    total.textContent = `${totalTareas}`;
    hecho.textContent = `${totalHecho}`;
};
contadores(tareas); */

function renderTareas(tareas) {
    let html = '';
    for (let tarea of tareas) {
        html += `
        <div>
        <li>${tarea.id} ${tarea.name}
        <input type="checkbox" ${tarea.done ? 'checked' : ''} onchange = "checkea(${tarea.id})">
        <div onclick = 'borrar(${tarea.id})'>❌</div>
        </li>
        </div>`
    };
    lista.innerHTML = html;
};
renderTareas(tareas);

btnAdd.addEventListener("click", () => {
    const nameTarea = titulo.value;
    const nuevaTarea = {id: tareas.length +1, name:nameTarea, done: false};

    tareas.push(nuevaTarea);
    //titulo.value= '';

    
   renderTareas(tareas);
});

function borrar(id){
    const index = tareas.findIndex((elemento) => elemento.id == id);
    tareas.splice(index, 1);
    renderTareas(tareas);
};