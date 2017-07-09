<!doctype html>
<?php session_start();?>
<html>
<head>
	<link type="text/css" rel="stylesheet" href="index.css"/>
	<script type="text/javascript" src="jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="index.js"></script>
	<script>
	function log(){
			jQuery.ajax({
			type: "POST",
			url: 'index.php',
			data: {func:'1'},
			success:function(data)
			{
				location.reload();
			}
		});
	}
	</script>
</head>
<body>
	
	<div id="dia">Signup Successfull</div>
	<div id="logo">
	<img src="logo.png" width="50px" height="50px"/>
		<a href="index.php">Study Archive</a>
	</div>
	<div id="topPart">
		<a href="index.php"><div id="home">Home</div></a>
		<a href="#About Us"><div id="about">About Us</div></a>
		<a href="#Contact"><div id="contact">Contact</div></a>
		<?php
		if(isset($_SESSION['login']) && ($_SESSION['login']!=3))
		{
			$_SESSION['login']='2';
			?>
		<a href="second.php"><div id="dashboard">Dashboard</div></a>
		<?php
		}
		?>
		<?php
		if(isset($_SESSION['login']) && ($_SESSION['login']==3))
		{
			$_SESSION['login']='2';
			?>
		<a href="admin.php"><div id="dashboard">News</div></a>
		<?php
		}
		?>
		<?php
		if(isset($_SESSION['login']))
		{
			?>
		<a href="index.php"><div id="logout" onclick=log();>Logout</div></a>
		<?php
		}
		?>
		
	</div>
	<?php
	$item_no = $_REQUEST['item_number'];
	$item_transaction = $_REQUEST['tx']; // Paypal transaction ID
	$item_price = $_REQUEST['amt']; // Paypal received amount
	$item_currency = $_REQUEST['cc']; // Paypal received currency type
 
	$price1 = '8.00';
	$price2 = '5.00';
	$currency='USD';
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = '';
	$db='studyarchive';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($db);
	if(! $conn ) {
	die('Could not connect: ' . mysql_error());
	}
	
	//Rechecking the product price and currency details
	if($item_price==$price1 && $item_no== '1' && $item_currency==$currency)
	{
			echo"<script>
			$(document).ready(function(){
			document.getElementById('dia').innerHTML='Yearly Subscription Successfull';
			$('#dia').fadeIn(2000);
			$('#dia').fadeOut(3000);
			});
			</script>";
			$_SESSION['time']=time();
			$sql = "UPDATE signup SET Member=1 , TimeOfMembership='".$_SESSION['time']."' WHERE E_mail='".$_SESSION['email']."'";  //1 for yearly    
			$retval = mysql_query( $sql, $conn );
			$_SESSION['member']=1;
			
			
	}
	else if($item_price==$price2 && $item_no== '2' && $item_currency==$currency)
	{
			echo"<script>
			$(document).ready(function(){
			document.getElementById('dia').innerHTML='Half-Yearly Subscription Done';
			$('#dia').fadeIn(2000);
			$('#dia').fadeOut(3000);
			});
			</script>";
			$_SESSION['time']=time();
			$sql = "UPDATE signup SET Member=2, TimeOfMembership='".$_SESSION['time']."' WHERE E_mail='".$_SESSION['email']."'";   //2 for half yearly
			$retval = mysql_query( $sql, $conn );
			$_SESSION['member']=2;
	}
	else
	{
			echo"<script>
			$(document).ready(function(){
			document.getElementById('dia').innerHTML='Transaction UnSuccessfull';
			$('#dia').fadeIn(2000);
			$('#dia').fadeOut(3000);
			});
			</script>";
	}
	?>
	
	</body>
	</html>