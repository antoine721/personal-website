document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  
  // Sélectionnez les boutons précédent et suivant
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  // Fonction pour afficher une diapositive en fonction de son index
  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Calculez la nouvelle valeur de la propriété 'transform' pour déplacer le slider
    const newTransformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + newTransformValue + ")";
  }

  // Fonction pour afficher la diapositive suivante
  function showNextSlide() {
    showSlide(currentIndex + 1);
  }

  // Fonction pour afficher la diapositive précédente
  function showPrevSlide() {
    showSlide(currentIndex - 1);
  }

  //detecteur de clic
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  // move automatique toute les 5 sec
  setInterval(showNextSlide, 5000);
});

