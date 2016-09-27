(function(){
search();


// // init Isotope
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
	// console.log('OK!!');
	var valArr = document.getElementById('serchVal');

	if (valArr != null) {
		var valSearch = valArr.value;

	} else {
		var valSearch = '';
	}


// **********
var $searchText = $('#serchVal').val();
// console.log('Значение: ' + $searchText);
if($searchText){var search = 'q=' + $searchText};
		$.ajax({
			url: 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=7&' + search,
			dataType: "jsonp",
			error: function(e) { console.log('Error: ' + e);},
			success: function(data) {

						var answerServ = data;
						var picture = {};
							for(var i = 0; i < answerServ.hits.length; i++) {

								document.getElementById('b' + (i +1 )).style.backgroundImage = "url('" + answerServ.hits[i].webformatURL + "')";

								document.getElementById('b' + (i +1 )).firstChild.innerHTML = answerServ.hits[i].tags;
								// console.log(answerServ.hits.length);
								
							}	

			}

		});

// *******END*******



	};


document.getElementById('search').attachEvent('onclick', search);

})();