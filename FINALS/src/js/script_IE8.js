search();
// init Isotope
// var grid = document.querySelector('.grid');

// var msnry = new Masonry( grid, {
// 	itemSelector: '.grid-item',
// 	columnWidth: '.grid-item'
// });

// imagesLoaded( grid ).on( 'progress', function() {
//   // layout Masonry after each image loads
//   msnry.layout();
// });


// slider Start
var arrowRight = document.querySelectorAll('steps-block-arrow-right');

var arrowLeft = document.querySelectorAll('steps-block-arrow-left');

for(var i = 0; i < arrowLeft.length ; i++) { // добавление события клик на все стрелки
	arrowRight[i].addEventListener('click', nextRight);
	arrowLeft[i].addEventListener('click', nextLeft);
}

function nextRight() { // переход к следующему слайду
	var blockContent = this.parentNode.parentNode.lastChild.previousElementSibling;

	var spansR = blockContent.querySelectorAll('span-wrap');
	

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

	var spansL = blockContent.querySelectorAll('span-wrap');

	

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
	console.log('OK!!');
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

crossDomainAjax('http://www.somecrossdomaincall.com/?blah=123', function (data) {
    alert('Yes');
});

function crossDomainAjax (url, successCallback) {

    // IE8 & 9 only Cross domain JSON GET request
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('GET', 'http://anywhere.com/request', true);

xhr.onload = function() {
  alert( this.responseText );
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send(); 
};

//     // IE7 and lower can't do cross domain
//     else if (navigator.userAgent.indexOf('MSIE') != -1 &&
//              parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
//        return false;
//     }    


		// var xdr = new XDomainRequest();
		// // // var xmlhttp = getXmlHttp();

		// xdr.open("POST", 'https://api.riffsy.com/v1/search?tag=<query>&key=LIVDSRZULELA', true);
		// 		// xmlhttp.open("POST", 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=7&q=' + valSearch, true); //q=' + valSearch
		// xdr.send('tag=' + valSearch);
		// 		// xmlhttp.send('q=' + valSearch);
		// xdr.onload = function() { alert("READY"); };
		// 		xmlhttp.onreadystatechange = function() {

		// 			if (xmlhttp.readyState == 4) {
		// 				if(xmlhttp.status == 200) {
		// 					var answerServ = JSON.parse(xmlhttp.responseText);
		// 					var picture = {};
		// 						// console.log(answerServ.hits);
		// 						for(var i = 0; i < answerServ.hits.length; i++) {

		// 							document.getElementById('b' + (i +1 )).style.backgroundImage = "url('" + answerServ.hits[i].webformatURL + "')";
		// 							document.getElementById('b' + (i +1 )).childNodes[1].innerHTML = answerServ.hits[i].tags;

		// 						}	
		// 					}
		// 				}
		// 			}


				};
// };

				document.getElementById('search').attachEvent('onclick', search);