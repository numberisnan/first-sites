function Submit() {
var score = 0;
var name = nameIN.value;
if (name == "hisham" || name == "Hisham") {
	name = "Baha";
} else if (name == "hadiya" || name == "Hadiya") {
	name = "Ismael";
} else {
	}
Q1.style.backgroundColor = "rgb(255,60,60)";
Q2.style.backgroundColor = "rgb(255,60,60)";
Q3.style.backgroundColor = "rgb(255,60,60)";
Q4.style.backgroundColor = "rgb(255,60,60)";
Q5.style.backgroundColor = "rgb(255,60,60)";
Q6.style.backgroundColor = "rgb(255,60,60)";
Q7.style.backgroundColor = "rgb(255,60,60)";
Q8.style.backgroundColor = "rgb(255,60,60)";
Q9.style.backgroundColor = "rgb(255,60,60)";
Q10.style.backgroundColor = "rgb(255,60,60)";

Q1.style.color = "rgb(231,252,228)";
Q2.style.color = "rgb(231,252,228)";
Q3.style.color = "rgb(231,252,228)";
Q4.style.color = "rgb(231,252,228)";
Q5.style.color = "rgb(231,252,228)";
Q6.style.color = "rgb(231,252,228)";
Q7.style.color = "rgb(231,252,228)";
Q8.style.color = "rgb(231,252,228)";
Q9.style.color = "rgb(231,252,228)";
Q10.style.color = "rgb(231,252,228)";

Q1.style.borderColor = "rgb(255,60,60)";
Q2.style.borderColor = "rgb(255,60,60)";
Q3.style.borderColor = "rgb(255,60,60)";
Q4.style.borderColor = "rgb(255,60,60)";
Q5.style.borderColor = "rgb(255,60,60)";
Q6.style.borderColor = "rgb(255,60,60)";
Q7.style.borderColor = "rgb(255,60,60)";
Q8.style.borderColor = "rgb(255,60,60)";
Q9.style.borderColor = "rgb(255,60,60)";
Q10.style.borderColor = "rgb(255,60,60)";

Q1.disabled = "true";
Q2.disabled = "true";
Q3.disabled = "true";
Q4.disabled = "true";
Q5.disabled = "true";
Q6.disabled = "true";
Q7.disabled = "true";
Q8.disabled = "true";
Q9.disabled = "true";
Q10.disabled = "true";

if (Q1.value == "correct") {
	Q1.style.backgroundColor = "lawnGreen";
	Q1.style.borderColor = "lawnGreen";
	Q1.style.color = "rgb(255,255,170)";
	score++;
}
if (Q2.value == "correct") {
	Q2.style.backgroundColor = "lawnGreen";
	Q2.style.borderColor = "lawnGreen";
	Q2.style.color = "rgb(255,255,170)";
	score++;
}
if (Q3.value == "correct") {
	Q3.style.backgroundColor = "lawnGreen";
	Q3.style.borderColor = "lawnGreen";
	Q3.style.color = "rgb(255,255,170)";
	score++;
}
if (Q4.value == "correct") {
	Q4.style.backgroundColor = "lawnGreen";
	Q4.style.borderColor = "lawnGreen";
	Q4.style.color = "rgb(255,255,170)";
	score++;
}
if (Q5.value == "correct") {
	Q5.style.backgroundColor = "lawnGreen";
	Q5.style.borderColor = "lawnGreen";
	Q5.style.color = "rgb(255,255,170)";
	score++;
}
if (Q6.value == "correct") {
	Q6.style.backgroundColor = "lawnGreen";
	Q6.style.borderColor = "lawnGreen";
	Q6.style.color = "rgb(255,255,170)";
	score++;
}
if (Q7.value == "correct") {
	Q7.style.backgroundColor = "lawnGreen";
	Q7.style.borderColor = "lawnGreen";
	Q7.style.color = "rgb(255,255,170)";
	score++;
}
if (Q8.value == "correct") {
	Q8.style.backgroundColor = "lawnGreen";
	Q8.style.borderColor = "lawnGreen";
	Q8.style.color = "rgb(255,255,170)";
	score++;
}
if (Number(Q9.value) == document.getElementById("Q9A").innerHTML) {
	Q9.style.backgroundColor = "lawnGreen";
	Q9.style.borderColor = "lawnGreen";
	Q9.style.color = "rgb(255,255,170)";
	score++;
}
if (Q10.value == document.getElementById("Q10A1").innerHTML || Q10.value == document.getElementById("Q10A2").innerHTML) {
	Q10.style.backgroundColor = "lawnGreen";
	Q10.style.borderColor = "lawnGreen";
	Q10.style.color = "rgb(255,255,170)";
	score++;
}
document.getElementById("green").innerHTML = "Green means you have it right.";
document.getElementById("red").innerHTML = "Red means you have it wrong.";
alert(name + "'s results are:");
alert(score + "/10");
if (score == 10) {
	alert("You got everything right, " + name + "!");
} else if (score >= 5 && score <= 9) {
	alert("You're getting there, " + name + ".");
} else {
	alert("You failed, " + name + ".")
}
}