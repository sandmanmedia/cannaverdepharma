<?php
$name = $_POST['name'];
$email = $_POST['email'];

$mailto = 'paul.robertson@quantumllp.com';
$subject = 'Subscriber';
$message = "New subscriber's information:" . "\n\n" .
'______________________________________________________' . "\n\n" .
'Name: ' . $name . "\n\n" .
'Email: ' . $email . "\n\n" .
'______________________________________________________' . "\n\n";

$result = mail($mailto, $subject, $message);
$text = '';

if ($result) {
	$text = "You have been successfully subscribed!";
} else {
	$text = "Sorry, Something Went Wrong: Please try again.";
}

header('Location: index.html');
exit();

?>