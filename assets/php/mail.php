<?php

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

/* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */
if (mail($email,$subject,$message)) {
  $data = 'Success!';
  console.log(data);
} else {
  data = 'Sorry, something went wrong :(';
  console.log(data);
}
?>
