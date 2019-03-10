function login()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)

     .then(function (success){
        window.alert("success");
        window.location.href = "filecomplaint.html";
    })
    .catch(function(error){
        window.alert("error");
    })
   
}