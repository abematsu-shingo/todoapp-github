const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", () => {
    const inputTodo = document.querySelector("#input").value;
    const todoList = document.querySelector("#todoList");
    const newTodo = "<li><input type='checkbox'>" + inputTodo + "</li>";
    todoList.innerHTML += newTodo;
    document.querySelector("#input").value = "";

    const todos = document.querySelectorAll("li");
    todos.forEach((todo) => {
        todo.addEventListener("change", (e) => {
            if (e.target.checked) {
                todo.style.textDecoration = "line-through";
            } else {
                todo.style.textDecoration = "none";
            }
        });
    });
});
