function Cp1() {
var chng = prompt("Change by what?", "Enter");
var balance = document.getElementById("m1").innerHTML;
var nbalance = Number(balance) + Number(chng);
if (nbalance > 0) {
document.getElementById("m1").innerHTML = nbalance;
alert("Player 1 now has $" + nbalance);
}
}

function Cp2() {
var chng = prompt("Change by what?", "Enter");
var balance = document.getElementById("m2").innerHTML;
var nbalance = Number(balance) + Number(chng);
if (nbalance > 0) {
document.getElementById("m2").innerHTML = nbalance;
alert("Player 2 now has $" + nbalance);
}
}

function Cp3() {
var chng = prompt("Change by what?", "Enter");
var balance = document.getElementById("m3").innerHTML;
var nbalance = Number(balance) + Number(chng);
if (nbalance > 0) {
document.getElementById("m3").innerHTML = nbalance;
alert("Player 3 now has $" + nbalance);
}
}

function Cp4() {
var chng = prompt("Change by what?", "Enter");
var balance = document.getElementById("m4").innerHTML;
var nbalance = Number(balance) + Number(chng);
if (nbalance > 0) {
document.getElementById("m4").innerHTML = nbalance;
alert("Player 4 now has $" + nbalance);
}
}