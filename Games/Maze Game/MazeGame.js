Input.setAttribute("onkeydown","Move(event)");

function Move(event) {

Input.setAttribute("onkeydown","");

if (event.keyCode == 38){
player.style.top = (Number(player.style.top) - 1) + "px";
setTimeout(function(){Input.setAttribute("onkeydown","Move(event)"), 1000})
}
}