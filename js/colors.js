function ColorQuestManager() {
	const shapes = []; 

	function addShape(color, number) {
		const shape = {
			color,
			number
		};
		shapes.push(shape)
	}

	function getShapes() {
		return shapes
	}
	

	return {
		addShape,
		getShapes,
	}
}