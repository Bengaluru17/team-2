<!doctype html>
<?php session_start();
header('Access-Control-Allow-Origin: *');?>
<html>
<head>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
var key= new Array();
	var value= new Array();
	var x=0;
function reading()
{
	
var config = {
    apiKey: "AIzaSyBAHmBwap-v7Vk11gDm94yzu8OVneyotQ8",
    authDomain: "amoghweb.firebaseapp.com",
    databaseURL: "https://amoghweb.firebaseio.com",
    storageBucket: "gs://amoghweb.appspot.com/",
    messagingSenderId: "516595991998",
  };
  firebase.initializeApp(config);	
  
var storageRef = firebase.storage().ref();

// Points to 'images'
//var imagesRef = storageRef.child('images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = 'Basic_1.json';
var spaceRef = storageRef.child(fileName);

spaceRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for file

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'application/json';
  xhr.onreadystatechange = function(event) {
	if(this.readyState == 4 && this.status==200)
	{
    var blobs = JSON.stringify(this.responseText);
	alert(blobs);
	var st="";
	
	var quotes='\\';
	var flag=0;
	
	for(i=0; i<blobs.length; i++)
	{
		if(blobs[i]!='"' && blobs[i]!='\\' && blobs[i]!='{' && blobs[i]!='}' && blobs[i]!=',')
			{
			st=st+blobs[i];
			}
		else{
		
			if(flag==0)//key found
			{
				if(st!="")
				{
				key[x]=st;
				st="";
				flag=1;
				
				alert(key[x]);
				}
			}
			else
			{
				if(st!="")
				{
			value[x++]=st;
				st="";
				flag=0;
				
				alert(value[x-1]);
				}
			}
		}
			
	}
	
				
	});
	}
	}
  };
  xhr.open('GET', url);
  xhr.send();
}).catch(function(error) {
  // Handle any errors
});

var fileName = 'Basic_1.png';
var spaceRef = storageRef.child(fileName);

spaceRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for file

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'application/text';
  xhr.onreadystatechange = function(event) {
	if(this.readyState == 4 && this.status==200)
	{
    var blobs = this.responseText;
		
	}
  };
  xhr.open('GET', url);
  xhr.send();
}).catch(function(error) {
  // Handle any errors
});

//matching


}
$(document).ready(function(){
for(i=0;i<x;i++)
	{
		if(i==0)
		{
		$('#onezero').change(function() {
			var val= document.getElementById(onezero).value;
			var l= val.length;
			if(value[i].substr(0,l)==val)
			{
				
			}
			else
				alert("wrong entry");
		}
		}
		if(i==1)
		{
		$('#oneone').change(function() {
			var val= document.getElementById(oneone).value;
			var l= val.length;
			if(value[i].substr(0,l)==val)
			{
				
			}
			else
				alert("wrong entry");
		}
		}
	}
});
		

</script>

</head>
<body>
<input type="button" id="b" value="click" onclick="reading();"></input>
<img src="Basic_1.png" id="ids" width="300px"></img>
<input type="text" id="zerozero" value="Name"></input>
<input type="text" id="zeroone" value="Age"></input>
<input type="text" id="twozero"></input>
<input type="text" id="twoone"></input>
</body>
</html>