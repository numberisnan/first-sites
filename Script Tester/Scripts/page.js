var p1 = $.get("text1.txt").promise();
var p2 = $.get("text2.txt").promise();

Promise.all([p1,p2])
.then(function(dataset) {
	$("#output")[0].innerHTML = dataset[0] + "<br>" + dataset[1];
	return $.get("truck.txt").promise()
})
.then(function(data) {
	$("#output")[0].innerHTML += "<br>" + data;
})