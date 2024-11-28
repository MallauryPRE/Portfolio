document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      document.body.style.opacity = 0;
      document.body.style.transition = "opacity 0.3s ease";

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});
