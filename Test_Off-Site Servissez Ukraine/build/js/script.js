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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kU2VhcmNoKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcHJlc3NlbnRlcik7XHJcblxyXG5mdW5jdGlvbiBwcmVzc2VudGVyKGV2ZW50KSB7XHJcblx0aWYoZXZlbnQua2V5Q29kZSA9PSAxMykgc2VuZFNlYXJjaCAoKTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblx0ZnVuY3Rpb24gc2VuZFNlYXJjaCAoKSB7XHJcblx0XHR2YXIgZW50ZXJlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZTtcclxuXHRcdGlmKGVudGVyZWRUZXh0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVudGVyZWRUZXh0KTtcclxuXHRcdFx0YWxlcnQoJ1lvdSBoYXZlIHNlbnQgYSB0ZXh0OiBcIicgKyBlbnRlcmVkVGV4dCArICdcIicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZSA9ICcnO1xyXG5cdFx0fSByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59OyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
