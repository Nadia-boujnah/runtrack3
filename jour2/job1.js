// Définition de la fonction citation
function citation() {
    // Récupérer le contenu de l'élément avec l'ID "citation"
    const texteCitation = document.getElementById("citation").textContent;
    
    // Afficher le contenu dans la console
    console.log(texteCitation);
}

// Ajout de l'événement de clic au bouton
document.getElementById("button").addEventListener("click", citation);
