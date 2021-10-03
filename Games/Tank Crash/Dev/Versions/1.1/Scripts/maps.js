//Map width is 1060, height is 530
//Walls must be geater than game.playerx.tanks[x].width/2 to be detected by collision function
//In each map, [0] is reserved for the red wall and [1] is reserved for the blue wall

//w is wall array, l is non-wall lines array, b is background url, es is the querySelector query for the explosion audio element, m is message string, mC is message oordinates array, t is number of tanks per player, v is the normal velocity for each player, n is name of map, d is if killing the primary tank to win is disabled (boolean), cwfs is array of winning conditions (function), clfs is array of losing conditions (function), sf is a function to be called after setup of map
function Map(w, l, b, es, m, mC, t, v, n, d, cwfs, clfs, sf) {
	this.walls = w;
	this.lines = l;
	this.background = b;
	this.explosionSound = es;
	this.message = m;
	this.messageCoordinates = mC;
	this.tanksN = t;
	this.v = v; //pixels/frame * frames/second
	this.name = n;
	this.primaryTankDisabled = d;
	this.customWinFunctions = cwfs || [() => false, () => false];
	this.customLoseFunctions = clfs || [() => false, () => false];
	this.setupFunction = sf || (() => undefined);
}

const maps = {
	F: function() {
		return new Map([
			,
			,
			new Wall("grey", 500, 50, 15, 400),
			new Wall("grey", 500, 445, 250, 15),
			new Wall("grey", 500, 250, 150, 15)
		],
		[],
		"url('Graphics/grass.png')",
		"#es",
		"<p style='color: red'>araz</p>",
		[550,30],
		50,
		6*30,
		"F",
		false
		)
	},
	Nothing: function() {
		return new Map([
			,
			,
		],
		[],
		"url('Graphics/sand.png')",
		"#es",
		"<p style='color: green'>Fight!</p>",
		[450,220],
		50,
		6*30,
		"Nothing",
		false
		)
	},
	Boxy: function() {
		return new Map([
			new Wall(game.player1.color, 100, 255, 20, 20),
			new Wall(game.player2.color, 960, 255, 20, 20),
			new Wall("grey", 255, 100, 20, 330),
			new Wall("grey", 785, 100, 20, 330),
			new Wall("grey", 520, 60, 20, 155),
			new Wall("grey", 520, 315, 20, 155),
			new Wall("grey", 320, 450, 400, 20),
			new Wall("grey", 320, 60, 400, 20)
		],
		[],
		"url('Graphics/sand.png')",
		"#es",
		"<p style='color: red'>Capture the flag!</p>",
		[350, 200],
		50,
		6*30,
		"Boxy",
		false,
		)
	},
	Soccer: function() {
		return new Map([
			new Wall(game.player1.color, -30, 215, 40, 100),
			new Wall(game.player2.color, 1050, 215, 40, 100)
		],
		[
			new Line("white", 520, 0, 20, 530, 1),
			new Line("white", 480, 215, 100, 100, 1)
		],
		"url('Graphics/grass.png')",
		"#es",
		"<p style='color: red'>Soccer!</p>",
		[470,190],
		11,
		8*30,
		"Soccer",
		true
		)
	},
	DontTouch: function() {
		return new Map([
			,
			,
			new Wall("yellow", 330, 172, 400, 10),
			new Wall("yellow", 330, 353, 400, 10)
		],
		[],
		"url('Graphics/sand.png')",
		"#es",
		"<p style='color: hotPink;'>Don't touch anything!</p>",
		[50,50],
		50,
		6*30,
		"DontTouch",
		false
		)
	},
	Racetrack: function() {
		return new Map([
			,
			,
			new Wall("black", 200, 250, 660, 30),
		],
		[
			new Line("white", 520, 0, 20, 30, 0.7),
			new Line("white", 520, 60, 20, 30, 0.7),
			new Line("white", 520, 120, 20, 30, 0.7),
			new Line("white", 520, 180, 20, 30, 0.7),
			new Line("white", 520, 240, 20, 30, 0.7),
			
			new Line("black", 520, 30, 20, 30, 0.7),
			new Line("black", 520, 90, 20, 30, 0.7),
			new Line("black", 520, 150, 20, 30, 0.7),
			new Line("black", 520, 210, 20, 30, 0.7),
			
			new Line("black", 540, 0, 20, 30, 0.7),
			new Line("black", 540, 60, 20, 30, 0.7),
			new Line("black", 540, 120, 20, 30, 0.7),
			new Line("black", 540, 180, 20, 30, 0.7),
			new Line("black", 540, 240, 20, 30, 0.7),
			
			new Line("white", 540, 30, 20, 30, 0.7),
			new Line("white", 540, 90, 20, 30, 0.7),
			new Line("white", 540, 150, 20, 30, 0.7),
			new Line("white", 540, 210, 20, 30, 0.7),
			
			new Line("black", 500, 0, 20, 30, 0.7),
			new Line("black", 500, 60, 20, 30, 0.7),
			new Line("black", 500, 120, 20, 30, 0.7),
			new Line("black", 500, 180, 20, 30, 0.7),
			new Line("black", 500, 240, 20, 30, 0.7),
			
			new Line("white", 500, 30, 20, 30, 0.7),
			new Line("white", 500, 90, 20, 30, 0.7),
			new Line("white", 500, 150, 20, 30, 0.7),
			new Line("white", 500, 210, 20, 30, 0.7),
			
			new Line("gold", 100, 127.5, 10, 150, 1),
			new Line("gold", 230, 127.5, 150, 10, 1),
			new Line("gold", 600, 127.5, 150, 10, 1),
			new Line("gold", 850, 127.5, 100, 10, 1),
			new Line("gold", 850, 127.5, 100, 10, 1),
			new Line("gold", 940, 127.5, 10, 50, 1),
			new Line("gold", 940, 300, 10, 100, 1),
			new Line("gold", 890, 390, 50, 10, 1),
			new Line("gold", 660, 390, 150, 10, 1),
			new Line("gold", 430, 390, 150, 10, 1),
			new Line("gold", 100, 390, 200, 10, 1),
		],
		"grey",
		"#es",
		"<p style='color: black'>Race!</p>",
		[170,20],
		10,
		12*30,
		"Racetrack",
		false
		)
	},
	Castle: function() {
		return new Map([
			,
			,
			new Wall("lawnGreen", 1030, 150, 30, 30),
			new Wall("lawnGreen", 1000, 150, 30, 30),
			new Wall("lawnGreen", 970, 150, 30, 30),
			new Wall("lawnGreen", 940, 150, 30, 30),
			new Wall("lawnGreen", 910, 150, 30, 30),
			new Wall("lawnGreen", 810, 150, 30, 30),
			new Wall("lawnGreen", 810, 180, 30, 30),
			new Wall("lawnGreen", 810, 210, 30, 30),
			new Wall("lawnGreen", 810, 240, 30, 30),
			new Wall("lawnGreen", 810, 270, 30, 30),
			new Wall("lawnGreen", 810, 300, 30, 30),
			new Wall("lawnGreen", 810, 330, 30, 30),
			new Wall("lawnGreen", 910, 330, 30, 30),
			new Wall("lawnGreen", 940, 330, 30, 30),
			new Wall("lawnGreen", 970, 330, 30, 30),
			new Wall("lawnGreen", 1000, 330, 30, 30),
			new Wall("lawnGreen", 1030, 330, 30, 30),
			
			new Wall("lawnGreen", 0, 150, 30, 30),
			new Wall("lawnGreen", 30, 150, 30, 30),
			new Wall("lawnGreen", 60, 150, 30, 30),
			new Wall("lawnGreen", 90, 150, 30, 30),
			new Wall("lawnGreen", 120, 150, 30, 30),
			new Wall("lawnGreen", 220, 150, 30, 30),
			new Wall("lawnGreen", 220, 180, 30, 30),
			new Wall("lawnGreen", 220, 210, 30, 30),
			new Wall("lawnGreen", 220, 240, 30, 30),
			new Wall("lawnGreen", 220, 270, 30, 30),
			new Wall("lawnGreen", 220, 300, 30, 30),
			new Wall("lawnGreen", 220, 330, 30, 30),
			new Wall("lawnGreen", 120, 330, 30, 30),
			new Wall("lawnGreen", 90, 330, 30, 30),
			new Wall("lawnGreen", 60, 330, 30, 30),
			new Wall("lawnGreen", 30, 330, 30, 30),
			new Wall("lawnGreen", 0, 330, 30, 30),
			
		],
		[
			
		],
		"url('Graphics/grass.png')",
		"#es",
		"<p style='color: hotPink'>Storm the Castle!</p>",
		[380,200],
		60,
		4*30,
		"Castle",
		false
		)
	},
	DontMove: function() {
		return new Map([
			,
			,
		],
		[],
		"url('Graphics/sand.png')",
		"#es",
		"<p style='color: black; font-size: 150px;'>Don't Move!</p>",
		[200,100],
		50,
		6*30,
		"DontMove",
		false,
		false,
		[
			(tank, t) => (tank.v != 0),
			(tank, t) => (tank.v != 0)
		],
		function() {
			var round = Number(game.round);
			setTimeout(function() {
				if (round == game.round) {
				game.primaryTankDisabled = false;
				
				delete game.player1.tanks[0];
				delete game.player2.tanks[0];
				
				game.checkForGameEnd();
				}
			}, 10000);
		}
		)
	},
	applyMap: function(i) {
		i = i || Math.floor(Math.random() * maps.functionalMapList.length);
		var map = new maps.functionalMapList[i]() || new maps.functionalMapList[Math.floor(Math.random() * maps.functionalMapList.length)]();
		gameFrame.style.background = map.background;
		document.querySelector(".messageFrame").innerHTML = map.message;
		document.querySelector(".messageFrame").style.left = map.messageCoordinates[0] + "px";
		document.querySelector(".messageFrame").style.bottom = map.messageCoordinates[1] + "px";
		
		game.player1.n = map.tanksN;
		game.player2.n = map.tanksN;
		game.player1.v = map.v;
		game.player2.v = map.v;
		game.walls = map.walls;
		game.primaryTankDisabled = map.primaryTankDisabled;
		game.es = document.querySelector(map.explosionSound);
		game.player1.customLoseFunction = map.customLoseFunctions[0];
		game.player2.customLoseFunction = map.customLoseFunctions[1];
		game.player1.customWinFunction = map.customWinFunctions[0];
		game.player2.customWinFunction = map.customWinFunctions[1];
		game.setupFunction = map.setupFunction;
		
		for (l in map.lines) {
			var e = document.createElement("DIV");
			var line = map.lines[l];
			e.style.left = line.x1 + "px";
			e.style.bottom = line.y1 + "px";
			e.style.width = line.width + "px";
			e.style.height = line.height + "px";
			e.style.background = line.color;
			e.style.opacity = line.opacity;
			e.className = "line";
			e.id = "line" + l;
			document.getElementById("gameFrame").appendChild(e);
		}
		
		for (w in game.walls) {
			var e = document.createElement("DIV");
			var wall = game.walls[w];
			e.style.left = wall.x1 + "px";
			e.style.bottom = wall.y1 + "px";
			e.style.width = wall.width + "px";
			e.style.height = wall.height + "px";
			e.style.background = wall.color;
			e.className = "wall";
			e.id = "wall" + w;
			e.setAttribute("background", wall.color);
			document.getElementById("gameFrame").appendChild(e);
		}
	}
}

//Array of usable maps for the game
maps.functionalMapList = [maps.F, maps.Boxy, maps.Nothing, maps.Soccer, maps.DontTouch, maps.Racetrack, maps.Castle, maps.DontMove];
