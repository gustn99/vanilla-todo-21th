const todoInput = document.querySelector('input[type="text"]');
const appendButton = document.querySelector("#append-button");
const deleteButtons = document.querySelectorAll(".delete-button");
const checkboxes = document.querySelectorAll(".todo-item input");

const CHECKED_CLASS = "checked-todo-content";

function handleEnterKeyDown(e) {
  if (e.key === "Enter") {
    submitNewTodo();
  }
}

function submitNewTodo() {
  if (todoInput.value === "") return;

  const ul = document.querySelector(".todo-list");
  const nth = ul.childElementCount;

  const li = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");

  li.classList.add("todo-item");
  input.type = "checkbox";
  input.id = `todo-${nth}`;
  label.htmlFor = `todo-${nth}`;
  label.innerText = todoInput.value;
  button.classList.add("delete-button");
  button.innerText = "삭제";

  input.addEventListener("change", handleCheckboxChange);
  button.addEventListener("click", handleDeleteButtonClick);

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);

  ul.appendChild(li);

  todoInput.value = "";
}

function handleDeleteButtonClick(e) {
  const li = e.target.parentElement;
  li.remove();
}

function handleCheckboxChange(e) {
  const checkboxId = e.target.id;
  const label = document.querySelector(`label[for="${checkboxId}"]`);

  if (e.target.checked) {
    label.classList.add(CHECKED_CLASS);
  } else {
    label.classList.remove(CHECKED_CLASS);
  }
}

todoInput.addEventListener("keydown", handleEnterKeyDown);

appendButton.addEventListener("click", submitNewTodo);

deleteButtons.forEach((deletebutton) =>
  deletebutton.addEventListener("click", handleDeleteButtonClick)
);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", handleCheckboxChange)
);
