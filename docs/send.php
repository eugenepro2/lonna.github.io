<?php 

$name       =   htmlspecialchars($_POST['name'], ENT_QUOTES);
$phone      =   htmlspecialchars($_POST['phone'], ENT_QUOTES);
$email      =   htmlspecialchars($_POST['email'], ENT_QUOTES);
$form__name =   htmlspecialchars($_POST['form__name'], ENT_QUOTES);
$email_to   = 'kabyr2@yandex.ru';
$headers    = "From: no-reply@lonna.ru";

if ($form__name == 'Обратный звонок') {
	$subject   = "Заказ обратного звонка";

	$message  = "Имя:    $name\r\nТелефон:  $phone\r\nE-mail:  $email\r\n";
	mail($email_to, $subject, $message, $headers);
}

if ($form__name == 'Попробовать бесплатно') {
	$subject   = "Попробовать бесплатно";

	$message  = "Имя:    $name\r\nТелефон:  $phone\r\nE-mail:  $email\r\n";
	mail($email_to, $subject, $message, $headers);
}

if ($form__name == 'Lite') {
	$subject   = "Пакет Lite";

	$message  = "Имя:    $name\r\nТелефон:  $phone\r\nE-mail:  $email\r\n";
	mail($email_to, $subject, $message, $headers);
}

if ($form__name == 'Bussines') {
	$subject   = "Пакет Bussines";

	$message  = "Имя:    $name\r\nТелефон:  $phone\r\nE-mail:  $email\r\n";
	mail($email_to, $subject, $message, $headers);
}

if ($form__name == 'Pro') {
	$subject   = "Пакет Pro";

	$message  = "Имя:    $name\r\nТелефон:  $phone\r\nE-mail:  $email\r\n";
	mail($email_to, $subject, $message, $headers);
}
?>