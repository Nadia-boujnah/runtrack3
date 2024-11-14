// Initialiser le compteur à 0
let count = 0;

// Définition de la fonction addone
function addone() {
    // Incrémenter le compteur
    count++;
    
    // Mettre à jour le contenu du paragraphe avec l'ID "compteur"
    document.getElementById("compteur").textContent = count;
}

// Ajout de l'événement de clic au bouton
document.getElementById("button").addEventListener("click", addone);
