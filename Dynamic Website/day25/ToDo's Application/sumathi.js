let todoList = [
    {
        text:"Learn HTML"
    },
    {
        text:"Learn CSS"
    },
    {
        text:"Learn JS"
    },
    {
        text:"Learn React"
    },
];
function createAndAppendTodo(todo) {
    // let todoItemsContainer = document.getElementById("todoItemsContainer");
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    console.log(todoItemsContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    labelContainer.appendChild(deleteIcon);

}

for (const todo of todoList) {
    createAndAppendTodo(todo);
}