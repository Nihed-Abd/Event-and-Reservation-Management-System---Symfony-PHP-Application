<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '../Mailing/Exception.php';
require_once '../Mailing/PHPMailer.php';
require_once '../Mailing/SMTP.php';

$mail = new PHPMailer(true);
$alert = '';

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Vérification que l'image a bien été envoyée
    if(isset($_FILES['image_data']) && $_FILES['image_data']['error'] == 0){
        $image_data = file_get_contents($_FILES['image_data']['tmp_name']);
        $image_data = base64_encode($image_data);
        $image_type = $_FILES['image_data']['type'];
    } else {
        $image_data = '';
        $image_type = '';
    }

    try {
        $mail->isSMTP();
        $mail->Host= 'smtp.gmail.com';
        $mail->SMTPAuth= true;
       $mail->Username= 'culturnaskap@gmail.com';
        $mail->Password= 'fxprdansjjbnbyzc';
        $mail->SMTPSecure= PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port= 587;

        $mail->setFrom('culturnacop@gmail.com', 'Nom du site'); 
        $mail->addAddress($email); 

        $mail->Subject = 'Message Received (Contact Page)';
        $mail->Body = '<h3>Name : '.$name.'<br>Email : '.$email.'<br>Message : '.$message.'</h3>';

        // Ajout de l'image en pièce jointe
        if(!empty($image_data)){
            $mail->addStringAttachment(base64_decode($image_data), 'image.png', 'base64', $image_type);
        }

        $mail->IsHTML(true);

        $mail->send();
        $alert = 'Message envoyé avec succès !';

    } catch (Exception $e) {
        $alert = 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Formulaire de Contact</title>
</head>
<body>
    <h1>Contactez-nous</h1>
    <?php if($alert != ''): ?>
    <div><?php echo $alert ?></div>
    <?php endif; ?>
    <form method="post" action="" enctype="multipart/form-data">
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message :</label>
        <textarea id="message" name="message" required></textarea>

        <label for="image_data">Image :</label>
        <input type="file" name="image_data">

        <input type="submit" name="submit" value="Envoyer">
    </form>