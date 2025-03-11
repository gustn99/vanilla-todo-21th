const todoInput = document.querySelector(".todo-input input");
const appendButton = document.querySelector("#append-button");
const deleteButtons = document.querySelectorAll(".delete-button");

const todoItems = document.querySelectorAll(".todo-item");
const checkboxes = document.querySelectorAll(".todo-item input");
const todoContents = document.querySelectorAll(".todo-item div");

appendButton.onclick = () => {
  if (todoInput.value === "") return;

  const ul = document.querySelector(".todo-list");

  const li = document.createElement("li");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const div = document.createElement("div");
  const button = document.createElement("button");

  label.classList.add("todo-item");
  input.type = "checkbox";
  div.innerText = todoInput.value;
  button.classList.add("delete-button");
  button.innerText = "삭제";

  input.onchange = () => {
    if (input.checked) {
      div.classList.add("checked-todo-content");
    } else {
      div.classList.remove("checked-todo-content");
    }
  };

  button.onclick = () => {
    li.remove();
  };

  li.appendChild(label);
  label.appendChild(input);
  label.appendChild(div);
  label.appendChild(button);

  ul.appendChild(li);

  todoInput.value = "";
};

deleteButtons.forEach(
  (deletebutton, i) =>
    (deletebutton.onclick = () => todoItems[i].parentElement.remove())
);

checkboxes.forEach(
  (checkbox, i) =>
    (checkbox.onchange = () => {
      if (checkbox.checked) {
        todoContents[i].classList.add("checked-todo-content");
      } else {
        todoContents[i].classList.remove("checked-todo-content");
      }
    })
);
