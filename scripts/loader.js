document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-container");

  // Hide loader after 2 seconds
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});
