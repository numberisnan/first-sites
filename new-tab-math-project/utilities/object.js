Object.prototype.merge = (typeof Object.prototype.merge === "function") ? Object.prototype.merge : function merge() { //Merges objects with manually assigned properties of obj onto this.
	var args = Array.from(arguments);
	for (obj of args) {
		for (p of Object.entries(obj)) {
			this[p[0]] = p[1];
		}
	}
	return this;
}

Object.prototype.delegateTo = function setDegelationLink(obj) {
	Object.setPrototypeOf(this,obj);
}