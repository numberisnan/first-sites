var count4 = 0;
function Add4() {
var input = input4.value;
var para = document.createElement("h6");
var node = document.createTextNode(input);
para.appendChild(node);
var element = document.getElementById("pp4");
element.appendChild(para);
document.getElementsByTagName("h6")[count4].setAttribute("contenteditable","true");
//alert(count44);
count4++;
}