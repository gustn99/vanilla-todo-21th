const appendButton = document.querySelector("#append-button");
const deleteButtons = document.querySelectorAll(".delete-button");

const todoItems = document.querySelectorAll(".todo-item");
const checkboxes = document.querySelectorAll(".todo-item input");

const CHECKED_CLASS = "checked-todo-content";

function handleAppendButtonClick(e) {
  const newTodo = e.target.previousElementSibling;

  if (newTodo.value === "") return;

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
  label.innerText = newTodo.value;
  button.classList.add("delete-button");
  button.innerText = "삭제";

  input.addEventListener("change", handleCheckboxChange);

  button.onclick = () => {
    li.remove();
  };

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);

  ul.appendChild(li);

  newTodo.value = "";
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

appendButton.addEventListener("click", handleAppendButtonClick);

deleteButtons.forEach(
  (deletebutton, i) =>
    (deletebutton.onclick = () => todoItems[i].parentElement.remove())
);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", handleCheckboxChange)
);
