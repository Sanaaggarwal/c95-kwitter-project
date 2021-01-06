//YOUR FIREBASE LINKS
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
    
 user_name=localStorage.getItem("usernamekey");
 room_name=localStorage.getItem("roomnamekey");

 function send(){
       var msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
       name:user_name,message:msg,like:0
       });
       document.getElementById("msg").value="";
 }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data["name"];
message=message_data["message"];
likes=message_data["like"];
name1_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h3 class='message_h4'>"+message+"</h3>";
like_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelikes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+likes+"</span></button><hr>";
row=name1_tag+message_tag+like_tag+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updatelikes(message_id){
console.log(message_id);
button_id=message_id;
newlikes=document.getElementById(button_id).value;
update_like=Number(newlikes)+1;
console.log(update_like);
firebase.database().ref(room_name).child(message_id).update({
      like:update_like
});
}
function logout(){
      localStorage.removeItem("usernamekey");
      localStorage.removeItem("roomnamekey");
      window.location="index.html";
}