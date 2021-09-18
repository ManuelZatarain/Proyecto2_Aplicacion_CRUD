// Selectores DOM
const inputNuevaTarea = document.getElementById('nueva_tarea')
const botonAgregar = document.getElementById('btn_agregar')
const listaDeTareas = document.getElementById('lista_de_tareas')
var tareas = []

// TODO obtener los datos del localstorage
window.onload = () => {
    const tareasConElformato = JSON.parse( window.localStorage.getItem('tareas'))
    tareas = tareasConElformato
   
    tareas.forEach(tarea => {
        agregarTareaEnElDom(tarea.nombre)
    });
}

function guardarEnlocalStorage(tareas) {
    window.localStorage.setItem('tareas',JSON.stringify(tareas))
}

// Funciones CRUD

function agregarTarea(tarea) {
    const tareaConId = {id:Math.random() ,...tarea}
    // Agrega un elemento a nuestro array = Agregar una task a nuestro array
    tareas.push(tareaConId)
    guardarEnlocalStorage(tareas)
    return tareas
}

function eliminarTarea(nombreDeLaTarea){
    // Filter es para filtrar los elementos que hagan match con nuestra condicional
    const tareasFiltradas=tareas.filter((tarea) => {
        return tarea.nombre != nombreDeLaTarea  // Esta es nuestra condicional
    })
    tareas=tareasFiltradas
    guardarEnlocalStorage(tareas)
}

function actualizarTarea(tareaParaEditar) {
    const tareasFiltradas=tareas.filter((tarea)=>{
        return tarea.id !=tareaParaEditar.id // Esta es nuestra condicional
       })
    tareasFiltradas.push(tareaParaEditar)
    guardarEnlocalStorage(tareas)
}

    // TODO Agregar el metodo para interactuar con los eventos

function agregarTareaEnElDom(valor_del_input) {

    const li = document.createElement('li')
    li.setAttribute('class', 'tarea')
    const botton = document.createElement('button')
    botton.textContent = 'Editar'
    const p = document.createElement('p')
    p.textContent = valor_del_input

    li.appendChild(p)
    li.appendChild(botton)
  
    listaDeTareas.appendChild(li)
    }

botonAgregar.addEventListener('click', () => {
    const valor_del_input = inputNuevaTarea.value 
    const nuevaTarea = {nombre: valor_del_input}
    agregarTarea(nuevaTarea)

    inputNuevaTarea.value = ''

    // Agregar a la Lista del DOMM
    agregarTareaEnElDom(valor_del_input)

    })