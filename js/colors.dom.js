const addBtn = document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const errorMessage = document.querySelector(".error");

function clearError() {
	setTimeout(function(){
		errorMessage.innerHTML = "";
	}, 2000);
}

addBtn.addEventListener("click", function(){

	errorMessage.innerHTML = "Add!"
	clearError();
	// alert("add!")
});

filterBtn.addEventListener("click", function(){
	errorMessage.innerHTML = "Filter!"
	clearError();
});


