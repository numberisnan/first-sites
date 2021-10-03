var time, gameEnd, score;

var correct = document.getElementById("correct");
var lose = document.getElementById("lose");
var gameplay = document.getElementById("gameplay");
var win = document.getElementById("win");
var incorrect = document.getElementById("incorrect");
correct.volume = 0.3;
incorrect.volume = 0.3;

var html = document.getElementsByTagName("HTML")[0];

function StartTimer() {
document.getElementById("gameArea").removeEventListener("click", StartTimer);
html.setAttribute("onkeypress","Input(event)");

gameplay.play();
FirstLetter();
timer.innerHTML = "30";
score = 0;

var interval = setInterval(function() {
time--;
timer.innerHTML = time;
if (time < 0) {
	clearInterval(interval);
	gameplay.pause();
	gameplay.currentTime = 0;
	gameEnd = true;
	ResetGame();
	UpdateHS();
}}, 1000)
}

function Input(event) {
	
	if (gameEnd == false) {

		if (String.fromCharCode(event.which || event.keyCode).toUpperCase() == gameFrame.innerHTML) {
			score++;
			sco.innerHTML = score;
			correct.pause();
			correct.currentTime = 0;
			correct.play();
		} else {
			score--;
			sco.innerHTML = score;
			incorrect.pause();
			incorrect.currentTime = 0;
			incorrect.play();
		}
		
	letter = Math.floor(Math.random() * (122-97)) + 97;
	var letterS = String.fromCharCode(letter);
	gameFrame.innerHTML = letterS.toUpperCase();
	}

}

var count = 1;

function FirstLetter() {
a = Math.floor(Math.random() * (122-97)) + 97;
var b = String.fromCharCode(a);
gameFrame.innerHTML = b.toUpperCase();
sco.innerHTML = "0";
}

function ResetGame() {
document.getElementById("gameArea").addEventListener("click", StartTimer);
timer.innerHTML = '↑ Click Above! ↑';
gameFrame.innerHTML = "Click!";
html.setAttribute("onkeypress","");
gameEnd = false;
time = 30;
}

function UpdateHS() {
	if (Number(GetCookie("highScore")) < score) {
		SetCookie("highScore", score, 10000);
		hsco.innerHTML = "Highscore: " + sco.innerHTML + ", click to reset";
		win.play();
		alert("Yo bro, you made a highscore!");
		//Launch highscore form
	} else {
		lose.play();
	}
}

var interv = setInterval(function() {
	if (count == 7) {
		timer.style.color = "red";
		count = 1;
	} else if (count == 6){
		timer.style.color = "orange";
		count++;
	} else if (count == 5){
		timer.style.color = "yellow";
		count++;
	} else if (count == 4){
		timer.style.color = "green";
		count++;
	} else if (count == 3){
		timer.style.color = "blue";
		count++;
	} else if (count == 2) {
		timer.style.color = "indigo";
		count++;
	} else {
		timer.style.color = "purple";
		count++;
	}
},800);

function makeVisible(object, display) {
	if (display) {
		object.style.display = display;
	} else {
		object.style.display = "deafult";
	}
}