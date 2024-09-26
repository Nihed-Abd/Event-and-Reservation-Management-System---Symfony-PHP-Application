function paginerTableau(tableauSelector, nbLignesParPage, boutonPrecedentSelector, boutonSuivantSelector) {
  
    const tableau = document.querySelector(tableauSelector).querySelectorAll('tbody tr');
    const nbPages = Math.ceil(tableau.length / nbLignesParPage);
    let pageCourante = 1;
  
    // Masquer toutes les lignes sauf les 5 premières
    for (let i = nbLignesParPage; i < tableau.length; i++) {
      tableau[i].style.display = 'none';
    }
  
    // Désactiver le bouton Précédent initialement
    const boutonPrecedent = document.querySelector(boutonPrecedentSelector);
    boutonPrecedent.disabled = true;
  
    // Activer/désactiver les boutons et afficher les lignes correspondantes en fonction de la page courante
    function afficherPage() {
      const debut = (pageCourante - 1) * nbLignesParPage;
      const fin = debut + nbLignesParPage;
      for (let i = 0; i < tableau.length; i++) {
        if (i >= debut && i < fin) {
          tableau[i].style.display = '';
        } else {
          tableau[i].style.display = 'none';
        }
      }
      const boutonSuivant = document.querySelector(boutonSuivantSelector);
      boutonSuivant.disabled = (pageCourante >= nbPages);
      boutonPrecedent.disabled = (pageCourante <= 1);
    }
  
    // Ajouter un événement au clic sur les boutons Suivant et Précédent
    const boutonSuivant = document.querySelector(boutonSuivantSelector);
    const boutons = [boutonPrecedent, boutonSuivant];
    boutons.forEach(function(button) {
      button.addEventListener('click', function() {
        if (this.id === boutonSuivant.id) {
          pageCourante++;
        } else {
          pageCourante--;
        }
        afficherPage();
      });
    });
  
    // Afficher la première page initialement
    afficherPage();
  }

paginerTableau('.tableau1', 11, '#bouton-precedent1', '#bouton-suivant1');//user
paginerTableau('.tableau2', 3, '#bouton-precedent2', '#bouton-suivant2');//if there's another table
