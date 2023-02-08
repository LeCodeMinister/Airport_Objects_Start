const Plane = require("./Plane");
const Bag = require("./Bag");

class Airport {
	constructor(name) {
		this.name = name
		this.planes = Array()
	}

	addPlane(plane) {
		this.planes.push(plane);
	}
}

module.exports = Airport