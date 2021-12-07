<?php
// VERIFY CAPTCHA

$error = "";

//Site Secret Key --- 

$secret = "6Lct80odAAAAAC7ViyUD7fEoVcwCj-Z6-1MwHp-z"; 

//Making API Call to the reCaptcha Server.
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST["g-recaptcha-response"];

$verify = json_decode(file_get_contents($url));


//Send Email of reCaptcha if valid.
if ($verify->success) {
  $to = "halahinfo@halahaz.us";
  $Subject = "Contact Form";
  $fromEmail = "halahinfo@halahaz.us";
  $emailBody = "From Data\n\n";
  
  //collect the submitted form in the email body class.

foreach($_POST as $k =>$v){
  $emailBody.= $k. "=" . $v. "\n";
  if($k !="g-recaptcha-response"){ $body .= "$k : $v\r/n";}
 
}
if (!mail($to,$Subject,$emailBody)){
  $error = "Failed to send email";
}

}else { 
  
  $error = "Invalid captcha, Please check the box";
}

