!localStorage && (l = location, p = l.pathname.replace(/(^..)(:)/, "$1$$"), (l.href = l.protocol + "//127.0.0.1" + p));

function Clear(bb) {
	if (bb == 1) {
		x1.value = "";
		x2.value = "";
		y1.value = "";
		y2.value = "";
	} else if (bb == 2) {
		a.value = "";
		b.value = "";
		c.value = "";
	} else if (bb == 3) {
		xx1.value = "";
		xx2.value = "";
		xx3.value = "";
		yy1.value = "";
		yy2.value = ""; 
		yy3.value = "";
	} else {
		equationA.value = "";
		equationB.value = "";
	}
}

function Solve() {
	linearO.style.border = "hotPink 4px double";
	linearO.style.backgroundColor = "lightBlue";

	var xdif = Number(x1.value) - Number(x2.value);
	var ydif = Number(y1.value) - Number(y2.value);
	var slope = ydif / xdif;
	var yint = Number(y1.value) - (Number(x1.value) * slope);

	if (isNaN(slope)) {
		alert("Error! \nInvalid Input!");
		var equation = "Invalid Input!";
	} else if (yint < 0) {
		var equation = "Y = " + slope + "X - " + yint*(-1);
	} else if (slope == "Infinity" || slope == "-Infinity") {
		var equation = "X = " + x1.value;
	} else if (yint == 0) {
		var equation = "Y = " + slope + "X";
	} else {
		var equation = "Y = " + slope + "X + " + yint;
	}

	var xsum = Number(x1.value) + Number(x2.value);
	var ysum = Number(y1.value) + Number(y2.value);
	var midpoint = "(" + xsum/2 + ", " + ysum/2 + ")";

	var distanceSquared = xdif*xdif + ydif*ydif;

	dis.innerHTML = "Distance: √" + distanceSquared + " or " + Math.sqrt(distanceSquared);
	SlopeInt.innerHTML = "Slope-Intercept Form: " + equation;
	mid.innerHTML = "Midpoint: " + midpoint;

	var pslope = "Y - " + y1.value + " = " + slope + "( X - " + x1.value + " )";
	SlopePoint.innerHTML = "Point-Slope Form: " + pslope;

	var stan = (x1.value - x2.value) + "Y + " + -1 * (y1.value - y2.value) + "X = " + Math.round(yint * (x1.value - x2.value), 3);
	Standard.innerHTML = "Standard Form: " + stan;
	
	var X1 = Number(x1.value);
	var Y1 = Number(y1.value);
	var polarA = equate(0,0,X1,Y1).distance;
	var angle1 = Math.atan(Y1/X1);
	angle1 = (angle1 * 360) / (2 * Math.PI);
	if (X1 < 0 && Y1 > 0) {
		angle1 += 90;
	} else if (X1 < 0 && Y1 < 0) {
		angle1 = 180 - angle1;
		angle1 *= -1;
	} else if (X1 > 0 && Y1 < 0) {
		angle1 *= -1;
	} else {}
	polar1.innerHTML = "Point A (θ, r) : (" + angle1 + ", " + polarA + ")"; 
	
	var polarB = [equate(0,0,Number(x2.value),Number(y2.value)).distance];
	var angle2 = Math.atan(Number(y2.value)/Number(x2.value));
	angle2 = (angle2 * 360) / (2 * Math.PI);
	polar2.innerHTML = "Point B (θ, r) : (" + angle2 + ", " + polarB + ")";
}

function Quad() {
	var A = Number(a.value);
	var B = Number(b.value);
	var C = Number(c.value);
	var Dif = ((B*B)-(4*A*C))/(4*A*A);
	var Los = (-1*B)/(2*A);
	var MM = ((4*A*C)-(B*B))/(4*A);

	if (A >= 0) {
		var MMT = "Min: ";
	}
	else {
		var MMT = "Max: ";
	}

	document.getElementById("Sym").innerHTML = "Line of Symmetry: X = " + String(Los);
	document.getElementById("Minmax").innerHTML = MMT + String(MM);
	document.getElementById("Vertex").innerHTML = "Vertex: (" + Los + ", " + MM + ")";

	if (Los == 0) {
		var SM = "";
	}
	else {
		var SM = Los + " ";
	}

	if (Dif != 0) {
		document.getElementById("Solution").innerHTML = "Solutions: " + SM + "± √" + Dif + " or " + (Number(SM) + Math.sqrt(Dif)) + " and " + (Number(SM) - Math.sqrt(Dif));
	}
	else {
		document.getElementById("Solution").innerHTML = "Solutions: " + Los;
	}

	if (Los < 0) {
		var VM = " + " + (-1*Los) + ")² ";
	} else if (Los == 0) {
		var VM = ")² ";
	}
	else {
		var VM = " - " + Los + ")² ";
	}

	if (A == 1) {
		var VA = "";
	}
	else {
		var VA = A;
	}

	document.getElementById("VForm").innerHTML = "Vertex Form: " + VA +"(X" + VM + " + " + MM;

	var Sol1 = Los + Math.sqrt(Dif);
	var Sol2 = Los - Math.sqrt(Dif);

	if (Sol1 == Sol2) {
		document.getElementById("FForm").innerHTML = "Factored Form: " + A + "(X + " + (-1*Sol1) + ")²";
	}
	else {
		document.getElementById("FForm").innerHTML = "Factored Form: " + A + "(X + " + (-1*Sol1) + ")(X + " + (-1*Sol2) + ")";
	}
	if (A == 0) {
		alert("Error! \nNot a quadratic function!")
	}

	answerContainer.style.border = "hotPink 4px double";
	answerContainer.style.backgroundColor = "lightBlue";
}

var count = 7;
var intv = setInterval(function() {if (count == 7) {
		smiley.style.color = "black";
		count = 1;
	} else if (count == 6){
		smiley.style.color = "orange";
		count++;
	} else if (count == 5){
		smiley.style.color = "pink";
		count++;
	} else if (count == 4){
		smiley.style.color = "green";
		count++;
	} else if (count == 3){
		smiley.style.color = "blue";
		count++;
	} else if (count == 2) {
		smiley.style.color = "indigo";
		count++;
	} else {
		smiley.style.color = "purple";
		count++;
	}
},800);

function EndLoop() {
	clearInterval(intv);
	smiley.style.display = "none";
}

function Triangle() {
	var x1 = Number(xx1.value);
	var x2 = Number(xx2.value);
	var x3 = Number(xx3.value);
	var y1 = Number(yy1.value);
	var y2 = Number(yy2.value);
	var y3 = Number(yy3.value);
	
	var perim = equate(x1,y1,x2,y2).distance + equate(x2,y2,x3,y3).distance + equate(x3,y3,x1,y1).distance;
	perimeter.innerHTML = "Perimeter: " + perim;
	
	var cenX = x1 + x2 + x3;
	var cenY = y1 + y2 + y3;
	centroid.innerHTML = "Centroid: (" + cenX/3 + ", " + cenY/3 + ")";
	
	var equationA = equate(Number(xx1.value),Number(yy1.value),Number(xx2.value),Number(yy2.value));
	var equationB = equate(Number(xx1.value),Number(yy1.value),Number(xx3.value),Number(yy3.value));
	equationA.slope = -1/equationA.slope;
	equationB.slope = -1/equationB.slope;
	equationA.yint = equationA.midpoint.y - (equationA.midpoint.x * equationA.slope);
	equationB.yint = equationB.midpoint.y - (equationB.midpoint.x * equationB.slope);
	var cCenter = functionIntercept(equationA,equationB);
	circumcenter.innerHTML = "Circumcenter: (" + cCenter[0] + ", " + cCenter[1] + ")"
	
	var baseEquation = equate(Number(xx1.value),Number(yy1.value),Number(xx2.value),Number(yy2.value));
	var altitudeEquation = equate(Number(xx1.value),Number(yy1.value),Number(xx2.value),Number(yy2.value));
	altitudeEquation.slope = -1/altitudeEquation.slope;
	altitudeEquation.yint = Number(yy3.value) - (Number(xx3.value) * altitudeEquation.slope);
	var intersect = functionIntercept(baseEquation,altitudeEquation);
	var altitude = equate(Number(xx3.value),Number(yy3.value),intersect[0],intersect[1])
	var Area = 0.5 * baseEquation.distance * altitude.distance;
	area.innerHTML = "Area: " + Area + " square units";
	
	triangleO.style.border = "hotPink 4px double";
	triangleO.style.backgroundColor = "lightBlue";
}

//Use localStorage to see how many times you have used this app
function addToCounter(numb) {
	var count = localStorage.getItem("counter"), ncount;
	if (count && count != "NaN") {
		ncount = Number(count) + numb;
		localStorage.setItem("counter", ncount);
	} else {
		localStorage.setItem("counter", numb);
		ncount = numb;
	}
	countDisplay.innerHTML = "You have used this tool " + ncount + " times.";
}

function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
  if (typeof(window.pageYOffset) == 'number') {
    //Netscape compliant
    scrOfY = window.pageYOffset;
  } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
  }
  return scrOfY;
}

function Color() {
	var height = 1048;
	var opacity = getScrollXY() / height;
	document.getElementById("topL").style.opacity = opacity;
}

function equate(x1,y1,x2,y2) {
	var midx = (x1+x2)/2;
	var midy = (y1+y2)/2;
	
	var slope = (y1-y2)/(x1-x2);
	var yint = y1 - x1*slope;
	
	var dxSquared = (x1 - x2) * (x1 - x2);
	var dySquared = (y1 - y2) * (y1 - y2); 
	var distance = Math.sqrt(dySquared + dxSquared);
	
	var result = new Object();
	result.midpoint = new Object();
	result.midpoint.x = midx;
	result.midpoint.y = midy;
	result.slope = slope;
	result.yint = yint;
	result.distance = distance;
	
	return result;
}

function functionIntercept(equationA,equationB) { //equationA and equationB are strings that represent linear functions.
	
}

function Intercept() {
	
}
window.onscroll = function() {Color()};

