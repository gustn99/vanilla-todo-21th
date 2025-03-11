const todoInput = document.querySelector(".todo-input input");
const appendButton = document.querySelector("#append-button");
const deleteButtons = document.querySelectorAll(".delete-button");

const todoItems = document.querySelectorAll(".todo-item");
const checkboxes = document.querySelectorAll(".todo-item input");

const CHECKED_CLASS = "checked-todo-content";

function handleCheckboxChange(e) {
  const checkboxId = e.target.id;
  const label = document.querySelector(`label[for="${checkboxId}"]`);

  if (e.target.checked) {
    label.classList.add(CHECKED_CLASS);
  } else {
    label.classList.remove(CHECKED_CLASS);
  }
}

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

  input.addEventListener("change", handleCheckboxChange);

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

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", handleCheckboxChange)
);
