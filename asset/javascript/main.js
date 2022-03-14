const modal = document.querySelector(".js-modal");
const modalOpenBtn = document.querySelectorAll(".js-modal-open-btn");
const modalColseBtn = document.querySelector(".js-modal-colse-btn");
const modalColseItem = document.querySelector(".js-modal-colse-item");
const modalContainer = document.querySelector(".js-modal-container");

function showModal() {
  modal.classList.add("open");
}
// Hide xóa bỏ class trong modal
function hideModal() {
  modal.classList.remove("open");
}

//lắng nghe sự kiện khi click vào 1 trong 3 nút
for (const modalBtn of modalOpenBtn) {
  modalBtn.addEventListener("click", showModal);
}

// click vào nút close đóng form modal lại
modalColseBtn.addEventListener("click", hideModal);

// click vào item close đóng form modal lại
modalColseItem.addEventListener("click", hideModal);

// click ra phần modal thì đóng form modal lại
modal.addEventListener("click", hideModal);

// ngăn chặn việc đóng form modal bên trong phạm vi hiển thị của modalContainer
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
