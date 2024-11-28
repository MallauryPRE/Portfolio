function renderCarousel(element, slides, showSlideCounter = true) {
  const slideCounter = document.createElement("span");
  slideCounter.classList.add("carousel__slide-counter");
  element.appendChild(slideCounter);

  const slidesContainer = document.createElement("div");
  slidesContainer.classList.add("carousel__slides-container");
  element.appendChild(slidesContainer);

  const nextButton = document.createElement("button");
  nextButton.innerHTML = ">";
  nextButton.classList.add("carousel__btn--next", "carousel__btn");
  nextButton.addEventListener("click", () => changeSlide("next"));
  element.appendChild(nextButton);

  const prevButton = document.createElement("button");
  prevButton.textContent = "<";
  prevButton.classList.add("carousel__btn--prev", "carousel__btn");
  prevButton.addEventListener("click", () => changeSlide("prev"));
  element.appendChild(prevButton);

  let currentSlide = 0;
  let startX = 0;
  let endX = 0;
  let isDragging = false;

  element.classList.add("carousel");

  function filterCurrentSlide() {
    return slides.filter((_, index) => index === currentSlide);
  }

  function renderSlides() {
    slidesContainer.innerHTML = "";
    filterCurrentSlide().forEach((item) => {
      const carouselSlide = document.createElement("div");
      carouselSlide.classList.add("carousel__slide");
      carouselSlide.innerHTML = item;
      slidesContainer.appendChild(carouselSlide);
    });
  }
  renderSlides();

  function renderSlideCounter() {
    slideCounter.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
  }
  showSlideCounter && renderSlideCounter();

  function changeSlide(type) {
    if (type === "next") {
      currentSlide = (currentSlide + 1) % slides.length;
    } else if (type === "prev") {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    renderSlides();
    showSlideCounter && renderSlideCounter();
  }

  function handleMouseDown(event) {
    startX = event.clientX;
    isDragging = true;
  }

  function handleMouseMove(event) {
    if (!isDragging) return;
    endX = event.clientX;
  }

  function handleMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    if (startX > endX + 50) {
      changeSlide("next");
    } else if (startX < endX - 50) {
      changeSlide("prev");
    }
  }

  slidesContainer.addEventListener("mousedown", handleMouseDown);
  slidesContainer.addEventListener("mousemove", handleMouseMove);
  slidesContainer.addEventListener("mouseup", handleMouseUp);
}

renderCarousel(
  document.querySelector("#carousel"),
  [
    "<img src='../pictures/b66a6cc6f6e01a98d7b196311c2f8ebafe6e978f.png' />",
    "<img src='../pictures/LuaLogo.png' />",
    "<img src='../pictures/SiteVitrine.png' />",
  ],
  true
);
