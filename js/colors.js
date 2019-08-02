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

	// function filter(filterParams) {
	// 	return [ 
	// 		{color: 'blue', number: 7},
	// 		{color: 'blue', number: 8} 
	// 	]
	// }

	// function filter(filterParams) {
	// 	// return [ 
	// 	// 	{color: 'yellow', number: 3},
    //     //     {color: 'yellow', number: 6} 
	// 	// ]
	// 	const filterColor = filterParams.color;
	// 	const filteredShapes = [];
	// 	//Loop over all shapes
	// 	for(let i = 0; i < shapes.length; i++) {
	// 		let currentShape = shapes[i];
	// 		//check if the current shape has a color we are looking for
	// 		if(currentShape.color === filterColor) {
	// 			filteredShapes.push(currentShape);
	// 		}
	// 	}

	// 	return filteredShapes;

	// }

	function filter(filterParams) {
		// return [ 
		// 	{color: 'yellow', number: 3},
        //     {color: 'yellow', number: 6} 
		// ]
		const filterColor = filterParams.color;
		const filterNumber = filterParams.number;

		const filteredShapes = [];
		//Loop over all shapes
		if(filterColor !== undefined && filterNumber !== undefined) {
			for(let i = 0; i < shapes.length; i++) {
				let currentShape = shapes[i];
				//check if the current shape has a color we are looking for
				if(currentShape.color === filterColor && currentShape.number === filterNumber) {
					filteredShapes.push(currentShape);
				}
			}

		} else if(filterColor !== undefined) {
			for(let i = 0; i < shapes.length; i++) {
				let currentShape = shapes[i];
				//check if the current shape has a color we are looking for
				if(currentShape.color === filterColor) {
					filteredShapes.push(currentShape);
				}
			}
		} else if(filterNumber !== undefined) {
			for(let i = 0; i < shapes.length; i++) {
				let currentShape = shapes[i];
				//check if the current shape has a color we are looking for
				if(currentShape.number === filterNumber) {
					filteredShapes.push(currentShape);
				}
			}
		} 

		return filteredShapes;

	}
	
	

	return {
		addShape,
		getShapes,
		filter
	}
}