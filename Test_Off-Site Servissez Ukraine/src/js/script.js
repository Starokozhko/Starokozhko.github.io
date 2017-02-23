window.onload = function(){
	'use strict';

	document.getElementById("search-button").addEventListener('click', sendSearch);
	document.getElementById("search-input").addEventListener('keydown', pressenter);

function pressenter(event) {
	if(event.keyCode == 13) sendSearch ();
	return false;
}

	function sendSearch () {
		var enteredText = document.getElementById("search-input").value;
		if(enteredText) {
			console.log(enteredText);
			alert('You have sent a text: "' + enteredText + '"');
			document.getElementById("search-input").value = '';
		} return false;
	}
};