var list = document.querySelector("#list");

var db = firebase.firestore();
var subject;

db.collection("complaint").onSnapshot(function(querySnapshot) {
    snapshot.docChanges().forEach(function(change) {
         if (change.type === "added") {
               list.innerHTML += "<div class='list-item'><h3>" + change.data().subject + "</h3><p>Complaint: " + change.data().complaint + "</p></div>"
            }
        
    });
});
    
    // db.collection("cities").where("state", "==", "CA")
    // .onSnapshot(function(snapshot) {
       
    //         if (change.type === "added") {
    //             console.log("New city: ", change.doc.data());
    //         }
    //         if (change.type === "modified") {
    //             console.log("Modified city: ", change.doc.data());
    //         }
    //         if (change.type === "removed") {
    //             console.log("Removed city: ", change.doc.data());
    //         }
    //     });
    // });