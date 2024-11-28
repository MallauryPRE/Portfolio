const openPopupBtn = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const burgerIcon = document.querySelector("#openPopup img");

openPopupBtn.addEventListener("click", () => {
  if (popup.classList.contains("active")) {
    // Close popup
    popup.classList.remove("active");
    burgerIcon.classList.remove("active");

    setTimeout(() => {
      popup.style.display = "none";
    }, 300);
  } else {
    // Open popup
    popup.style.display = "flex";
    burgerIcon.classList.add("active");

    setTimeout(() => {
      popup.classList.add("active");
    }, 10);
  }
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    burgerIcon.classList.remove("active");

    setTimeout(() => {
      popup.style.display = "none";
    }, 300);
  }
});
