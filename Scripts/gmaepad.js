var gamepadfps = 1;

function simulateKeyboardEvent(e,kC,object) {
  var event = new KeyboardEvent(e, {
    keyCode: kC,
  });
  var cb = object; 
  var cancelled = !cb.dispatchEvent(event);
  return cancelled;
}

function pollGamepads(n) {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (gp && gp.mapping === "standard") {
		if (gamepads.length >= n) {
			clearInterval(pgp);
		}
		alert("Gamepad connected!");
		setInterval(function() {
			console.log(i);
			console.log(checkGamepad(i));
		}, 1000/gamepadfps)
    }
  }
}

function checkGamepad(gp) {
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	if (gp) {
		return gamepads[gp];
	} else {
		return gamepads;
	}
}

var pgp = setInterval(() => pollGamepads(1), 500);