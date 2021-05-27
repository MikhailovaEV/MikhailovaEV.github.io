<?php

$username		= isset($_POST['username']) && $_POST['username'] != ''			? htmlspecialchars(trim(strip_tags($_POST['username'])), ENT_QUOTES)	: false;
$useremail		= isset($_POST['useremail']) && $_POST['useremail'] != ''		? htmlspecialchars(trim(strip_tags($_POST['useremail'])), ENT_QUOTES)	: false;
$userphone		= isset($_POST['userphone']) && $_POST['userphone'] != ''		? htmlspecialchars(trim(strip_tags($_POST['userphone'])), ENT_QUOTES)	: false;
$commenttext	= isset($_POST['commenttext']) && $_POST['commenttext'] != ''	? htmlspecialchars(trim(strip_tags($_POST['commenttext'])), ENT_QUOTES)	: false;

if( !$useremail || !$commenttext ) {
	echo '5';
	exit;
}

if ( $useremail && !preg_match ('/[\.a-z0-9_\-]+[@][a-z0-9_\-]+([.][a-z0-9_\-]+)+[a-z]{1,4}/i', $useremail)) {
	echo '5';
	exit;
}

$subject = "С формы контактов"; 

$message = '<p>Имя: ' . $username . '</p>';
$message .= '<p>E-mail: ' . $useremail . '</p>';
$message .= '<p>Телефон: ' . $userphone . '</p>';
$message .= '<p>Сообщение: ' . $commenttext . '</p>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Резюме <snip@h5p.ru>\r\n";

if( mail("E_Mikhailova@inbox.ru.ru", $subject, $message, $headers) ) {
	echo '1';
	exit;
} else {
	echo '2';
	exit;
}


?>