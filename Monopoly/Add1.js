var count1 = 0;
function Add1() {
var input = input1.value;
var para = document.createElement("h3");
var node = document.createTextNode(input);
para.appendChild(node);
var element = document.getElementById("pp1");
element.appendChild(para);
document.getElementsByTagName("h3")[count1].setAttribute("contenteditable","true");
//alert(count1);
count1++;
}