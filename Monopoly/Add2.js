var count2 = 0;
function Add2() {
var input = input2.value;
var para = document.createElement("h4");
var node = document.createTextNode(input);
para.appendChild(node);
var element = document.getElementById("pp2");
element.appendChild(para);
document.getElementsByTagName("h4")[count2].setAttribute("contenteditable","true");
//alert(count2);
count2++;
}