<?php

$valeur_id = isset($_GET['g']) ? $_GET['g'] : 0;
$Id_Ch = isset($_GET['a']) ? $_GET['a'] : 0;
$Nom = isset($_GET['b']) ? $_GET['b'] : "NO Name";
$Prenom = isset($_GET['c']) ? $_GET['c'] : "No Family";
$Tel = isset($_GET['d']) ? $_GET['d'] : "No Phone";
$Email = isset($_GET['e']) ? $_GET['e'] : "No Email";
$Vehicule = isset($_GET['f']) ? $_GET['f'] : "No car";

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../../assets Dashboard/img Dashboard/favicon.png">
    <title>PDF Driver</title>
    <link href="../CSS/PDF.css" rel="stylesheet" />
    <link href="../CSS/PDF2.css" rel="stylesheet" />
</head>
<body >
        <div class="macarte">
            <header>
              <h1>Driver's Information</h1>
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
              <h3>Infromations</h3>
              <h4>First Name</h4>
              <p>
                <?php echo $Prenom ?>
              </p>
              <h4>Last Name</h4>
              <p>
                <?php echo $Nom ?>
              </p>
              <h4>Transport</h4>
              <p>
                <?php echo $Vehicule ?>
              </p>
              <hr />
              <h3>Contact</h3>
              <h4>Phone</h4>
              <p>
                <?php echo $Tel ?>
              </p>
              <h4>Email</h4>
              <p>
                <?php echo $Email ?>
              </p>
              <a href="../../Page_accueil.php">culturna<span>.com</span></a>
            </aside>
        </div>
        <div class="input-back" onclick="window.location.href='../../listChauffeur.php?val_id=<?php echo $valeur_id ?>';">Back</div>
        <div class="input-type-submit2">Telecharger</div>
</body>
    <script src="html2pdf.bundle.js"></script> 
    <script>
        var filename="<?php echo $Prenom."_".$Nom ?>"
        var btn2 = document.querySelector(".input-type-submit2");
        var element = document.querySelector(".macarte");
        btn2.onclick = () => {
            html2pdf().from(element).save(filename);
        };
    </script>
</html>
