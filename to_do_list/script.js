
document.querySelector('#añadir').onclick= function(){
    //añadimos validación por si el input está vacío
    if(document.querySelector('.task_i').value.length==0){
        alert("Por favor, introduce una tarea!")
    }
    else{
        document.querySelector('.tasks').innerHTML
        += `
         
            <div class="new_task">
                <span id="task_name" class="task_name">
                    ${document.querySelector('.task_i').value}
                </span>
                <button class="task_delete">
                    <img src="./img/icons/icons8-basura-24.png">
                </button>
            </div>
            
        `;
    }
    //insertamos la lógica para añadir las tareas, cada vez que añada una tarea se va a crear un contenedor con la estructura de arriba, e insertamos el valor de task_i usando la variable
    
    
    //creamos la lógica para borrar la tarea con el botón
    var current_tasks=document.querySelectorAll(".task_delete") //todas las variables que tengan task_delete
    for (var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick=function(){
            this.parentNode.remove();
        }
    }
    //recorremos cada item uno por uno y si le damos click al botón eliminamos el elemento

    //implementamos logica para que se tache el nombre cuando hayamos realizado la tarea
    var tasks=document.querySelectorAll(".new_task");
    for(var i=0;i<tasks.length;i++){
        tasks[i].onclick=function(){
            this.classList.toggle('completed');
            //aqui le cambia la clase a completed
        }
    }

    //limpiamos el input despues de introducir una tarea
    document.querySelector(".task_i").value="";
    //hacemos que de manera predeterminada este vacio
}
