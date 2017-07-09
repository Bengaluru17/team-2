<?php
<!DOCTYPE html>
<html>
<style>
/* Full-width input fields */
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 4px 0;
    border: none;
    cursor: pointer;
    width: 50%;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.signupbtn,.cancelbtn {
    position:relative;
    float: 600px;
    width: 10%;
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
    .cancelbtn, .signupbtn {
       width: 100%;
    }
}
</style>
<body style="background:url(signupimage.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;background-size: cover;">
<h2 style="margin: 20 auto; text-align: center;color:white;fontsize: 60">REGISTER</h2>

<form action="/action_page.php" style="border:5px solid #ccc">
  <div class="container" style="margin: 0 auto; text-align: center;">
  <label style ="color:white;"><b>First Name</b></label>
  <input type="text" placeholder="First Name" name="name" style="width:150px;position:relative;left: 63px;" required><br/>
  <label style ="color:white;"><b>Last Name</b></label>
  <input type="text" placeholder="Last Name" name="email" style="width:150px;position:relative;left :63px;" required><br/>
  <label style ="color:white;"><b>Phone Number</b></label>
  <input type="text" placeholder="Phone Number" name="num" style="width:150px;position:relative; left :50px;"required><br/>
  <label style ="color:white;"><b>Education</b></label>
  <input type="text" placeholder="Education" name="e" style="width:150px;position:relative; left :65px;"required><br/>
  <label style ="color:white;"><b>Password </b></label>
  <input type="password" placeholder="Enter Password" name="psw" style="width:150px; position:relative; left :70px;"required><br/>
  <label style ="color:white;"><b>Repeat Password</b></label>
  <input type="password" placeholder="Repeat Password" name="psw-repeat" style="width:150px;position:relative; left :40px;"required><br/>
  <br>
  <label style ="color:white;"><b>Upload the image of the student</b></label>
  <input style ="color:white" type="file" name="pic" accept="image/*">
  <br>
</form>
<br/>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</body>
</html>
?>
