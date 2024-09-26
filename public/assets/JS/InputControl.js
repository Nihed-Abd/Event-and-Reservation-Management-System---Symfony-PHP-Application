
//!========================================================= Transport et chauffeur=========================================================
const nomRegex = /^[A-Za-z]+$/;
const prenomRegex = /^[A-Za-z]+$/;
const telRegex = /^[0-9]{8}$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const vehiculeRegex = /^[A-Za-z0-9]+$/;

const nomInput = document.getElementById('noma');
const prenomInput = document.getElementById('prenoma');
const telInput = document.getElementById('tela');
const emailInput = document.getElementById('emaila');
const vehiculeInput = document.getElementById('vehiculea');

function validateFormAddChauffeur() {


  if (!nomRegex.test(nomInput.value)) {
    alert('Le nom ne doit contenir que des lettres.');
    nomInput.classList.add('wrong');
    return false;
  }

  if (!prenomRegex.test(prenomInput.value)) {
    alert('Le prenom ne doit contenir que des lettres.');
    return false;
  }

  if (!telRegex.test(telInput.value)) {
    alert('Le numéro de téléphone doit contenir 8 chiffres.');
    return false;
  }

  if (!emailRegex.test(emailInput.value)) {
    alert('L\'email doit être au format valide.');
    return false;
  }

  if (!vehiculeRegex.test(vehiculeInput.value)) {
    alert('Le véhicule doit contenir des lettres et des chiffres.');
    return false;
  }

  return true;
}





function validateFormModifChauffeur() {
  var idChauffeur = document.getElementById("Id_Chu").value;
  var nom = document.getElementById("nomu").value;
  var prenom = document.getElementById("prenomu").value;
  var tel = document.getElementById("telu").value;
  var email = document.getElementById("emailu").value;
  var vehicule = document.getElementById("vehiculeu").value;
  const telRegex = /^[0-9]{8}$/;

  // Validation des champs obligatoires
  if (idChauffeur == "" || nom == "" || prenom == "" || tel == "" || email == "" || vehicule == "") {
    alert("Veuillez remplir tous les champs obligatoires");
    return false;
  }

  // Validation du numéro de téléphone
  if (isNaN(tel)) {
    alert("Le numéro de téléphone doit être un nombre");
    return false;
  }
  if (!telRegex.test(tel)) {
    alert('Le numéro de téléphone doit contenir 8 chiffres.');
    return false;
  }

  // Validation de l'adresse email
  var emailFormat = /^\S+@\S+\.\S+$/;
  if (!email.match(emailFormat)) {
    alert("Veuillez entrer une adresse email valide");
    return false;
  }

  return true;
}

function validateFormAddTransport() {
  // Récupérer les valeurs des champs du formulaire
  var idClient = document.getElementById("IdClientat").value;
  var idChauffeur = document.getElementById("Id_Chat").value;
  var type = document.getElementById("Typeat").value;
  var nbrPersonne = document.getElementById("Nbr_Persat").value;
  var date = document.getElementById("Dateat").value;
  var adresse = document.getElementById("adresseat").value;
  var name = document.getElementById("nameat").value;
  var phone = document.getElementById("numat").value;

  // Vérifier si les champs obligatoires sont remplis
  if (idClient === '' || idChauffeur === '' || type === '' || nbrPersonne === '' || date === '' || adresse === '' || name === '' || phone === '') {
    alert("Veuillez remplir tous les champs obligatoires.");
    return false;
  }

  // Vérifier si le nombre de personnes est supérieur à zéro
  if (nbrPersonne <= 0) {
    alert("Le nombre de personnes doit être supérieur à zéro.");
    return false;
  }

  // Vérifier si le numéro de téléphone est valide
  var phoneRegex = /^\d{8}$/;
  if (!phoneRegex.test(phone)) {
    alert("Le numéro de téléphone doit être composé de 8 chiffres.");
    return false;
  }
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!date.value.match(dateRegex)) {
    alert("La date doit être au format YYYY-MM-DD.");
    return false;
  }

  // Si toutes les vérifications sont passées, retourner true
  return true;
}


function validateFormModifTransport() {
  var idTut = document.getElementById("Id_Tut").value;
  var idClientut = document.getElementById("IdClientut").value;
  var id_Chut = document.getElementById("Id_Chut").value;
  var typeut = document.getElementById("Typeut").value;
  var nbr_Persut = document.getElementById("Nbr_Persut").value;
  var date = document.getElementById("Dateut").value;
  var adresseut = document.getElementById("adresseut").value;
  var nameut = document.getElementById("nameut").value;
  var numut = document.getElementById("numut").value;

  if (idTut == "" || idClientut == "" || id_Chut == "" || typeut == "" || nbr_Persut == "" || date == "" || adresseut == "" || nameut == "" || numut == "") {
    alert("Veuillez remplir tous les champs obligatoires!");
    return false;
  }

  // Vérifier si le nombre de personnes est supérieur à zéro
  if (nbr_Persut <= 0) {
    alert("Le nombre de personnes doit être supérieur à zéro.");
    return false;
  }

  // Vérifier si le numéro de téléphone est valide
  var phoneRegex = /^\d{8}$/;
  if (!phoneRegex.test(numut)) {
    alert("Le numéro de téléphone doit être composé de 8 chiffres.");
    return false;
  }
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!date.value.match(dateRegex)) {
    alert("La date doit être au format YYYY-MM-DD.");
    return false;
  }
  // Si toutes les vérifications sont passées, retourner true
  return true;
}

//!========================================================= Event=========================================================

function validateFormAddEvent() {
var namea = document.forms[0]["namea"].value;
var typea = document.forms[0]["typea"].value;
var timea = document.forms[0]["timea"].value;
var datea = document.forms[0]["datea"].value;
var prixa = document.forms[0]["prixa"].value;
var imagea = document.forms[0]["imagea"].value;
var nbrPlaceMaxa = document.forms[0]["nbrPlaceMaxa"].value;


// Vérifier si les champs sont vides
if (namea == "" || typea == "" || timea == "" || datea == "" || prixa == "" || imagea == "" || nbrPlaceMaxa == "") {
  alert("Tous les champs doivent être remplis.");
  return false;
}
var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
if (!datea.value.match(dateRegex)) {
  alert("La date doit être au format YYYY-MM-DD.");
  return false;
}
  return true;
}


function validateFormModifierEvent() {
  var idEventu = document.forms[1]["idEventu"].value;
  var nameu = document.forms[1]["nameu"].value;
  var typeu = document.forms[1]["typeu"].value;
  var timeu = document.forms[1]["timeu"].value;
  var dateu = document.forms[1]["dateu"].value;
  var prixu = document.forms[1]["prixu"].value;
  var imageu = document.forms[1]["imageu"].value;
  var nbrPlaceMaxu = document.forms[1]["nbrPlaceMaxu"].value;
  
  
  // Vérifier si les champs sont vides
  if (idEventu == "" || nameu == "" || typeu == "" || timeu == "" || dateu == "" || prixu == "" || imageu == "" || nbrPlaceMaxu == "") {
    alert("Tous les champs doivent être remplis.");
    return false;
  }
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateu.value.match(dateRegex)) {
    alert("La date doit être au format YYYY-MM-DD.");
    return false;
  }
    return true;
  }

  function validateFormAddReserv() {
    var idEvent = document.forms[2]["idEventa"].value;
    var name = document.forms[2]["namea"].value;
    var email = document.forms[2]["emaila"].value;
    var nbrPlace = document.forms[2]["nbrPlacea"].value;
    var num = document.forms[2]["numa"].value;
    var idClient = document.forms[2]["idClienta"].value;
    
    // Vérification si les champs sont remplis
    if (idEvent == "" || name == "" || email == "" || nbrPlace == "" || num == "" || idClient == "") {
      alert("Veuillez remplir tous les champs!");
      return false;
    }
    
    // Validation de l'email
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide!");
      return false;
    }
    
    // Validation du numéro de téléphone
    var numRegex = /^\d{8}$/;
    if (!numRegex.test(num)) {
      alert("Veuillez entrer un numéro de téléphone valide (8 chiffres)!");
      return false;
    }
    // Vérification du nombre de place
    if (nbrPlace <= 0) {
      alert("Veuillez entrer un nombre de place valide!");
      return false;
    }
    
    // Vérification du nombre de place disponible
    var nbrPlaceMax = $Event['nbrPlaceMax'] ;

    if (nbrPlace > nbrPlaceMax) {
      alert("Le nombre de place demandé dépasse le nombre de place maximum!");
      return false;
    }

  }

  function validateFormModifReserv() {
    var idEvent = document.forms[3]["idEventu"].value;
    var name = document.forms[3]["nameu"].value;
    var email = document.forms[3]["emailu"].value;
    var nbrPlace = document.forms[3]["nbrPlaceu"].value;
    var num = document.forms[3]["numu"].value;
    var idClient = document.forms[3]["idClientu"].value;
    
    // Vérification si les champs sont remplis
    if (idEvent == "" || name == "" || email == "" || nbrPlace == "" || num == "" || idClient == "") {
      alert("Veuillez remplir tous les champs!");
      return false;
    }
    
    // Validation de l'email
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide!");
      return false;
    }
    
    // Validation du numéro de téléphone
    var numRegex = /^\d{8}$/;
    if (!numRegex.test(num)) {
      alert("Veuillez entrer un numéro de téléphone valide (8 chiffres)!");
      return false;
    }
  }


//!========================================================= Utilisateur=========================================================
function validateFormAddUser() {
  var username = document.forms[0]["Usernamea"].value;
  var email = document.forms[0]["emaila"].value;
  var password = document.forms[0]["mdpa"].value;
  var dob = document.forms[0]["doba"].value;
  var permission = document.forms[0]["perma"].value;

  // Vérification que tous les champs sont remplis
  if (username == "" || email == "" || password == "" || dob == "" || permission == "") {
      alert("Tous les champs doivent être remplis");
      return false;
  }

  // Vérification que l'email est valide
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
      alert("Veuillez saisir une adresse email valide");
      return false;
  }

  // Vérification que le mot de passe contient au moins 8 caractères
  if (password.length < 4) {
      alert("Le mot de passe doit contenir au moins 4 caractères");
      return false;
  }
  return true;
}

function validateFormModifUser() {
  // Récupération des valeurs des champs de formulaire
  var idu = document.getElementById("idu").value;
  var username = document.getElementById("Usernameu").value;
  var email = document.getElementById("emailu").value;
  var password = document.getElementById("mdpu").value;
  var dob = document.getElementById("dobu").value;
  var perm = document.getElementById("permu").value;

  // Vérification des champs vides
  if (idu == "" || username == "" || email == "" || password == "" || dob == "" || perm == "") {
      alert("Veuillez remplir tous les champs !");
      return false;
  }

  // Vérification de la validité de l'adresse email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Veuillez saisir une adresse email valide !");
      return false;
  }


  // Si tout est OK, le formulaire est validé
  return true;
}



