function Redirect() {
	var searchQ = SearchInput.value;
	var url = "http://www.google.com/search?q=" + SearchInput.value.split(" ").join("+");
	console.log(searchQ);
	window.location.assign(url);
}
