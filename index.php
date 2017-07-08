<!doctype html>
<?php session_start();?>
<html>
<head>


</head>
<body>
<input type="button" id="b1" value="Write" onclick=writeUserData(1,"Apoorva","abc@gmail.com","https://drive.google.com/open?id=0B1qWO1qIxVrFOEVIWU1CSTlyeGM");></input>
<input type="button" id="b2" value="Read" onclick=readUserData();></input>
</body>

<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBAHmBwap-v7Vk11gDm94yzu8OVneyotQ8",
    authDomain: "amoghweb.firebaseapp.com",
    databaseURL: "https://amoghweb.firebaseio.com",
    projectId: "amoghweb",
    storageBucket: "",
    messagingSenderId: "516595991998"
  };
  firebase.initializeApp(config);
  
  
  var database= firebase.database();
  
  function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function readUserData()
{
	var reference = firebase.database().ref('users/' + '1');
	reference.on('value', function(snapshot) {
	var pic = snapshot.val().profile_picture;
	alert(pic);
});
  
}

</script>
</html>