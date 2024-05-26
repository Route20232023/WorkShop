// // const todoBtn = document.getElementById("todo-button");
// // let unCompleted = [];
// // let completed =[];
// // let allTodos=[]
// // todoBtn.addEventListener('click',function(e){
// //     e.preventDefault()
// //     var taskInput = document.getElementById("taskInput");
// //     var newTask  = {task:taskInput.value,completed:false}
// //     unCompleted.push(newTask);
// //     allTodos= [...unCompleted,...completed]
// //     displayData(allTodos)
// // })

// // function displayData(arrayToBeDisplayed){
// //     console.log(arrayToBeDisplayed);
// //     let cartoona = "";
// // for (let element of arrayToBeDisplayed) {

// //     cartoona+=`
// //     <div class="todo" data-comp="false">
// //             <li class="todo-item">${element.task}</li>
// //             <button class="complete-btn" onclick="postToCompletedOrUnCompleted(${JSON.stringify(element)})">
// //               <i class="fas fa-check"><i></i></i></button
// //             ><button class="trash-btn">
// //               <i class="fas fa-trash"><i></i></i>
// //             </button>
// //           </div>
// //     `
// // }
// // document.getElementById("todos-container").innerHTML=cartoona
// // }

// // function postToCompletedOrUnCompleted(theTodo){
// //     console.log(theTodo);
// // }

// const todoBtn = document.getElementById("todo-button");
// let unCompleted = [];
// let completed = [];
// let allTodos = [];

// todoBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   var taskInput = document.getElementById("taskInput");
//   var newTask = { task: taskInput.value, completed: false };
//   unCompleted.push(newTask);
//   allTodos = [...unCompleted, ...completed];
//   displayData(allTodos);
// });

// function displayData(arrayToBeDisplayed) {
//   console.log(arrayToBeDisplayed);
//   let cartoona = "";

//   for (let element of arrayToBeDisplayed) {
//     cartoona += `
//       <div class="todo" data-comp="false">
//         <li class="todo-item">${element.task}</li>
//         <button class="complete-btn" onclick="postToCompletedOrUnCompleted(${JSON.stringify(element)})">
//           <i class="fas fa-check"></i></button>
//         <button class="trash-btn">
//           <i class="fas fa-trash"></i>
//         </button>
//       </div>
//     `;
//   }

//   document.getElementById("todos-container").innerHTML = cartoona;
// }

// function postToCompletedOrUnCompleted(theTodo) {
//   console.log(theTodo);
// }

// // ########################################################

// const todoBtn = document.getElementById("todo-button");
// const CompletedOption = document.getElementById("completed");

// let unCompleted = [];
// let completed = [];
// let allTodos = [];

// todoBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     var taskInput = document.getElementById("taskInput");
//     var newTask = { task: taskInput.value, completed: false };
//     unCompleted.push(newTask);
//     console.log(unCompleted, "now the uncompleting when add");
//     allTodos = [...unCompleted, ...completed];
//     displayData(allTodos);
// });

// const selectElement = document.getElementById("mySelect");

// selectElement.addEventListener("change", function () {

//     console.log(selectElement.options[selectElement.selectedIndex].value);
//     displayAcoordingToSelectValue()

// });

// function displayAcoordingToSelectValue (){
//     switch (selectElement.options[selectElement.selectedIndex].value) {
//         case 'all':
//             displayData(allTodos);
//             break;
//         case 'completed':
//             displayData(completed);
//             break;
//         case 'uncompleted':
//             displayData(unCompleted);
//             break;

//     }
// }

// function displayData(arrayToBeDisplayed) {
//     console.log(arrayToBeDisplayed);
//     let cartoona = "";

//     for (let i = 0; i < arrayToBeDisplayed.length; i++) {
//         cartoona += `
//       <div class="todo ${arrayToBeDisplayed[i].completed == true ? 'completed' : ""}">
//         <li class="todo-item">${arrayToBeDisplayed[i].task}</li>
//         <button class="complete-btn" onclick="beCompleted(${i})">
//           <i class="fas fa-check"></i></button>
//         <button class="trash-btn">
//           <i class="fas fa-trash"></i>
//         </button>
//       </div>
//     `;
//     }

//     document.getElementById("todos-container").innerHTML = cartoona;
// }

// function beCompleted(index) {
//     if (allTodos[index].completed == true) {
//         console.log("nooo");
//         return
//     }else{
//         allTodos[index].completed = true;
//         completed.push(allTodos[index])
//         var todoDiv = event.target.closest('.todo');
//         todoDiv.classList.add("completed");
//         unCompleted.splice(index, 1);
//         allTodos = [...unCompleted, ...completed];
//         // displayData(allTodos)
//         displayAcoordingToSelectValue()
//         console.log(completed, "comp");
//         console.log(unCompleted, "uncomp");
//     }

// }
// // ########################################################

// ##################THE END#####################
// const todoBtn = document.getElementById("todo-button");
// const CompletedOption = document.getElementById("completed");
// const selectElement = document.getElementById("mySelect");

// let unCompleted = [];
// let completed = [];
// let allTodos = [];

// todoBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     const taskInput = document.getElementById("taskInput");
//     const newTask = { id: Date.now(), task: taskInput.value, completed: false }; // Assign a unique ID
//     unCompleted.push(newTask);
//     updateAllTodos();
//     displayData(allTodos);
// });

// CompletedOption.addEventListener('click', function() {
//     console.log("Hello");
// });

// selectElement.addEventListener("change", function() {
//     const selectedValue = selectElement.options[selectElement.selectedIndex].value;
//     switch (selectedValue) {
//         case 'all':
//             displayData(allTodos);
//             break;
//         case 'completed':
//             displayData(completed);
//             break;
//         case 'uncompleted':
//             displayData(unCompleted);
//             break;
//     }
// });

// function updateAllTodos() {
//     allTodos = [...unCompleted, ...completed];
// }
// function displayAcoordingToSelectValue (){
//     switch (selectElement.options[selectElement.selectedIndex].value) {
//         case 'all':
//             displayData(allTodos);
//             break;
//         case 'completed':
//             displayData(completed);
//             break;
//         case 'uncompleted':
//             displayData(unCompleted);
//             break;

//     }
// }

// function displayData(arrayToBeDisplayed) {
//     console.log(arrayToBeDisplayed);
//     let cartoona = "";
//     for (let i = 0; i < arrayToBeDisplayed.length; i++) {
//         cartoona += `
//             <div class="todo ${arrayToBeDisplayed[i].completed ? 'completed' : ''}">
//                 <li class="todo-item">${arrayToBeDisplayed[i].task}</li>
//                 <button class="complete-btn" onclick="beCompleted(${arrayToBeDisplayed[i].id})">
//                     <i class="fas fa-check"></i>
//                 </button>
//                 <button class="trash-btn" onclick="deleteTask(${arrayToBeDisplayed[i].id})" >
//                     <i class="fas fa-trash"></i>
//                 </button>
//             </div>
//         `;
//     }
//     document.getElementById("todos-container").innerHTML = cartoona;
// }

// function beCompleted(id) {
//     // Find the task in unCompleted array using its unique ID
//     const taskIndex = unCompleted.findIndex(item => item.id === id);
//     if (taskIndex !== -1) {
//         unCompleted[taskIndex].completed = true;
//         completed.push(unCompleted[taskIndex]);
//         unCompleted.splice(taskIndex, 1);
//         updateAllTodos();
//         displayAcoordingToSelectValue()
//     } else {
//         console.log("Task not found in unCompleted list");
//     }
// }

// function deleteTask(id) {
//     let taskIndex = unCompleted.findIndex(item => item.id === id);
//     if (taskIndex !== -1) {
//         unCompleted.splice(taskIndex, 1);
//     } else {
//         taskIndex = completed.findIndex(item => item.id === id);
//         if (taskIndex !== -1) {
//             completed.splice(taskIndex, 1);
//         }
//     }
//     updateAllTodos();
//     displayAcoordingToSelectValue();
// }
// ##################THE END#####################
// const todoAddButton = document.getElementById("todo-button");
// const taskInputAdd = document.getElementById("taskInput");
// var todosContainer = document.getElementById("todos-container");
// let allTodos = getTodosFromStorage("allTdods");
// let completedTodos = getTodosFromStorage("completedTodos");
// let unCompletedTodos = getTodosFromStorage("unCompletedTodos");
// var SelectInput = document.getElementById("mySelect");
// displayData(allTodos);
// todoAddButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("hello");
//   let newTask = {
//     id: `${Math.floor(Math.random() * 1000)}-${Math.floor(
//       Math.random() * 1000
//     )}-${Math.floor(Math.random() * 1000)}`,
//     taskData: taskInputAdd.value,
//     completed: false,
//   };
//   unCompletedTodos.push(newTask);
//   allTodos = [...completedTodos, ...unCompletedTodos];
//   saveInLocalStorage()
//   displayData(allTodos);
// });
// function displayData(arrayToBeDisplayed) {
//   var cartoona = "";
//   for (var i = 0; i < arrayToBeDisplayed.length; i++) {
//     cartoona += `
//         <div class="todo ${
//           arrayToBeDisplayed[i].completed == true ? "completed" : ""
//         }">
//             <li class="todo-item">${arrayToBeDisplayed[i].taskData}</li>
//             <button class="complete-btn" onclick="toCompleted('${
//               arrayToBeDisplayed[i].id
//             }')">
//               <i class="fas fa-check"><i></i></i></button
//             ><button class="trash-btn" onclick="deleteTodo('${arrayToBeDisplayed[i].id}')">
//               <i class="fas fa-trash"><i></i></i>
//             </button>
//           </div>
//         `;
//   }
//   todosContainer.innerHTML = cartoona;
// }
// function toCompleted(id) {
//   console.log(id, "id come ");
//   var taskIndex = unCompletedTodos.findIndex(function (todo) {return todo.id == id; });
//   if (taskIndex != -1) {
//     unCompletedTodos[taskIndex].completed = true;
//     completedTodos.push(unCompletedTodos[taskIndex]);
//     unCompletedTodos.splice(taskIndex, 1);
//     allTodos = [...completedTodos, ...unCompletedTodos];
//     displayAccordingToSelectType();
//     saveInLocalStorage()
//     console.log(allTodos, "allTodos");
//     console.log(completedTodos, "completedTodos");
//     console.log(unCompletedTodos, "unCompletedTodos");
//   } else {
//     console.log("not found");
//   }
// }
// SelectInput.addEventListener("change", function () {
// displayAccordingToSelectType()
// });
// function displayAccordingToSelectType(){
//     console.log(SelectInput.options[SelectInput.options.selectedIndex].value );
//     switch (SelectInput.options[SelectInput.options.selectedIndex].value) {
//         case "all":
//           displayData(allTodos);
//           break;
//         case "completed":
//           displayData(completedTodos);
//           break;
//         case "uncompleted":
//           displayData(unCompletedTodos);
//           break;
//       }
// }
// function deleteTodo(id){
//     console.log(id);
//     var taskIndex = unCompletedTodos.findIndex(function(todo){return todo.id == id })
//     console.log(taskIndex);
//     if(taskIndex != -1){
//         unCompletedTodos.splice(taskIndex,1)
      
//     }else{
//         var taskIndex = completedTodos.findIndex(function(todo){return todo.id == id })
//         if(taskIndex != -1){
//             completedTodos.splice(taskIndex,1)
//         }
//     }
    
//     allTodos=[...completedTodos , ...unCompletedTodos];
//     displayAccordingToSelectType();
//     saveInLocalStorage()
// }
// function saveInLocalStorage(){
//     localStorage.setItem("allTdods", JSON.stringify(allTodos));
//     localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
//     localStorage.setItem("unCompletedTodos", JSON.stringify(unCompletedTodos));
// }
// function getTodosFromStorage(key) {
//     const storedData = localStorage.getItem(key);
//     return storedData ? JSON.parse(storedData) : [];
// }


//############with filter
const todoAddButton = document.getElementById("todo-button");
const taskInputAdd = document.getElementById("taskInput");
var todosContainer = document.getElementById("todos-container");
let allTodos = []
let completedTodos = []
let unCompletedTodos = []
var SelectInput = document.getElementById("mySelect");
if(localStorage.getItem("allTodos") != null){
  allTodos = JSON.parse(localStorage.getItem("allTodos"))
}
displayData(allTodos)
todoAddButton.addEventListener('click',function(e){
  e.preventDefault()
  addTodo()
})
function addTodo(){
  var newTodo = {
    task:taskInputAdd.value,
    isCompleted : false,
    id:`${Math.random()*10000}-${Math.random()*10000}`
  }
  console.log(newTodo);
  console.log(allTodos);
  allTodos.push(newTodo);
  localStorage.setItem('allTodos',JSON.stringify(allTodos))
  displayData(allTodos)
}
function displayData(arr){
  var cartoona = "";
 for (var  todo of arr) {
  cartoona+=`
  <div class="col-11 todo ${todo.isCompleted == true ? "completed" : ""} ">
  <div class="row bg-dark">
    <div class="col-8  py-3 fs-5">${todo.task}</div>
    <div class="col-2  py-3 bg-success d-flex justify-content-center" onclick="beCompleted('${todo.id}')"><i class="fa-solid fa-check fs-3  d-flex align-items-center"></i></div>
    <div class="col-2  py-3 bg-danger d-flex justify-content-center" onclick=" deleteTodo('${todo.id}')" ><i class="fa-solid fa-trash fs-3  d-flex align-items-center"></i></div>
  </div>
</div>
  `
 }
 todosContainer.innerHTML =cartoona
}
function beCompleted(id){
var theIndex = allTodos.findIndex(function(todo){return todo.id == id })
if(theIndex != -1){
  allTodos[theIndex].isCompleted = allTodos[theIndex].isCompleted  == true ? false :true
  localStorage.setItem("allTodos" ,JSON.stringify(allTodos))
  displayDataAccordingToSelectValue()
}else{
  console.log("not found");
}

console.log(id);
}
SelectInput.addEventListener('change',function(){
  console.log(SelectInput.options[SelectInput.options.selectedIndex].value);
  displayDataAccordingToSelectValue()
})
function displayDataAccordingToSelectValue(){
  console.log(SelectInput.options[SelectInput.options.selectedIndex].value);
  switch(SelectInput.options[SelectInput.options.selectedIndex].value){
    case 'all':
      console.log("all dis");
      displayData(allTodos);
      break;
      case 'completed':
        console.log("comp dis");
      var completedTodos = allTodos.filter(function(todo){return todo.isCompleted == true})
      console.log(completedTodos);
      displayData(completedTodos)
      break;
      case 'uncompleted' : 
      var unCompletedTodos = allTodos.filter(function(todo){return todo.isCompleted == false})
      console.log(unCompletedTodos);
      displayData(unCompletedTodos)
  }
}
function deleteTodo(id){
  var todoIndex = allTodos.findIndex(function(todo){return todo.id == id });
  if(todoIndex !=-1){
    allTodos.splice(todoIndex , 1)
    localStorage.setItem('allTodos', JSON.stringify(allTodos))
    displayDataAccordingToSelectValue()
  }
}