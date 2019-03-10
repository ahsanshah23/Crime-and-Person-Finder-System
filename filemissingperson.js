var db = firebase.firestore();
var CurrentAddress = document.getElementById("CurrentAddress");
var VictimName = document.getElementById("VictimName");
var Relation = document.getElementById("Relation");
var NumberPersonal = document.getElementById("NumberPersonal");
var City = document.getElementById("City");
var Gender = document.getElementById("Gender");
var lastseen = document.getElementById("lastseen");
var VictimAddress = document.getElementById("VictimAddress");
var fileupload = document.getElementById("fileupload");
var user = firebase.auth().currentUser;
var status= "registered";

$("#file").on("change", function(event){
    selectedflie = event.target.files[0];
});

function upload()
{
    var filename = selectedflie.name;
    var storageRef = firebase.storage().ref('/missingpersonphotos/' + filename);
    var uploadtask = storageRef.put(selectedflie).then(function(snapshot) {
    window.alert('Uploaded a blob or file!');
    storageRef.getDownloadURL().then(function(url){
    urlimage = url;
    });
    
    });
    
}
    
function missingperson()
{
    var user = firebase.auth().currentUser;
    if (user != null) {
        var email = user.email;  
    }
    
    
   
    db.collection("missingperson").doc().set({
    Email:email,
    CurrentAddress: CurrentAddress.value,
    Relation: Relation.value,
    NumberPersonal: NumberPersonal.value,
    VictimName:VictimName.value,
    City: City.value,
    Gender: Gender.value,
    lastseen: lastseen.value,
    VictimAddress: VictimAddress.value,
    status: "registered",
     picture:urlimage  
    })
    .then(function() {
        window.alert("missing person succesfully registered");
        window.location.href = "filemissingperson.html";
    })
    .catch(function(error) {
        window.alert("error");
    });

}