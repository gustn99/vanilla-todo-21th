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

  const newTodo = document.createElement("li");
  const checkbox = document.createElement("input");
  const content = document.createElement("label");
  const deleteButton = document.createElement("button");

  newTodo.classList.add("todo-item");
  deleteButton.classList.add("delete-button");

  checkbox.type = "checkbox";
  checkbox.id = `todo-${nth}`;
  content.htmlFor = `todo-${nth}`;
  content.innerText = todoInput.value;
  deleteButton.innerText = "삭제";

  checkbox.addEventListener("change", handleCheckboxChange);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  deleteButton.addEventListener("click", handleUncheckedDeleteButtonClick);

  newTodo.appendChild(checkbox);
  newTodo.appendChild(content);
  newTodo.appendChild(deleteButton);

  ul.appendChild(newTodo);

  todoInput.value = "";
}

function handleDeleteButtonClick(e) {
  const label = e.target.previousElementSibling;

  // 완료된 투두 삭제
  if (label.classList.contains(CHECKED_CLASS)) {
    const li = e.target.parentElement;
    li.remove();
  }
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
