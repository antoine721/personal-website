
// Sélectionnez les éléments de tab et content

const tabs = document.querySelectorAll('.tab');

const contents = document.querySelectorAll('.content');

// Pour chaque élément avec la classe 'tab'
tabs.forEach(tab => {
    // Ajoute un detecteur de clic
    tab.addEventListener('click', function() {

        tabs.forEach(t => t.classList.remove('tab-active'));

        contents.forEach(c => c.classList.remove('active'));

        // Ajoute la classe 'tab-active'
        this.classList.add('tab-active');
        
        // Récupérez la deuxième classe 
        const axeClass = this.classList[1];
        // Sélectionnez l'élément avec la classe 'content'
        const content = document.querySelector(`.content.${axeClass}`);
        // Ajoutez la classe 'active' à l'élément correspondant
        content.classList.add('active');
    });
});
