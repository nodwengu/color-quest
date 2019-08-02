const addBtn = document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const errorMessage = document.querySelector(".error");
const shapes = document.querySelector('.shapes');
const selectColor = document.querySelector('.selectColor');
const selectNumber = document.querySelector('.selectNumber');

function clearError() {
	setTimeout(function(){
		errorMessage.innerHTML = "";
	}, 2000);
}

addBtn.addEventListener("click", function(){
	let currentColor = selectColor.value
	let currentNumber = selectNumber.value;

	let newShape = document.createElement('div');
	let newNumber = document.createElement('div');

	if(currentColor === "" || currentNumber === "") {
		errorMessage.innerHTML = "color and number selection required";
		clearError();
		return;
	}

	newNumber.innerHTML = currentNumber;
	newNumber.classList.add("number");

	newShape.classList.add("shape");
	newShape.classList.add("square");
	newShape.classList.add(currentColor);

	shapes.appendChild(newShape);
	newShape.appendChild(newNumber);

	// errorMessage.innerHTML = "Add!"
	// clearError();
	// alert("add!")
});

filterBtn.addEventListener("click", function(){
	// errorMessage.innerHTML = "Filter!"
	// clearError();

	const theShapes = document.querySelectorAll('.shape');
	const currentSelectedColor = selectColor.value;

	//Hide all
	for(let i = 0; i < theShapes.length; i++) {
		let currentShape = theShapes[i];
		currentShape.classList.remove('hidden');
	}

	if(currentSelectedColor !== "") {
		for(let i = 0; i < theShapes.length; i++) {
			let currentShape = theShapes[i];
			//Check if my current shape is the that is selected
			if(!currentShape.classList.contains(currentSelectedColor)) {
				currentShape.classList.add('hidden');
			}
		}
	}
	
});


