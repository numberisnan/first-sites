!localStorage && (l = location, p = l.pathname.replace(/(^..)(:)/, "$1$$"), (l.href = l.protocol + "//127.0.0.1" + p));

var count = localStorage.getItem("count")

if (count == null) {
	count = 0;
} else {
	count = Number(count);
}

function addName() {
	if (Name.value == "") {
		alert("Not a valid name!");
	} else if (Name.value.toLowerCase() == "hisham") {
		alert("Name lacking a large amount of IQ!");
	} else {
		localStorage.setItem("name", Name.value);
		displayName();
	}
}

function displayName() {
	if (localStorage.getItem("name") != null) {
		darkBackground.style.display = "none";
		nameForm.style.display = "none";
		header.innerHTML = localStorage.getItem("name") + "'s Todo List";
	}
}

function resetName() {
	Name.value = localStorage.getItem("name");
	localStorage.removeItem("name");
	darkBackground.style.display = "block";
	nameForm.style.display = "block";
}

function clearListForm() {
	darkBackground.style.display = "none";
	listForm.style.display = "none";
}

function displayTodoList() {
	for (var i = 1; i <= count; i++) {
		var event_x = localStorage.getItem("event" + i);
		if (event_x != null) {
			var element = document.createElement("P");
			var t = document.createTextNode(event_x);
			element.appendChild(t);
			listContainer.appendChild(element);
			element.id = "event" + i;
			element.onclick = function() { 
				var ans = confirm("Are you sure you are done with this?");
				if (ans == true) {
					//this.style.display = "none";
					listContainer.removeChild(this);
					localStorage.removeItem(this.id);
				}
				if (listContainer.childElementCount == 0) {
					var element = document.createElement("IMG");
					listContainer.appendChild(element);
					element.src = "Images/smiley.png";
					element = document.createElement("P");
					var t = document.createTextNode("You have no tasks waiting!");
					element.appendChild(t);
					listContainer.appendChild(element);
				}
			}
		}
	}
	if (listContainer.childElementCount == 0) {
		var element = document.createElement("IMG");
		listContainer.appendChild(element);
		element.src = "Images/smiley.png";
		element = document.createElement("P");
		var t = document.createTextNode("You have no tasks waiting!");
		element.appendChild(t);
		listContainer.appendChild(element);
	}
}

function updateList() {
	var newEvent = newListItem.value;
	if (newEvent != "" && newEvent != " ") {
		var p = count + 1;
		localStorage.setItem("count", p);
		count++;
		localStorage.setItem("event" + p, newEvent);
		clearListForm();
		listContainer.innerHTML = "";
		displayTodoList();
	} else {
		alert("Not a valid task name!");
		clearListForm();
	}
}

function makeVisible(object,display) {
	object.style.display = display || "block";
	//Learn what the name of the array args are stored in is called
}

function makeInvisible(object) {
	object.style.display = "none";
}

displayTodoList();
displayName();

//var childElements = listContainer.childElementCount;
if (listContainer.childElementCount === 1) {
	popup.innerHTML = "Welcome back! You have 1 task waiting.";
} else if (listContainer.firstChild.nextSibling.nextSibling.innerHTML === "You have no tasks waiting!") {
	popup.innerHTML = "Hi! Click the 'Add to List' button to get started.";
} else {
	popup.innerHTML = "Welcome back! You have " + listContainer.childElementCount + " tasks waiting.";
}