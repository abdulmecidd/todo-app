let addTodoButton = document.getElementById('addTodo');
let inputTodo = document.getElementById('task');
let removeAllButton = document.getElementById('removeAllButton');

let todoList = [
]
let alertBox = document.getElementById("alert");


document.querySelector("#addTodo").addEventListener('click', newTask);

document.querySelector('#removeAllButton').addEventListener('click', removeAllTasks);

function newTask(){
   let taskInput = document.querySelector("#addTodoInput");
   if(taskInput.value == ""){
      
      alertBox.style.display = "block";
   }else{
      todoList.push({"id": todoList.length + 1, "todoName": taskInput.value});
      taskInput.value = "";
      displayTasks();
      alertBox.style.display = "none";
   }
};

function displayTasks() {
   let ul = document.getElementById('taskList');
   ul.innerHTML = "";

   for(let todo of todoList) {
         let li = `
         <li class="task list-group-item" id="task">
         <div class="form-check">
               <input class="form-check-input" type="checkbox" value="" id="${todo.id}"> ${todo.todoName}
               <label class="form-check-label" for="${todo.id}">
               </label>
               </div>
               <div class="dropdown">
               <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <i class="fa-solid fa-ellipsis"></i>
               </button>
               <ul class="dropdown-menu">
                     <li><a onclick="deleteTask(${todo.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                     <li><a onclick='editTask(${todo.id}, "${todo.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
               </ul>               
               </div>
          </li>
                            
         `;
 ul.insertAdjacentHTML("beforeend", li);
      }
};


function removeAllTasks() {

todoList.splice(0, todoList.length);
displayTasks();

};

function updateTask() {

}