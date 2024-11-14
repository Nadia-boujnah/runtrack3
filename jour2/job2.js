// Définition de la fonction showhide
function showhide() {
    // Vérifier si l'élément avec l'ID "citation" existe déjà
    const article = document.getElementById("citation");

    if (article) {
        // Si l'élément existe, le retirer de la page
        article.remove();
    } else {
        // Si l'élément n'existe pas, le créer et l'ajouter
        const newArticle = document.createElement("article");
        newArticle.id = "citation";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}

// Ajout de l'événement de clic au bouton
document.getElementById("button").addEventListener("click", showhide);
