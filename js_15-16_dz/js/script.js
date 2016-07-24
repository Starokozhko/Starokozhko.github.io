$(function() {

	var Human = {
		name: "неуказано",
		age: "неуказано",
		male: "неуказано",
		growth: "неуказано",
		weight: "неуказано"
	}
	var worker = {
		placeWork: "Неуказано",
		salary: "Неуказано",
		working: function(){
			console.log('Workings');
		}
	}
	var student = {
		placeStudy: "Неуказано",
		scholarship: "Неуказано",
		watchSeries: function () {
			console.log("watch series");
		}
	}

	worker.__proto__ = Human;
	student.___proto__ = Human;

	var alex = worker;
	alex.name = 'Alex';
	alex.age = 32;

	var maria = worker;
	maria.name = 'Maria';
	maria.age = 27;
	maria.male = 'woman'


	console.log('alex.name: ' + alex.name);
	console.log('alex.age: ' + alex.age);
	console.log('alex.male: ' + alex.male);

	console.log('maria.name: ' + maria.name);
	console.log('maria.age: ' + maria.age);
	console.log('maria.male: ' + maria.male);



	var cx = '012711888553501925108:_oqnsltshjg';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);

	function search(){
		var $searchText = $('#searchText').val();

		$.ajax({
			url: 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=30&q=' + $searchText,
			dataType: "jsonp",
			success: function(data) {
				var htmlText = $("#templite").html();
				$('.result').html(tmpl(htmlText, data));
				console.log(data);

			}

		});

	}
	$('form #send').on('click', search);



});



// function GoogleCallback(jqueryObj, data){
// 	console.log("jqueryObj", jqueryObj);
// 	console.log("data", data);
// }
// $(function(){
// читый JavaScript
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


	// var xmlhttp = getXmlHttp()
	// xmlhttp.open('GET', "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=AIzaSyAwPq2AUaJmyWBB_C7XIzRsT8q-jwka9fs&q=test", true);
	// xmlhttp.onreadystatechange = function() {
	// 	if (xmlhttp.readyState == 4) {
	// 		if(xmlhttp.status == 200) {
	// 			alert(xmlhttp.responseText);
	// 		}
	// 	}
	// };
	// xmlhttp.send(null);


// С помощью библиотеки и метода jQuery.ajax

// function req() {

	
// 	var valRequest = $("#searchText").val();
// 	console.log(valRequest);
// 	$.ajax({
// 		url: "https://www.googleapis.com/customsearch/v1?q=" + valRequest + "&key={AIzaSyAwPq2AUaJmyWBB_C7XIzRsT8q-jwka9fs}",
// 		dataType: "jsonp",
// 		data: {},
// 		method: "GET",
// 		success: function() {
// 			alert("ok");
// 			// GoogleCallback();
// 		},
// 		error: function () {

// 		}
// 	}, GoogleCallback);
// }



// $("button").on("click", req);

// });