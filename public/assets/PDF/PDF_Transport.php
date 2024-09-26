<?php

$valeur_id = isset($_GET['val_id']) ? $_GET['val_id'] : 0;
$Id_T      = isset($_GET['Id_T']) ? $_GET['Id_T'] : 0;
$Type      = isset($_GET['Type']) ? $_GET['Type'] : "Type";
$Nbr_Pers  = isset($_GET['Nbr_Pers']) ? $_GET['Nbr_Pers'] : 0;
$Date      = isset($_GET['Date']) ? $_GET['Date'] : "Date";
$Adresse   = isset($_GET['Adresse']) ? $_GET['Adresse'] : "Adress";
$Nom       = isset($_GET['Nom']) ? $_GET['Nom'] : "Name";
$Tel       = isset($_GET['Tel']) ? $_GET['Tel'] : "Phone";
$Message   = isset($_GET['Message']) ? $_GET['Message'] : "Message";

?>



<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../../assets Dashboard/img Dashboard/favicon.png">
    <title>PDF Transport</title>
    <link href="../CSS/PDF.css" rel="stylesheet" />
    <link href="../CSS/PDF2.css" rel="stylesheet" />
</head>
<body >
        <div class="macarte">
            <header>
              <h1><?php echo $Type ?>'s Information</h1>
              <div>
                <h2>Cultural Center</h2>
                <a href="mailto:culturnacop@gmail.com">culturnacop@gmail.com</a>
                <br />
                <a href="../../Page_accueil.php">Culturna.com</a>
                <br />
                +216 26 554 420
              </div>
            </header>
            <aside>
              <span class="img"><h1 style="font-size:4rem; position:absolute; top:-40px; left:150px;">Culturna</h1></span>
              <hr />
              <h3>Informations</h3>
              <h4>Name</h4>
              <p>
                <?php echo $Nom ?>
              </p>
              <h4>N°Passengers</h4>
              <p>
                <?php echo $Nbr_Pers ?>
              </p>
              <h4>Date</h4>
              <p>
                <?php echo $Date ?>
              </p>
              <h4>Message</h4>
              <p>
                <?php echo $Message ?>
              </p>
              <hr />
              <h3>Contact</h3>
              <h4>Adress</h4>
              <p>
                <?php echo $Adresse ?>
              </p>
              <h4>Phone</h4>
              <p>
                <?php echo $Tel ?>
              </p>
              <a href="../../Page_accueil.php">culturna<span>.com</span></a>
            </aside>
        </div>
        <div class="input-back" onclick="window.location.href='../../listChauffeur.php?val_id=<?php echo $valeur_id ?>';">Back</div>
        <div class="input-type-submit2">Telecharger</div>
</body>
    <script src="html2pdf.bundle.js"></script> 
    <script>
        var filename="<?php echo $Nom ?>"
        var btn2 = document.querySelector(".input-type-submit2");
        var element = document.querySelector(".macarte");
        btn2.onclick = () => {
            html2pdf().from(element).save(filename);
        };
    </script>
</html>
