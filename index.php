<!doctype html>
<?php session_start();?>
<html>
<head>


</head>
<body>
<input type="button" id="b1" value="Write" onclick=writeUserData(1,"Apoorva","abc@gmail.com","");></input>
<input type="button" id="b2" value="Read" onclick=readUserData();></input>
 <input type="file" name="fileToUpload" id="fileToUpload">
 <input type="button" id="b3" value="Upload Image" onclick=abc();></input>
 <img src="" height="200" alt="Image preview...">
<div id="idImage" ></div>
</body>

<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>

	function abc()
	{
		//var a=document.getElementById("fileToUpload");
		 var preview = document.querySelector('img');
		 var file = document.querySelector('input[type=file]').files[0];
		var fr= new FileReader();
		
		//alert(fr.result);
		fr.addEventListener("load", function () {
		preview.src = fr.result;
		}, false);
		fr.readAsDataURL(file);
	
	}
	function ret()
	{
		return document.getElementById("fileToUpload").value;
	}
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
  
  function writeUserData(userId, name, email, imageUrl,im) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
  
  var request = new XMLHttpRequest();

	request.open('POST', 'https://api.kairos.com/enroll');

	request.setRequestHeader('Content-Type', 'application/json');
	request.setRequestHeader('app_id', 'db8ca6b5');
	request.setRequestHeader('app_key', 'ee5299aad61dff8cab254df485a6de2b');

	request.onreadystatechange = function () {
	if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
	}
};

var body = {
  'image': "http://media.kairos.com/kairos-elizabeth.jpg",
  'subject_id': '1',
  'gallery_name': 'MyGallery2'
};

request.send(JSON.stringify(body));
}

function readUserData()
{
	var reference = firebase.database().ref('users/' + '1');
	reference.on('value', function(snapshot) {
	var pic = snapshot.val().profile_picture;
	
//kairos
   var request = new XMLHttpRequest();
	var accept;
	request.open('POST', 'https://api.kairos.com/verify');

	request.setRequestHeader('Content-Type', 'application/json');
	request.setRequestHeader('app_id', 'db8ca6b5');
	request.setRequestHeader('app_key', 'ee5299aad61dff8cab254df485a6de2b');

	request.onreadystatechange = function () {
	if (this.readyState === 4) {
	//accept[0]=$.parseJSON(this.responseText);
	alert($.parseJSON(this.responseText));
    console.log('Status:', this.statusText);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
	}
};

var body = {
  'image': "http://2.bp.blogspot.com/-YdXmeVkbbRg/TcmT4q3nIxI/AAAAAAAAC8Y/zO1eNeDONpg/s1600/tumblr_lkojzzHVcX1qzffago1_500.png",
  'gallery_name': 'MyGallery2',
  'subject_id': '1'
};

request.send(JSON.stringify(body));

});

}

</script>

</html>