firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    windows.alert(user);
  } else {
    // No user is signed in.
  }
});