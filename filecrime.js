var db = firebase.firestore();
var City = document.getElementById("City");
var Address = document.getElementById("Address");
var Crime = document.getElementById("Crime");
var CrimeDetails = document.getElementById("CrimeDetails");
var file = document.getElementById("file");
var status = "registered"

$("#file").on("change", function(event){
        selectedflie = event.target.files[0];
    });

 function upload()
 {
    var filename = selectedflie.name;
    var storageRef = firebase.storage().ref('/crimephotos/' + filename);
    var uploadtask = storageRef.put(selectedflie).then(function(snapshot) {
        window.alert('Uploaded a blob or file!');
        storageRef.getDownloadURL().then(function(url){
        urlimage = url;
    });
    
    });
    
 }


function filecrime()
{
    
   
    var user = firebase.auth().currentUser;
    if (user != null) {
        var email = user.email;  
    }

    
    db.collection("crime").doc().set({
    Email:email,
    City: City.value,
    Address: Address.value,
    Crime:Crime.value,
    CrimeDetails: CrimeDetails.value,
    status: "registered",
    picture:urlimage  
    })
    .then(function() {
        window.alert("crime succesfully registered");
        window.location.href = "filecrime.html";
    })
    .catch(function(error) {
        window.alert("error");
    });

}