//!========================================================= Event=========================================================
function validateFormModifReservUser() {
  // Récupération des valeurs saisies
  let idReservu = document.getElementById('idReservu').value.trim();
  let nameu = document.getElementById('nameu').value.trim();
  let emailu = document.getElementById('emailu').value.trim();
  let nbrPlaceu = document.getElementById('nbrPlaceu').value.trim();
  let numu = document.getElementById('numu').value.trim();

  // Vérification que les champs obligatoires sont remplis
  if (idReservu === "" || nameu === "" || emailu === "" || nbrPlaceu === "" || numu === "") {
     alert("Veuillez remplir tous les champs obligatoires.");
     return false;
  }

  // Vérification que les valeurs numériques sont positives
  if (idReservu < 1 || nbrPlaceu < 1 ) {
     alert("Les valeurs numériques doivent être positives.");
     return false;
  }
    // Validation de l'email
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailu)) {
      alert("Veuillez entrer une adresse e-mail valide!");
      return false;
    }
    
    // Validation du numéro de téléphone
    var numRegex = /^\d{8}$/;
    if (!numRegex.test(numu)) {
      alert("Veuillez entrer un numéro de téléphone valide (8 chiffres)!");
      return false;
    }
  // Si tout est OK, on peut soumettre le formulaire
  return true;
}

function ReserUser() {
  var name = document.getElementById("namea").value;
  var email = document.getElementById("emaila").value;
  var emailRegex = /^\S+@\S+\.\S+$/;
  if ( email == "" || name == "" ) {
    alert("Veuillez remplir tous les champs obligatoires!");
    return false;
  }
  
  else if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse e-mail valide!");
    return false;
  }
  else {

    return true;
  }
}
function ReserUser2() {

  let nbrPlacea = document.getElementById('nbrPlacea').value.trim();
  let numa = document.getElementById('numa').value.trim();
  if ( nbrPlacea == "" || numa == "" ) {
    alert("Veuillez remplir tous les champs obligatoires!");
    return false;
  }
    // Vérification que les valeurs numériques sont positives
    if (nbrPlacea < 1 ) {
      alert("Les valeurs numériques doivent être positives.");
      return false;
   }
     // Validation du numéro de téléphone
     var numRegex = /^\d{8}$/;
     if (!numRegex.test(numa)) {
       alert("Veuillez entrer un numéro de téléphone valide (8 chiffres)!");
       return false;
     }
  return true;
}
//!========================================================= Transport=========================================================
function validateFormModifTransportUser() {
  var Id_Tut = document.getElementById("Id_Tut").value;
  var typeut = document.getElementById("Typeut").value;
  var nbr_Persut = document.getElementById("Nbr_Persut").value;
  var dateut = document.getElementById("Dateut").value;
  var adresseut = document.getElementById("adresseut").value;
  var nameut = document.getElementById("nameut").value;
  var numut = document.getElementById("numut").value;
  var Noteut = document.getElementById("Noteut").value;


  if ( Id_Tut == "" || typeut == "" || nbr_Persut == "" || dateut == "" || adresseut == "" || nameut == "" || numut == ""|| Noteut == "") {
    alert("Veuillez remplir tous les champs obligatoires!");
    return false;
  }

  // Vérifier si le nombre de personnes est supérieur à zéro
  if (nbr_Persut <= 0) {s
    alert("Le nombre de personnes doit être supérieur à zéro.");
    return false;
  }

  // Vérifier si le numéro de téléphone est valide
  var phoneRegex = /^\d{8}$/;
  if (!phoneRegex.test(numut)) {
    alert("Le numéro de téléphone doit être composé de 8 chiffres.");
    return false;
  }
  // Si toutes les vérifications sont passées, retourner true
  return true;
}

function DemandeTransportUser1() {
  var name = document.getElementById("namea").value;
  var adresse = document.getElementById("adressea").value;
  if ( adresse == "" || name == "" ) {
    alert("Veuillez remplir tous les champs obligatoires!");
    return false;
  }
  return true;
}
function DemandeTransportUser2() {
  var Num = document.getElementById("numa").value;
  var Note = document.getElementById("Notea").value;
  if ( Num == "" || Note == "" ) {
    alert("Veuillez remplir tous les champs obligatoires!");
    return false;
  }
  var numRegex = /^\d{8}$/;
  if (!numRegex.test(Num)) {
    alert("Veuillez entrer un numéro de téléphone valide (8 chiffres)!");
    return false;
  }
  return true;
}
//!========================================================= Utilisateur=========================================================

function validateFormModifserFront() {
  var username = document.getElementById("Usernameu").value;
  var email = document.getElementById("emailu").value;
  var dob = document.getElementById("dobu").value;

  
  // Vérifier si les champs sont vides
  if (username == "" && email == "" && dob == "") {
  alert("Tous les champs doivent être remplis");
  return false;
  }
  
  // Vérifier la validité de l'adresse e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (!emailRegex.test(email)) {
  alert("Veuillez saisir une adresse e-mail valide");
  return false;
  }
  return true;
  }

function validateLoginUser() {
  // Récupération des valeurs des champs de formulaire
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginpass").value;
  
  // Vérification des champs vides
  if (username == "" || password == "" ) {
      alert("Veuillez remplir tous les champs !");
      return false;
  }

  // Vérification de la longueur du mot de passe
  if (password.length < 4) {
      alert("Le mot de passe doit contenir au moins 4 caractères !");
      return false;
  }
  return true;
}

function validateSignUpUser() {
  // Récupération des valeurs des champs de formulaire
  var username = document.getElementById("Usernamea").value;
  var email = document.getElementById("emaila").value;
  var password = document.getElementById("mdpa").value;
  var dob = document.getElementById("doba").value;


  // Vérification que tous les champs sont remplis
  if (username == "" || email == "" || password == "" || dob == "" ) {
      alert("Tous les champs doivent être remplis");
      return false;
  }
  // Vérification que l'email est valide
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
      alert("Veuillez saisir une adresse email valide");
      return false;
  }
  // Vérification que le mot de passe contient au moins 4 caractères
  if (password.length < 4) {
      alert("Le mot de passe doit contenir au moins 4 caractères");
      return false;
  }
 else if (!/[a-z]/.test(password)) {
    alert("Le mot de passe doit contenir au moins une lettre minuscule.");
    return false;
  } else if (!/[A-Z]/.test(password)) {
    alert("Le mot de passe doit contenir au moins une lettre majuscule.");
    return false;
  } else if (!/[0-9]/.test(password)) {
    alert("Le mot de passe doit contenir au moins un chiffre.");
    return false;
  }  
  return true;
}