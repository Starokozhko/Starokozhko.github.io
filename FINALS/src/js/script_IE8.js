(function(){
// search();


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

for(var i = 1; i <= 3; i++) {
	var strRequest = 'r' + i;
	var strRequest2 = 'l' + i;
	var arrowRight = document.getElementById(strRequest);

	var arrowLeft = document.getElementById(strRequest2);

	arrowRight.attachEvent('onclick', nextRight);
	arrowLeft.attachEvent('onclick', nextLeft);

}


function nextRight(event) { // переход к следующему слайду
	// for(var key in e) { console.log(key);}
	event = event || fixEvent.call(this, window.event);
	event.currentTarget = this;
	event.target = event.srcElement;

	var blockContent = event.target.parentNode.parentNode.lastChild;


	for(var i = 1; i < blockContent.children.length; i++) {


		var str = '';

				switch(i) { //  для изменения позиции спрайта
					case 1: str = '-300px 0'; 
					break;
					case 2: str = '-600px 0';
					break;
					case 3: str = '0 0';
					break;
				}

				blockContent.parentElement.style.backgroundPosition = str;


				if(blockContent.children[i].className == 'span-wrap active'){

					if(i == (blockContent.children.length - 1)){
						blockContent.children[i].className = 'span-wrap';
						var w = 1;

						blockContent.children[w].className = 'span-wrap active';	
						break;
					}
					blockContent.children[i].className = 'span-wrap';

					var w = + i + 1;

					blockContent.children[w].className = 'span-wrap active';

					break;
				}
			}
		};

function nextLeft(event) { // переход к предыдущему слайду
	event = event || fixEvent.call(this, window.event);
	event.currentTarget = this;
	event.target = event.srcElement;

	var blockContent = event.target.parentNode.parentNode.lastChild;

	for(var i = 1; i < blockContent.children.length; i++) {
	// var spansR = blockContent.children[i];

	var str = '';

				switch(i) {  //  для изменения позиции спрайта
					case 1: str = '-600px 0'; 
					break;
					case 2: str = '0 0';
					break;
					case 3: str = '-300px 0';
					break;
				}

				blockContent.parentElement.style.backgroundPosition = str;


				if(blockContent.children[i].className == 'span-wrap active'){
					if(i == 1 ){ 

						blockContent.children[i].className = 'span-wrap';
						var w = (blockContent.children.length - 1);
						blockContent.children[w].className = 'span-wrap active';	
						break;
					}

					blockContent.children[i].className = 'span-wrap';
					var w = + i - 1;
					blockContent.children[w].className = 'span-wrap active';

					break;
				}
			}
		};
// slider END


// search 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function search(){
	console.log('OK!!');
	var valArr = document.getElementById('serchVal');

	if (valArr != null) {
		var valSearch = valArr.value;

	} else {
		var valSearch = '';
	}


// **********
// var $searchText = $('#searchText').val();

// 		$.ajax({
// 			url: 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=7&q=' + $searchText,
// 			dataType: "jsonp",
// 			success: function(data) {
// 				// var htmlText = $("#templite").html();
// 				// $('.result').html(tmpl(htmlText, data));

// 				for(var key in data.hits[0]) { console.log(key);}
// 				console.log(data);

// 			}

// 		});
// *******END*******




		// function getXmlHttp(){
		// 	var xmlhttp;
		// 	try {
		// 		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		// 	} catch (e) {
		// 		try {
		// 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		// 		} catch (E) {
		// 			xmlhttp = false;
		// 		}
		// 	}
		// 	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		// 		xmlhttp = new XMLHttpRequest();
		// 	}
		// 	return xmlhttp;
		// }

		// crossDomainAjax('https://api.riffsy.com/v1/search?tag=<query>&key=LIVDSRZULELA', function (data) {
		// 	alert('Yes');
		// });

// 		function crossDomainAjax (url, successCallback) {


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    // IE8 & 9 only Cross domain JSON GET request
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();
    // for(var key in xhr) { console.log(key);}
    // console.log(xhr);
// 				// (2) запрос на другой домен :)
			xhr.onload = function() {
				alert( this.responseText );
			}
			xhr.open("POST", "https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=7&q=");
			xhr.send('q=' + valSearch); 


// 			xhr.onerror = function() {
// 				alert( 'Ошибка ' + this.status );
// 			}

// };

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

})();