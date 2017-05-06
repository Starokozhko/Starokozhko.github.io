$(function(){

	$("#number").inputmask("(999)999-99-99");

	var servicesText = document.getElementById('services-text_1').innerHTML,
	indexStart = servicesText.indexOf(' ', 338) + 1,
	lastText = servicesText.substring(indexStart),
	firstText = servicesText.substring(0, indexStart);
	document.getElementById('services-text_1').innerHTML = firstText;

	$('#services-more_text').click(function(){

		$(this).prev()[0].style.display = 'block';
		$(this).prev()[0].style.height = '120px';

		document.getElementById('services-text_1').innerHTML = firstText + lastText;
		$('#services-more_text').hide();
	});

	for(var i = 0; i < $('.choice_1-desc-item_text').length; i++){
		var w = $('.choice_1-desc-item_text')[i].innerHTML;
		$('.choice_1-desc-item_text')[i].innerHTML = w.replace("","<br/>");
	}
	

	$('#order_teranslation').click(orderTrenslation);
	$('#bottom_order').click(orderTrenslation);

	function orderTrenslation() {


		var div = document.createElement('div');
		div.id = 'all_wrapper';

		var div2 = document.createElement('div');
		div2.id = 'popap-order_translation';

		var h2 = document.createElement('h2');
		h2.className = 'popap-title';
		h2.innerHTML = 'Обратный звонок';

		var p = document.createElement('p');
		p.className = 'popap-title_2';
		p.innerHTML = 'Заполните форму и мы Вам перезвоним!';

		var inputName = document.createElement('input');
		inputName.id = 'popap-name';
		inputName.className = 'popap-input';
		inputName.setAttribute("placeholder", "Ваше имя");

		var inputNumber = document.createElement('input');
		inputNumber.id = 'popap-number';
		inputNumber.className = 'popap-input';
		inputNumber.setAttribute("placeholder", "Номер телефона");


		var el_i = document.createElement('i');
		el_i.className = "spec_icon popap_closed";
		el_i.id = "popap_closed";
		el_i.innerHTML = '';

		var el_textarea = document.createElement('textarea');
		el_textarea.className = "popap-textarea";
		el_textarea.id = "popap_text";
		el_textarea.setAttribute("placeholder", "Комментарий");

		var el_form = document.createElement('form');
		el_form.id = "popap_form";



		var el_button = document.createElement('input');
		el_button.setAttribute("type", "button");
		el_button.className = "hidden";
		el_button.id = "popap_button";
		el_button.setAttribute("value", "Отправить");

		var el_button_label = document.createElement('label');
		el_button_label.className = "popap_view_button";
		el_button_label.setAttribute("for", "popap_button");
		el_button_label.innerHTML = 'Отправить';



		el_form.append(inputName);
		el_form.append(inputNumber);
		el_form.append(el_textarea);
		el_form.append(el_button);
		el_form.append(el_button_label);
		div2.append(el_i);
		div2.append(h2);
		div2.append(p);
		div2.append(el_form);

		div.append(div2);


		$('body').append(div);



		function validName(){
			var name =  $('#popap-name'),
			regexp = /^['a-zA-ZА-Яа-я']{2,15}/,
			result = regexp.test(name[0].value);
			console.log(result);
			if(result) {
				closedPopap(false);
				setTimeout(function(){validOk()}, 700);

			} else {
				$('#popap-name')[0].style.border = '2px solid red';
			}
		}

		function closedPopap (flag) {
			$('#popap-order_translation').css('opacity', '0')
			if(flag){
				setTimeout(function(){$("#all_wrapper").remove()}, 300);
			}

		}



		function validOk() {

			var div2 = document.createElement('div');
			div2.id = 'popap-order_succes';

			var el_i = document.createElement('i');
			el_i.className = "spec_icon popap_closed";
			el_i.id = "popap_closed_2";
			el_i.innerHTML = '';


			var h2 = document.createElement('h2');
			h2.className = 'popap-title';
			h2.innerHTML = 'Спасибо!';

			var p = document.createElement('p');
			p.className = 'popap-title_2';
			p.innerHTML = 'Ваш запрос был успешно отправлен! Пожалуйста, ожидайте - мы свяжемся с Вами в ближайшее время.';

			var i = document.createElement('i');
			i.setAttribute("type", "button");
			i.className = "fa fa-check-circle orange";
			i.id = "popap_butt_closed";
			i.setAttribute("aria-hidden", "true");


			var el_button = document.createElement('div');
			el_button.id = "popap_butt_closed";


			el_button.innerHTML = "<i class='fa fa-check-circle' aria-hidden='true'></i> Проверка";
			div2.append(el_i);
			div2.append(h2);
			div2.append(p);
			div2.append(el_button);



			$('#all_wrapper').append(div2);
			$("#popap_butt_closed").click(closedPopap);
			$("#popap_closed_2").click(closedPopap);
		}


		$("#popap-number").inputmask("(999)999-99-99");

		$('#popap_closed').click(closedPopap);
		$('#popap_button').click(validName);
	}


// Slider 1 START============================

$("#top-slider-control-left").click(slidPrew);
$("#top-slider-control-right").click(slidNext);



function slidPrew(){

	var checboxs = $('.top-slider-wrapper input');
	for(var i = 0; i < checboxs.length; i++){
		if(checboxs[i].checked == true) {
			if(i == 0){ 
				i =  checboxs.length - 1;
				$('.top-slider-wrapper input')[i].checked = true;
			} else
			$('.top-slider-wrapper input')[i-1].checked = true;
		}
	}
}

function slidNext(){
		// debugger;
		var checboxs = $('.top-slider-wrapper input');
		for(var i = 0; i < checboxs.length; i++){
			if(checboxs[i].checked == true) {
				if(i == checboxs.length - 1){ 
					i =  0;
					$('.top-slider-wrapper input')[i].checked = true;
				} else
				$('.top-slider-wrapper input')[i+1].checked = true;
				break;
			}
		}
	}
// Slider 1 End============================

// Slider 2 START============================

$("#scheme-slider-control-left").click(slid2Prew);
$("#scheme-slider-control-right").click(slid2Next);



function slid2Prew(){

	var checboxs = $('.scheme-slider input');
	for(var i = 0; i < checboxs.length; i++){

		if(checboxs[i].checked == true) {

			if(i == 0){ 
				i =  checboxs.length - 1;
				$('.scheme-slider input')[i].checked = true;
				for(var e = 0; e < checboxs.length; e++) {
					$('.scheme-number-item')[e].className += ' scheme-active';
				}
				$('#scheme-full')[0].style.width = "100%";

			} else if(i == 4) {
				$('.scheme-slider input')[i-1].checked = true;
				$('#scheme-full')[0].style.width = "77%";
				$('.scheme-number-item')[i].className = 'scheme-number-item';

			} else if(i == 3) {
				$('.scheme-slider input')[i-1].checked = true;
				$('#scheme-full')[0].style.width = "58%";
				$('.scheme-number-item')[i].className = 'scheme-number-item';

			} else if(i == 2) {
				$('.scheme-slider input')[i-1].checked = true;
				$('#scheme-full')[0].style.width = "33%";
				$('.scheme-number-item')[i].className = 'scheme-number-item';

			}
			else if(i == 1) {
				$('.scheme-slider input')[i-1].checked = true;
				$('#scheme-full')[0].style.width = "19%";
				$('.scheme-number-item')[i].className = 'scheme-number-item';
			}

		}
	};
}

function slid2Next(){

	var checboxs = $('.scheme-slider input');
	for(var i = 0; i < checboxs.length; i++){


		if(checboxs[i].checked == true) {

			if(i == 0) {
				$('#scheme-full')[0].style.width = "33%";
				setTimeout(function(){$('.scheme-number-item')[i+1].className += ' scheme-active'}, 700);
			}
			else if(i == 1) {
				$('#scheme-full')[0].style.width = "58%";
				setTimeout(function(){$('.scheme-number-item')[i+1].className += ' scheme-active'}, 500);
			}
			else if(i == 2){
				$('#scheme-full')[0].style.width = "77%";
				setTimeout(function(){$('.scheme-number-item')[i+1].className += ' scheme-active'}, 500);
			}
			else if(i == 3) {
				$('#scheme-full')[0].style.width = "100%";
				setTimeout(function(){$('.scheme-number-item')[i+1].className += ' scheme-active'}, 500);
			}
			else if(i == 4) {
				$('#scheme-full')[0].style.width = "19%";
				for(var e = 4; e > 0; e--) {
					$('.scheme-number-item')[e].className = 'scheme-number-item';
				}

			}
			
			if(i == checboxs.length - 1){ 
				i =  0;
				$('.scheme-slider input')[i].checked = true;
			} else
			$('.scheme-slider input')[i+1].checked = true;
			break;
		}

	}
}
// Slider 2 End============================

var h_hght = 833; // высота шапки

$(function(){

	var elem = $('.nav');
	var top = $(this).scrollTop();

	if(top > h_hght){
		$('.nav').id ='top_nav';
	}           

	$(window).scroll(function(){
		top = $(this).scrollTop();

		if( top > h_hght) {
			$('.nav')[0].id ='top_nav';
		}

		if( top < h_hght ) {
			$('.nav')[0].id = '';
		}

	});

});



$('#servises-choice_2').click(function(){
	if($(this).parent()[0].className != 'services-choice-item services-active') {
		$(this).parent()[0].className += ' services-active';
		$('#servises-choice_1').parent()[0].className = 'services-choice-item';

		$('.servises-choice_2-desc').toggleClass( ' choice-desc' );
		$('.servises-choice_1-desc').toggleClass( ' choice-desc' );
	}
});



$('#servises-choice_1').click(function(){

	if($(this).parent()[0].className != 'services-choice-item services-active') {

		$(this).parent()[0].className += ' services-active';
		$('#servises-choice_2').parent()[0].className = 'services-choice-item';

		$('.servises-choice_2-desc').toggleClass( ' choice-desc' );
		$('.servises-choice_1-desc').toggleClass( ' choice-desc' );
	}

});



/* Contact Form  START*/

$(".my_select_box").chosen({
	no_results_text: "Oops, nothing found!",
	width: "262px"
});

/* Contact Form  END*/





});