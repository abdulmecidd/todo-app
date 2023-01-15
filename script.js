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
         <li class="task" id="task">
                        <input class="form-check-input" type="checkbox" value="" id="${todo.id}"> ${todo.todoName}
                        <label class="form-check-label" for="${todo.id}">
                          </label>
                       </li>
                            
         `;
 ul.insertAdjacentHTML("beforeend", li);
      }
};


function removeAllTasks() {

todoList.splice(0, todoList.length);
displayTasks();

};