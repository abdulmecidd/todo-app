let addTodoButton = document.getElementById('addTodo');
let inputTodo = document.getElementById('task');
let removeAllButton = document.getElementById('removeAllButton');
let taskInput = document.querySelector("#addTodoInput");

let todoList = [
];

editMode= false;

let editId;

let alertBox = document.getElementById("alert");

document.querySelector("#addTodo").addEventListener('click', newTask);

document.querySelector('#removeAllButton').addEventListener('click', removeAllTasks);

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
                     <li><a onclick='editTask(${todo.id}, "${todo.todoName}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
               </ul>               
               </div>
          </li>
                            
         `;
 ul.insertAdjacentHTML("beforeend", li);
      }
};


function newTask(){
  if(!editMode){
   if(taskInput.value == ""){
      alertBox.style.display = "block";
   }else{
      todoList.push({"id": todoList.length + 1, "todoName": taskInput.value});
      alertBox.style.display = "none";
   }
  }else{
   for(let task of todoList){

      if(task.id == editId){
         task.todoName = taskInput.value;
      }
      editMode = false;

      }
      }
   taskInput.value = "";
   displayTasks();
};

function removeAllTasks() {

todoList.splice(0, todoList.length);
displayTasks();

};

function deleteTask() {

let deletedId;

for(let index in todoList) {
   if (todoList[index].id == todoList.id) {
      index = deletedId;
   }
}

todoList.splice(deletedId, 1);
displayTasks();
};

function editTask(taskId, taskName) {
   editId = taskId;
   editMode = true;
   taskInput.value = taskName;
}


