//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBa74d_U52xY2E1upoDekQUp1P9tDn2W-Y",
      authDomain: "kwitter-project-app.firebaseapp.com",
      databaseURL: "https://kwitter-project-app-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-app",
      storageBucket: "kwitter-project-app.appspot.com",
      messagingSenderId: "741046735788",
      appId: "1:741046735788:web:5835770990b37fa95fe009",
      measurementId: "G-DN6SQR3Q5B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
function addroom(){
 room_name=document.getElementById("room_name").value;
 localStorage.setItem("roomnamekey",room_name);
 firebase.database().ref("/").child(room_name).update({purpose:"addroomname"});
 window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log(Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomname(this.id)' >#"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function RedirectToRoomname(name){
      console.log(name);
      localStorage.setItem("roomnamekey",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("usernamekey");
      localStorage.removeItem("roomnamekey");
      window.location="index.html";
}