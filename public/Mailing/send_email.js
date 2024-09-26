SMTP = localhost
smtp_port = 25
// Validation du formulaire avant l'envoi
document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.querySelector('#name').value.trim();
    let email = document.querySelector('#email').value.trim();
    let message = document.querySelector('#message').value.trim();

    // Vérification des champs
    if (name === '' || email === '' || message === '') {
        alert('Tous les champs sont obligatoires');
        event.preventDefault();
        return false;
    }

    // Vérification de l'email
    if (!isValidEmail(email)) {
        alert('L\'email n\'est pas valide');
        event.preventDefault();
        return false;
    }

    return true;
});

// Fonction de validation d'email
function isValidEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
