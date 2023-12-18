const titulo = document.getElementById('inputTarea');
const btnAdd = document.getElementById('btnAdd');
const total = document.getElementById('spanTotal');
const hecho = document.getElementById('spanHecho');
const lista = document.getElementById('tareaList');

// Tareas impresas

let tareas = [
    { id: 1, name: 'Imprimir los stickers', done: false},
    { id: 2, name: 'Armar las chapitas', done: false},
    { id: 3, name: 'Ir a buscar los llaveros', done: false}
];

const addTarea = () => {
    event.preventDefault();
    const nameTarea = titulo.value();

    const nuevaTarea = {id: tareas.length +1, name:nameTarea, done: false};

    tareas.push(nuevaTarea);
    titulo.value= '';
    renderTareas();
};

const renderTareas = () => {
    lista.innerHTML = '';
    tareas.forEach(tarea => {
        const bloqueElemento = document.createElement('div');
        tarea.innerHTML = `
        <li>${tarea.id}</li>
        <li>${tarea.nombre}</li>
        <div>
        <input type= "checkbox" ${tarea.done ? 'checked' : ''} onchange = "toggleHecho(${tarea.id})">
        </div>
        <div onclick = "borrar(${tarea.id})">❌</div>
        </div>`
    lista.appendChild(bloqueElemento);
    });
    actualiza();
};

const toggleHecho = (id) => {
    const tarea = tareas.find(t => t.id === id);
    tarea.done = !tarea.done;
    renderTareas();
};

const borrar = (id) => {
    const encuentra = tareas.findIndex(t => t.id === id);
    tareas.splice(encuentra, 1);
    renderTareas();
};

const actualiza = () => {
    const totalTareas = tareas.length;
    const totalHecho = tareas.filter(t => t.done).length;
    total.textContent = `Total: ${totalTareas}`;
    hecho.textContent = `Realizadas: ${totalHecho}`;
};