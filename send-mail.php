<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@mufasasafaris.com";  
    $subject = "New Contact Form Submission";

    // Sanitize form inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subjectInput = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Build the email body
    $body = "You received a new message from the website contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subjectInput\n\n";
    $body .= "Message:\n$message";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Sorry, something went wrong.";
    }
}
?>

