document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + newTransformValue + ")";
  }

  function showNextSlide() {
    showSlide(currentIndex + 1);
  }

  function showPrevSlide() {
    showSlide(currentIndex - 1);
  }

  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);
  setInterval(showNextSlide, 5000);
});
