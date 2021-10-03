function letterFromSector(a, shift) { // Input is an array [sector1, sector2], where sector1 and sector2 are integers from 0 to 5 representing the clockwise turn from 12:00 on gamepad joysticks left and right respectivly, where 12:00 is 0, shift is whether to apply shift
	switch (a[0]) {
		case 5:
			var letters = ["w","e","d","s","a","q"];
			break;
		case 4:
			var letters = ["1","2","3","4","5","6"];
			break;
		case 3:
			var letters = ["z","x","c","v","b","n"];
			break;
		case 2:
			var letters = ["9","0","p","m","7","8"];
			break;
		case 1:
			var letters = ["i","o","l","k","j","u"];
			break;
		case 0:
			var letters = ["t","y","h","g","f","r"];
			break;
		case -1: // Stick is in the middle
			var letters = [,,,,,];
	}
	return letters[a[1]];
}

function sectorFromJoystick(stick, nullradius) {
	nullradius = (!nullradius && nullradius != 0) ? 0.4 : nullradius;
	var x = stick[0];
	var y = stick[1];
	var f1 = x * Math.tan(Math.PI/3);
	var f3 = x * -Math.tan(Math.PI/3);
	var f2 = 0;
	var f4 = Math.sqrt((nullradius * nullradius) - (x * x)) || 0;
	
	if (y > f4 || y < -f4) {
		if (y > f2) {
			if (y > f3) {
				return (y > f1) ? 3 : 2
			} else {
				return 4
			}
		} else {
			if (y < f3) {
				return (y < f1) ? 0 : 5
			} else {
				return 1
			}
		}
	} else {
		return -1
	}
}

window.addEventListener("gamepadconnected", gamepadconnected);
window.addEventListener("gamepaddisconnected", gamepaddisconnected);

var gamepadinterval, gamepadindex, gamepadletterstate, gamepadbuttonstate

function gamepadconnected(e) {
	if (e.gamepad.mapping == "standard") {
		var gp = e.gamepad;
		gamepadindex = (!gamepadindex && gamepadindex != 0) ? gp.index : gamepadindex;
		console.log("Gamepad connected at port " + gp.index);
		if (!gamepadinterval) {
			gamepadinterval = setInterval(controlLoop, 75);
		}
	}
}

function gamepaddisconnected(e) {
	if (e.gamepad.index == gamepadindex) {
		clearInterval(gamepadinterval);
		gamepadinterval = false;
		console.log("Gamepad disconnected at port " + e.gamepad.index);
	}
}

function controlLoop() {
	var gp = navigator.getGamepads()[gamepadindex];
	var stick1 = [gp.axes[0],gp.axes[1]];
	var stick2 = [gp.axes[2],gp.axes[3]];
	var buttons = gp.buttons;
	var sector1 = sectorFromJoystick(stick1);
	var sector2 = sectorFromJoystick(stick2);
	var sectors = [sector1,sector2];
	var letter = "";
	var lFS = letterFromSector(sectors);
	const numberShiftChars = [")","!","@","#","$","%","^","&","*","("]
	var shift = buttons[5].pressed === true;
	
	if (buttons[0].pressed) {
		letter = " ";
	} else if (buttons[1].pressed) {
		letter = "bkspc";
	} else if (buttons[3].pressed) {
		letter = shift ? ">" : "."
	} else if (buttons[14].pressed) {
		letter = shift ? "<" : ",";
	} else if (buttons[13].pressed) {
		letter = shift ? "?" : "/";
	} else if (buttons[12].pressed) {
		letter = shift ? ":" : ";";
	} else if (buttons[15].pressed) {
		letter = shift ? '"' : "'";
	}
	letter = letterFromSector(sectors) || letter;
	letter = (shift && letter.length == 1) ? letter.toUpperCase() : letter;
	letter = (!isNaN(letter) && shift && letter != "") ? numberShiftChars[Number(letter)] : letter;
	
	if (buttons[7].value > 0.5) {
		let txt = String(input.value);
		txt = txt.replace(/&gt;/g, ">");
		txt = txt.replace(/&lt;/g, "<");
		txt = txt.split("");
		txt[txt.length - 1] = "";
		txt = txt.join("");
		input.value = txt;
	} else if (letter != gamepadletterstate) {
		if (letter == "bkspc") {
			let txt = input.value;
			txt = txt.split("");
			txt[txt.length - 1] = "";
			txt = txt.join("");
			input.value = txt;
		} else {
			KeyEvent.simulate(letter.charCodeAt(0), undefined, undefined, input, 1);
		}
	}
	
	gamepadletterstate = letter;
	gamepadbuttonstate = buttons;
}
	
input.onkeypress = function(e) {
	this.value += (e.keyCode) ? String.fromCharCode(e.keyCode): "";
}