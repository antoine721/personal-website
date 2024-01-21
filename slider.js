
const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


let currentIndex = 0;

// Fonction pour mettre à jour la position du slider
function updateSlider() {

    const newPosition = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
}

// Ajoutez des écouteurs d'événements pour les clics sur les boutons précédent et suivant
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

