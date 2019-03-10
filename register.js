function register()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('Password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(function (success){
        window.alert("Succesfully registered!");
        window.location.href = "home.html";
    })
    .catch(function(error){
        window.alert("Error");
    })
   
}
   



