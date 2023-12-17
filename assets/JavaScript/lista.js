const titulo = document.getElementById('inputTarea');
const exp = document.getElementById('inputDesc');
const btnAdd = document.getElementById('btnAdd');
const total = document.getElementById('spanTotal');
const hecho = document.getElementById('spanHecho');
const lista = document.getElementById('tareaList');

let tareas = [
    {   id: 11,
        name: 'Stickers', 
        done: false, 
        desc: 'Imprimir los stickers'
    },
    {   id: 12,
        name: 'Chapas',
        done: false,
        desc: 'Armar las chapitas'
    },
    {   id: 13,
        name: 'Llaveros',
        done: false,
        desc: 'Ir a buscar los llaveros'
    }
];

const renderLi = (name, desc, done) => (
    `<li>
      <span>${name}</span>
      <span>${desc}</span>
      <button type="button" onclick="borrar('${name}')">Eliminar</button>
      <button type="button" onclick="check('${name}')">
        ${done ? "✔️" : "❌"}
      </button>
    </li>`
  );
  
  const addTarea = () => {
    if (titulo.value != "" && exp.value !=""){ 
        tareas.push( {
            name: titulo.value,
            done: false,
            desc: exp.value,
        });
    };

    renderTarea();
  };
  
  btnAdd.addEventListener('click', addTarea);
  
  const borrar = (tareaAEliminar) => {
    tareas = tareas.filter((tarea) => tarea.name != tareaAEliminar);

    renderTarea();
  };
  
  const check = (tareaAMarcar) => {
    const tareaCheck = tareas.filter((tarea) => tarea.name == tareaAMarcar);
    const tareaNoCheck = tareas.filter((tarea) => tarea.name != tareaAMarcar);
    if (tareacheck.length > 0){ 
      tareacheck[0].done = !tareacheck[0].done;
      tareas = [...tareaCheck, ...tareaNoCheck];
    };

    renderTarea();
  };
  
  
  const renderTarea = () => {
    tareas = tareas.sort((a, b) => a.name.localeCompare(b.name));
    lista.innerHTML = ""
    for (tarea of tareas){
      lista.innerHTML += renderLi(
        tareas[tarea].name,
        tareas[tarea].desc,
        tareas[tarea].done
       );
    };
    total.innerHTML = tareas.length;
    hecho.innerHTML = tareas.filter((tarea) => tarea.done == true).length
  };
  
  renderTarea();