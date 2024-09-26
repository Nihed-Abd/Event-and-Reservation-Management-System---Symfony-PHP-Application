<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once '../Mailing/Exception.php';
require_once '../Mailing/PHPMailer.php';
require_once '../Mailing/SMTP.php';

$mail = new PHPMailer(true);
$alert = '';

if(isset($_POST['submit'])) {
    $name = $_POST['name']; echo $name;
    $email = $_POST['email']; echo "<br>".$email;
    $message = $_POST['message'];echo "<br>".$message."<br>";

    try {
        $mail->isSMTP();
        $mail->Host= 'smtp.gmail.com';
        $mail->SMTPAuth= true;
        $mail->Username= 'culturnaskap@gmail.com';
        $mail->Password= 'fxprdansjjbnbyzc';
        $mail->SMTPSecure= PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port= 587;

        $mail->setFrom('culturnaskap@gmail.com' , ); 
        $mail->addAddress($email); 

        $mail->Subject = 'Message Received (Contact Page)';
        $mail->Body = '<h3>Name : '.$name.'<br>Email : '.$email.'<br>Message : '.$message.'</h3>';
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
    <script src="./send_email.js"></script>
</head>
<body>
    <h1>Contactez-nous</h1>
    <?php if($alert != ''): ?>
    <div><?php echo $alert ?></div>
    <?php endif; ?>
    <form method="post" action="">
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message :</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" name="submit" value="Envoyer">
    </form>

    <!-- Validation du formulaire avant l'envoi -->
    <script>
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
                alert("L'email n'est pas valide");
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
    </script>
</body>
</html>
