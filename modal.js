function handleUncheckedDeleteButtonClick(e) {
  const label = e.target.previousElementSibling;

  if (!label.classList.contains(CHECKED_CLASS)) {
    openModal(label);
  }
}

function openModal(label) {
  const modalWrapper = document.createElement("div");
  const modal = document.createElement("div");
  const content = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const cancelButton = document.createElement("button");
  const confirmButton = document.createElement("button");

  modalWrapper.classList.add("modal-wrapper");
  modal.classList.add("modal");
  content.classList.add("modal-content");
  buttonWrapper.classList.add("button-wrapper");
  cancelButton.classList.add("cancel-button");
  confirmButton.classList.add("confirm-button");

  content.innerText = "완료되지 않은 할 일을 삭제합니다.";
  cancelButton.innerText = "취소";
  confirmButton.innerText = "삭제";

  modalWrapper.addEventListener("click", handleOutsideClick);
  cancelButton.addEventListener("click", closeModal);
  confirmButton.addEventListener("click", () =>
    handleConfirmButtonClick(label)
  );

  modalWrapper.appendChild(modal);
  modal.appendChild(content);
  modal.appendChild(buttonWrapper);
  buttonWrapper.appendChild(cancelButton);
  buttonWrapper.appendChild(confirmButton);

  document.body.appendChild(modalWrapper);
}

function closeModal() {
  const modalWrapper = document.querySelector(".modal-wrapper");
  modalWrapper.remove();
}

function handleOutsideClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function handleConfirmButtonClick(label) {
  const li = label.parentElement;
  li.remove();
}

deleteButtons.forEach((deletebutton) =>
  deletebutton.addEventListener("click", handleUncheckedDeleteButtonClick)
);
