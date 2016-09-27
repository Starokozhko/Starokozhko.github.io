 window.onload = function(){
 	'use strict';

 	search();




// slider Start
var arrowRight = document.getElementsByClassName('steps-block-arrow-right');

var arrowLeft = document.getElementsByClassName('steps-block-arrow-left');

for(var i = 0; i < arrowLeft.length ; i++) { // добавление события клик на все стрелки
	arrowRight[i].addEventListener('click', nextRight);
	arrowLeft[i].addEventListener('click', nextLeft);
}

function nextRight() { // переход к следующему слайду
	var blockContent = this.parentNode.parentNode.lastChild.previousElementSibling;

	var spansR = blockContent.getElementsByClassName('span-wrap');
	

	for(var i = 0; i < spansR.length; i++) {
		if(spansR[i].classList.contains('active')){
			spansR[i].classList.remove('active');
			
			var str = '';

			switch(i) { //  для изменения позиции спрайта
				case 0: str = '-300px 0'; 
				break;
				case 1: str = '-600px 0';
				break;
				case 2: str = '0 0';
				break;
			}
			blockContent.parentNode.style.backgroundPosition = str;

			if(i >= (spansR.length - 1)) {
				var q  = 0;
				spansR[q].classList.add('active');
				return;
			} else {


				var q = i + 1 ;
				spansR[q].classList.add('active');
				break;
			}
		}
	}
};

function nextLeft() { // переход к предыдущему слайду
	var blockContent = this.parentNode.parentNode.lastChild.previousElementSibling;

	var spansL = blockContent.getElementsByClassName('span-wrap');

	

	for(var i = 0; i < spansL.length; i++) {

		var str = '';

			switch(i) {  //  для изменения позиции спрайта
				case 0: str = '-600px 0'; 
				break;
				case 1: str = '0 0';
				break;
				case 2: str = '-300px 0';
				break;
			}
			blockContent.parentNode.style.backgroundPosition = str;
			

			if(spansL[i].classList.contains('active')){
				spansL[i].classList.remove('active');

				if(i == 0) {
					var q  = (spansL.length - 1);
					spansL[q].classList.add('active');
					return;
				} else {
					var q = i - 1 ;
					spansL[q].classList.add('active');
					break;
				}
			}
		}
	};
// slider END


// search 
function search(){

	var valArr = document.getElementById('serchVal');

	if (valArr != null) {
		var valSearch = valArr.value;

	} else {
		var valSearch = '';
	}

	function getXmlHttp(){
		var xmlhttp;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false;
			}
		}
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
			xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	}

	var xmlhttp = getXmlHttp();

				xmlhttp.open("POST", 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=70&q=' + valSearch, true); //q=' + valSearch
				xmlhttp.send('q=' + valSearch);
				xmlhttp.onreadystatechange = function() {
					
					if (xmlhttp.readyState == 4) {
						if(xmlhttp.status == 200) {
							var answerServ = JSON.parse(xmlhttp.responseText);
							var picture = {};

							for(var i = 0; i < answerServ.hits.length; i++) {
								var rand = Math.floor(Math.random() * (answerServ.hits.length - 1) + 1);

								document.getElementById('b' + (i +1 )).style.backgroundImage = "url('" + answerServ.hits[rand].webformatURL + "')";
								document.getElementById('b' + (i +1 )).childNodes[1].innerHTML = answerServ.hits[rand].tags;
								
							}	
						}
					}
				}

				// init Isotope
				var grid = document.querySelector('.grid');

				var msnry = new Masonry( grid, {
					itemSelector: '.grid-item',
					columnWidth: '.grid-item'
				});

				imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
			}

			document.getElementById('search').addEventListener('click', search);
// search END

};

