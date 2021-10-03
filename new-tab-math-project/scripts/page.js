(function main() {
	"use strict";
	
	var operation_class = {
		get level() { //level for given operation from localStroage
			return Number(localStorage.getItem("math_" + this.name)) || 1;
		},
		
		set level(val) {
			return (typeof val === "number") ? localStorage.setItem("math_" + this.name, val) : new Error("Not a number: " + val);
		}
	}
	
	var ops = function() { //Return all possible operations
		var o = {
			add: {
				operator: "+",
				name: "add"
			},
			sub: {
				operator: "-",
				name: "sub"
			},
			mul: {
				operator: "*",
				name: "mul"
			},
			div: {
				operator: "/",
				name: "div"
			}
		};
		
		for (var v of Object.keys(o)) {
			o[v].delegateTo(operation_class);
		}
		
		return o;
	};
	
	function randomNumber(digits) { //Crates a random number with specified digits
		var opsinst = ops();
		if (Number.isNaN( digits/1 )) {
			throw new Error("Parameter not a number: " + digits);
			return;
		}
		var a = []; //Store indv. numbers in array, then join them
		for (let i = 1; i <= digits; i++) {
			a.push(Math.floor(Math.random() * 10));
		}
		return Number(a.join(""));
	}
	
	function randomOperation() {
		var opsinst = ops();
		var operations = Object.keys(opsinst);
		var opkey = operations[Math.floor(Math.random() * operations.length)];
		return opsinst[opkey];
	}
	
	function randomQuestionGenerator(operation) { //Takes an operation object (with operator and name props) and makes a question object
		if (!operation || typeof operation !== "object") {
				throw new Error("Invalid operation object:" + operation);
				return;
			}
		
		return function randomQuestion() {
			var qnumbers, answer, question, level;
			
			level = operation.level;
			qnumbers = [randomNumber(level), randomNumber(level)];
			
			switch (operation.name) {
				case "add":
					answer = qnumbers[0] + qnumbers[1];
					break;
				case "sub":
					answer = qnumbers[0] - qnumbers[1];
					break;
				case "mul":
					answer = qnumbers[0] * qnumbers[1];
					break;
				case "div":
					answer =  qnumbers[0] % qnumbers[1];
					question = qnumbers[0] + " " + operation.operator + " " + qnumbers[1] + " = Remainder?"
					break;
			}
			
			return {
				question: question || qnumbers[0] + " " + operation.operator + " " + qnumbers[1] + " = ?",
				answer,
				operation,
				level
			}
		}
	}
	
	var gen = randomQuestionGenerator(randomOperation());
	
	function *questionLoop() {
		do {
			var res = gen();
			$( ".questionBox" )[0].innerHTML = res.question;
				
			if (Number(yield /*Pause generator untill answer is entered*/) == res.answer) { //If answer is right
				res.operation.level = res.level + 1;
				break;
			} else { //If answer is wrong
				res.operation.level = (res.level === 1) ? 1 : res.level - 1;
			}
		} while (true)
		
		//Once 'break' is used
		localStorage.setItem("math_question_answered", true);
		window.location.assign("http://127.0.0.1:8887/Todo%20List/");
		//$( ".questionBox" )[0].innerHTML = "<a href='http://127.0.0.1:8887/Todo%20List/' id='anchor'>Hooray!</a>"; 
		//$( "#anchor" )[0].click();
		return;
	}
	
	var questionIt = questionLoop();
	questionIt.next();
	$( ".answerBox" )[0].onkeydown = function handleInput(e) {
		if (e.keyCode == 13) {
			questionIt.next($( ".answerBox" )[0].value);
		}
	}
	
	localStorage.setItem("math_question_answered", false);
})()