// JavaScript Document
/*
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkzAFEA1hiyy14Lj7xR1tny10YLOX1j9o",
    authDomain: "onlineff-8a7ba.firebaseapp.com",
    databaseURL: "https://onlineff-8a7ba.firebaseio.com",
    projectId: "onlineff-8a7ba",
    storageBucket: "onlineff-8a7ba.appspot.com",
    messagingSenderId: "1020504494297",
    appId: "1:1020504494297:web:d0ca15c09594d7862ceec8",
    measurementId: "G-7DW7WR1766"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
	
	var database = firebase.database();
	
/*
	function checkParty(){
		var input = document.getElementById("partyID").value;
		var rootRef = FirebaseDatabase.getInstance().getReference();
		rootRef.addListenerForSingleValueEvent(new ValueEventListener() {
		   @Override
		   void onDataChange(DataSnapshot snapshot){
			
				if (snapshot.child.getValue() != input){
					console.log("not entered")
				} else{
					console.log("entered")
				}
			}
	   })
	}
	

	function writeData(){
		var partyID = document.getElementById("partyID").value;
		database.ref("/").push({
			partyID: partyID
		});
		getData();
	}

function exists(id){
	
}

	
	function getData(){
		database.ref('/').on('value', function(snapshot){
			snapshot.forEach(function(childSnapshot){
				var childKey = childSnapshot.key;
				var childData = childSnapshot.val();
				document.getElementById("data").innerHTML = childData['partyID'];
		})						
									
		})
	}

*/
//NON FIREBASE
var days = 0;
var titles = [];

function submitDays(){
	days = document.getElementById("days").value;
	document.getElementById("entDays").innerHTML = days+ " days"
}

function submitTitle(){
	title = document.getElementById("names").value
	titles.push(title);
	document.getElementById("films").innerHTML += "<p>"+title+"</p>"
}





