// Sélectionner le footer
const footer = document.getElementById("footer");

// Fonction pour mettre à jour la couleur du footer en fonction du scroll
function updateFooterColor() {
    // Calculer le pourcentage de scroll
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    // Changer la couleur en fonction du pourcentage de scroll
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
}

// Écouter l'événement de défilement
window.addEventListener("scroll", updateFooterColor);
