//Add loopAudio() to all HTMLAudioElements
HTMLAudioElement.prototype.loopAudio = function(p) {
	this.currentTime = p;
	this.play();
	this.onended = function() {
		this.currentTime = p * 1000 || 0;
		this.play();
	}
}

HTMLAudioElement.prototype.cancelLoopAudio = function() {
	this.onended = function() {}
}