let addBtn = document.querySelector("#button");
let input = document.getElementById("input");
let listElem = document.querySelector("#todolist");

let arr = [];

function appendList() {
  listElem.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const todo = document.createElement("li");
    todo.innerHTML = `${arr[i]}<a onclick="editTodo(${i})">Edit</a><a onclick="removeTodo(${i})">Remove</a>`;
    listElem.appendChild(todo);
  }
}

addBtn.addEventListener("click", function () {
  if (input.value != "") {
    arr.push(input.value);
  }
  appendList();
  input.value = "";
});

function removeTodo(index) {
  arr.splice(index, 1);
  appendList();
}

function editTodo(index) {
  let data = prompt("Enter new text :");
  if (data != "" && data != null) {
    arr.splice(index, 1, data);
  }
  appendList();
}
