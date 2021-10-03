(function main() {
    "use strict"
    var database = firebase.database();
    var userIds = [0,1]

    function printout(msg="") {
        results.innerHTML += typeof msg.valueOf() == "object" ? JSON.stringify(msg) : msg;
    }

    for (var id of userIds) {
        
        firebase.database().ref('/' + id)
        .on("value", function(snapshot) {
            printout(snapshot.val())
        });
    }
    
    

    
})()

