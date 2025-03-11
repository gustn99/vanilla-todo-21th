const appendButton = document.querySelector("#append-button");
const deleteButtons = document.querySelectorAll(".delete-button");

const todoItems = document.querySelectorAll(".todo-item");
const checkboxes = document.querySelectorAll(".todo-item input");
const todoContents = document.querySelectorAll(".todo-item div");

appendButton.onclick = () => console.log("click");

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
