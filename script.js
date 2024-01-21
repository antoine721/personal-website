document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const darkModeClass = 'dark-mode';
    
    // Vérifie si le mode sombre est déjà activé
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Applique le mode sombre si nécessaire
    if (isDarkMode) {
        body.classList.add(darkModeClass);
        themeToggle.checked = true; 
    }
    
    themeToggle.addEventListener('change', function () {
        // Inverse l'état du mode sombre
        const toggleDarkMode = !body.classList.contains(darkModeClass);
        
        // Ajoute ou retire la classe en fonction de l'état
        if (toggleDarkMode) {
            body.classList.add(darkModeClass);
        } else {
            body.classList.remove(darkModeClass);
        }
        
        // Enregistre l'état du mode sombre
        localStorage.setItem('darkMode', toggleDarkMode);
    });
});





// Fonction pour valider le formulaire d'inscription
function validerInscription() {
    // Récupérez les valeurs des champs du formulaire
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var classe1ere = document.getElementById('classe1ere');
    var classeTle = document.getElementById('classeTle');
    var axe = document.getElementById('axe').value;

    // Vérifiez si tous les champs obligatoires sont remplis
    if (nom && prenom && email && (classe1ere.checked || classeTle.checked) && axe) {
        // Créez un objet avec les données du formulaire
        var resultat = {
            Nom: nom,
            Prénom: prenom,
            Email: email,
            Classe: classe1ere.checked ? "1ère" : "Terminale",
            Axe: axe
        };

        // Affichez les données dans la console
        console.log(resultat);
        

    } else {
        // Affichez un message d'erreur si tous les champs ne sont pas remplis
        console.log('Veuillez remplir tous les champs.');
    }
}
