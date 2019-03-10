var db = firebase.firestore();
var CurrentAddress = document.getElementById("CurrentAddress");
var NumberPersonal = document.getElementById("NumberPersonal");
var Subject = document.getElementById("Subject");
var Complaint = document.getElementById("Complaint");
var status = "registered";

function complaint()
{
    var user = firebase.auth().currentUser;
    if (user != null) {
        var email = user.email;  
    }
    
    db.collection("complaint").doc().set({
    Email: email,
    CurrentAddress: CurrentAddress.value,
    NumberPersonal: NumberPersonal.value,
    subject: Subject.value,
    complaint: Complaint.value,
    status: "registered"
    })
    .then(function() {
        window.alert("complaint launched succesfully");
        window.location.href = "filecomplaint.html";
    })
    .catch(function(error) {
        window.alert("error");
    });

}