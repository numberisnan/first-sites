// ==UserScript==
// @name         Paint
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Paint app epic
// @author       Me
// @match       *://*/*
// @grant        none
// ==/UserScript==

//Functions
function color(event) {
	var x = event.clientX;
	var y = event.clientY;
	context.beginPath();
	context.arc(x,y,6,0,Math.PI*2,false);
	context.fill();
	context.closePath();
}

//Function variables
var app = {
	on: false,
	brush: {
		on: false,
	},
};

//One-time code
var div = document.createElement("DIV");
div.id = "paintapp";
div.style.display = "none";
div.style.zIndex = "1000";
div.style.position = "absolute";
document.querySelector("html").appendChild(div);

var canvaselement = document.createElement("CANVAS");
canvaselement.id = "box";
canvaselement.style = "background-color: rgba(0,0,0,0); position: fixed; top: 0; left: 0; right: 0; bottom: 0;";
div.appendChild(canvaselement);

var canvas = document.getElementById("box");
var context = canvas.getContext('2d');
context.fillStyle = "rgba(0,0,0)";

var toolbar = document.createElement("DIV");
toolbar.id = "toolbar";
toolbar.style = "position: fixed; top: 0; left: 0; right: 0; height: 4%; background-color: red; opacity: 0.6; transition: opacity 0.5s; text-align: center; font-size: 20px; color: white;";

var node = document.createTextNode("Color: ");
toolbar.appendChild(node);
div.appendChild(toolbar);

var input = document.createElement("INPUT");
input.type = "color";
input.style.borderWidth = "0";
input.style.borderRadius = "5px";
input.style.backgroundColor = "red";
input.value = "#808080";
input.style.width = "3%";
toolbar.appendChild(input);

box.height = 2000;
box.width = 2000;

//Events
canvaselement.onclick = function() {
	if (app.brush.on == false) {
		canvaselement.onmousemove = function(event) {
			color(event);
		};
		app.brush.on = true;
	} else {
		canvaselement.onmousemove = function() {};
		app.brush.on = false;
	}
	context.fillStyle = input.value;
};

document.onkeydown = function(event) {
	if (event.keyCode == 113) {
		box.height++;
		bok.height--;
	} else if (event.keyCode == 115) {
		if (app.on == false) {
			paintapp.style.display = "block";
			app.on = true;
		} else {
			paintapp.style.display = "none";
			app.on = false;
		}
	}
};

toolbar.onmouseover = function() {
	toolbar.style.opacity = "1";
};

toolbar.onmouseout = function() {
	toolbar.style.opacity = "0.6";
};

input.oninput = function() {
	context.fillStyle = input.value;
};