$(document).ready(function() {
	var leftUIEl = $('.carousel-arrow-left'),
			rightUIEl = $('.carousel-arrow-right'),
			elementList = $('.carousel-list');

	var	pixelsOffset = 125,
			currentLeftValue = 0,
			elementsCount = elementList.find('li').length,
			minimumOffset = - ((elementsCount - 5) * pixelsOffset),
			maximumOffset = 0;
	
	leftUIEl.click(function() {
		if(currentLeftValue != maximumOffset) {
			currentLeftValue += 125;
			elementList.animate({ left : currentLeftValue + "px"}, 500);
			
		}		
	});
	
	rightUIEl.click(function() {
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 125;
			elementList.animate({ left : currentLeftValue + "px"}, 500);
			
		}
	});
});