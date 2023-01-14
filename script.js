let addTodoButton = document.getElementById('addTodo');
let inputTodo = document.getElementById('task');
let removeButton = document.getElementById('removeButton');

let todoList = [
 {"id":1, "todoName": "Writing"},
 {"id":2, "todoName": "Talking"},
 {"id":3, "todoName": "Walking"}
]
let alertBox = document.getElementById("alert");
displayTasks();

document.querySelector("#addTodo").addEventListener('click', newTask);

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
         <li class="task" id="task">
                        <input class="form-check-input" type="checkbox" value="" id="${todo.id}"> ${todo.todoName}
                        <label class="form-check-label" for="${todo.id}">
                          </label>
                       </li>
                            
         `;
 ul.insertAdjacentHTML("beforeend", li);
      }
};


 