const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", () => {
    const inputTodo = document.querySelector("#input").value;
    const todoList = document.querySelector("#todoList");
    const newTodo = "<li><input type='checkbox'>" + inputTodo + "</li>";
    todoList.innerHTML += newTodo;
    document.querySelector("#input").value = "";
});
