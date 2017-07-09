<?php define('DB_HOST', 'localhost');
 define('DB_NAME', 'practice');
 define('DB_USER','root');
 define('DB_PASSWORD','');
 
 $con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD)
 or die("Failed to connect to MySQL: " . mysql_error());
 $db=mysql_select_db(DB_NAME,$con)
 or die("Failed to connect to MySQL: " . mysql_error());
 function NewUser()
 { $First Name = $_POST['name'];
 $Last Name =$_POST['email'];
 $Education = $_POST['e'];
 $Phone Number = $_POST['num'];
 $Password = $_POST['psw'];
 $Repeat Password =$_POST('psw-repeat');
 
 $query = "INSERT INTO websiteusers (name,email,e,num,psw,psw-repeat) VALUES ('$Frist Name','$Last Name','$Education','$Education','$Password',$Repeat Password)"; 
 $data = mysql_query ($query)or die(mysql_error()); 
 if($data) 
 { echo "YOUR REGISTRATION IS COMPLETED..."; } }
 function SignUp() { if(!empty($_POST['user'])) 
 //checking the 'user' name which is from Sign-Up.html, is it empty or have some text
 { $query = mysql_query("SELECT * FROM websiteusers WHERE userName = '$_POST[user]' AND pass = '$_POST[pass]'") 
 or 
 die(mysql_error()); 
 if(!$row = mysql_fetch_array($query)
 or die(mysql_error())) { newuser(); } 
 else { echo "SORRY...YOU ARE ALREADY REGISTERED USER..."; } 
 }
 }
 if(isset($_POST['submit'])) { SignUp(); }
 ?> 

