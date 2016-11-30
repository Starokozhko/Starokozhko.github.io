window.onload = function(){
	// 'use strict';

//  слайдер START

var slider = {
	slidePosition: [ '0 0', '-705px 0', '-1410px 0', '-2115px 0' ],
	frame: 0,
	firstText : [ 'Our', 'Our 2', 'Our 3', 'Our 4' ],
	secondText : [ 'New Tours', 'New Tours 2', 'New Tours 3', 'New Tours 4' ],
	paragrafer: [ 
	'At Naturetour we are constantly adding to and improving our portfolio of wildlife holidays to provide you with an even greater choice of wildlife viewing experiences.',
	'At Naturetour we are constantly adding to and improving our portfolio of wildlife holidays to provide you with an even greater choice of wildlife viewing experiences.  Lorem ipsum dolor.',
	'At Naturetour we are constantly adding to and improving our portfolio of wildlife holidays to provide you with an even greater choice of wildlife viewing experiences.',
	'At Naturetour we are constantly adding to and improving our portfolio of wildlife holidays to provide you with an even greater choice of wildlife viewing experiences.'
	],
	linkText : [ 'View new tours...', 'View new tours...', 'View new tours...', 'View new tours...' ],
	linkHref : [ '#1', '#2', '#3', '#4' ],
	checkboxs : '',
	show : function () {

		$('#firsfText')[0].innerHTML = this.firstText[this.frame];
		$('#secondText')[0].innerHTML= this.secondText[this.frame];
		$('#paragrafer')[0].innerHTML = this.paragrafer[this.frame];
		$('#slideLink')[0].innerHTML = this.linkText[this.frame];
		$('#slideLink')[0].setAttribute('href', this.linkHref[this.frame]);
		$('.slids')[0].style.backgroundPosition = this.slidePosition[this.frame];

	},


	initLabel : function() {
		this.checkboxs = $('.slids-panel-control').find('input[type="radio"]');
		this.setLabel();
	},


	setLabel : function() {

		this.checkboxs[this.frame].checked = true;			
		this.show();

	},



	nextLabel : function(e) {

					event = window.event;
			var target = event.srcElement;



		console.log(event.srcElement.id.charAt(event.srcElement.id.length - 1) - 1);

		if(event.srcElement.id) {

			slider.frame = event.srcElement.id.charAt(event.srcElement.id.length - 1) - 1;

		} 


		slider.show();
	},

	nextSlide : function() {

		this.checkboxs[this.frame].checked = false;
		slider.frame++;

		if(slider.frame == slider.slidePosition.length) {
			slider.frame = 0;
		}

		this.setLabel();
	},


	listener : function() {

		var w = $('.slids-panel-control').find('input[type="radio"]');
		for(var i = 0; i < w.length; i++) {

			w[i].attachEvent('onclick', this.nextLabel);
		}

	},

}

// первоначальная инициализация (вызов)
slider.initLabel();
slider.listener();
setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
	slider.nextSlide();
},5000);

			//  слайдер END ===================================------------------------------------- -------------------

//   =========================================================== START ===================================================

			// слайдер с материалами по направлениям START
			var materialsItem = {
				byDestination: [
				{
					imgUrl: '1.png',
					titleText: 'Africa Holidays',
					text: 'Few wildlife enthusiasts can resist Africa. Its exceptional abundance and variety of wild animals make it one of the world’s top wildlife holiday destinations.'
				},
				{
					imgUrl: '2.png',
					titleText: 'Americas Holidays',
					text: 'North, South and Central America are home to an incredible diversity of habitats and species, providing opportunities for wildlife holidays to suit all tastes.'
				},
				{
					imgUrl: '3.png',
					titleText: 'Antarctica Holidays',
					text: 'The ‘Great White Continent’ is perhaps the last true wilderness left on earth and ultimate wildlife holiday destination.'
				},
				{
					imgUrl: '4.png',
					titleText: 'Asia Holidays',
					text: 'Choose a Naturetour wildlife holiday to Asia and benefit from our experience of over 20 years, and amazing network of local contacts, on this incredibly diverse continent.'
				},
				{
					imgUrl: '5.png',
					titleText: 'Australasia Holidays',
					text: 'Australia and New Zealand offer extraordinary wildlife in safe, peaceful surroundings. Our tours focus on this continent\'s unique flora and fauna.'
				},
				{
					imgUrl: '6.png',
					titleText: 'Europe Holidays',
					text: 'Naturetour wildlife holidays in Europe focus on the outstanding wildlife habitats and species that can be found in the region.'
				},
				],

				bySpecies: [
				{
					imgUrl: '6.png',
					titleText: 'Europe Holidays',
					text: 'Naturetour wildlife holidays in Europe focus on the outstanding wildlife habitats and species that can be found in the region.'
				},
				{
					imgUrl: '5.png',
					titleText: 'Australasia Holidays',
					text: 'Australia and New Zealand offer extraordinary wildlife in safe, peaceful surroundings. Our tours focus on this continent\'s unique flora and fauna.'
				},
				{
					imgUrl: '4.png',
					titleText: 'Asia Holidays',
					text: 'Choose a Naturetour wildlife holiday to Asia and benefit from our experience of over 20 years, and amazing network of local contacts, on this incredibly diverse continent.'
				},
				{
					imgUrl: '3.png',
					titleText: 'Antarctica Holidays',
					text: 'The ‘Great White Continent’ is perhaps the last true wilderness left on earth and ultimate wildlife holiday destination.'
				},
				{
					imgUrl: '2.png',
					titleText: 'Americas Holidays',
					text: 'North, South and Central America are home to an incredible diversity of habitats and species, providing opportunities for wildlife holidays to suit all tastes.'
				},
				{
					imgUrl: '1.png',
					titleText: 'Africa Holidays',
					text: 'Few wildlife enthusiasts can resist Africa. Its exceptional abundance and variety of wild animals make it one of the world’s top wildlife holiday destinations.'
				},
				{
					imgUrl: '4.png',
					titleText: 'Asia Holidays',
					text: 'Choose a Naturetour wildlife holiday to Asia and benefit from our experience of over 20 years, and amazing network of local contacts, on this incredibly diverse continent.'
				},
				{
					imgUrl: '5.png',
					titleText: 'Australasia Holidays',
					text: 'Australia and New Zealand offer extraordinary wildlife in safe, peaceful surroundings. Our tours focus on this continent\'s unique flora and fauna.'
				},
				],

				byTourType: [
				{
					imgUrl: '5.png',
					titleText: 'Australasia Holidays',
					text: 'Australia and New Zealand offer extraordinary wildlife in safe, peaceful surroundings. Our tours focus on this continent\'s unique flora and fauna.'
				},
				{
					imgUrl: '2.png',
					titleText: 'Americas Holidays',
					text: 'North, South and Central America are home to an incredible diversity of habitats and species, providing opportunities for wildlife holidays to suit all tastes.'
				},
				{
					imgUrl: '3.png',
					titleText: 'Antarctica Holidays',
					text: 'The ‘Great White Continent’ is perhaps the last true wilderness left on earth and ultimate wildlife holiday destination.'
				},
				{
					imgUrl: '4.png',
					titleText: 'Asia Holidays',
					text: 'Choose a Naturetour wildlife holiday to Asia and benefit from our experience of over 20 years, and amazing network of local contacts, on this incredibly diverse continent.'
				},
				{
					imgUrl: '6.png',
					titleText: 'Europe Holidays',
					text: 'Naturetour wildlife holidays in Europe focus on the outstanding wildlife habitats and species that can be found in the region.'
				},
				]
			}

			// подклчение шаблонизатора 2 для табов
			var htmlText = $('#templite2').html(),
			sliders = $('.materials'),
			text = '';
			
			// показ материалов на основании активного таба
			function addMaterials() {
				sliders.css('display', 'block');
				// console.log(sliders.css('display'));
				var selectTabs = $('li[class=sortBar-active]')[0].id;

				switch(selectTabs) {
					case 'sortBar_one' :  var text = tmpl(htmlText, {data: materialsItem.byDestination});
					break;
					case 'sortBar_tow' :  var text = tmpl(htmlText, {data: materialsItem.bySpecies});
					break;
					case 'sortBar_thre' : var text = tmpl(htmlText, {data: materialsItem.byTourType});
					break;
					default : var text = 'Error';
					break;
				}

				sliders.append(text);

			}

			// скрытие материалов на основании неактивного таба
			function removeMaterials() {

				sliders.css('display', 'none');

				setTimeout( function() {

					$('.item').remove(text);

				}, 300);
			}

			// определение нажатие на таб и изменение класса (активный/неактивный)
			function changeTab () {

				event = window.event;
				var target =  event.srcElement;

				var selectedLi = '';


				if(event.srcElement.localName == 'h2') {

					selectedLi = event.srcElement['parentElement'].id; 

				} else {

					selectedLi = event.srcElement.id; 

				}
				for (var i = 0; i < sliderTabs.length; i++) {

				// sliderTabs[i].
				if(sliderTabs[i].className == 'sortBar-active' && sliderTabs[i].id != selectedLi) {

					sliderTabs[i].className = 'sortBar-noActive';

				} else if(sliderTabs[i].id == selectedLi) {

					sliderTabs[i].className = 'sortBar-active';
				}

			}

				// console.log(selectedLi);
				removeMaterials();
				setTimeout( function() {

					addMaterials();

				}, 300);

			}


			// добавление слушателя на табы
			var sliderTabs = $('.sortBar').children().children();
			// console.log(sliderTabs[2].innerHTML);

			for(var i = 0; i < sliderTabs.length; i++) {

				sliderTabs[i].attachEvent('onclick', changeTab);

			}



			addMaterials();

			// слайдер с материалами по направлениям END  =================================================== -----------------











// =================================    ===================================


			// селекты START

			var selectElements = {
				selectRegion: [ 'Africa', 'America', 'Antarctica', 'Asia', 'Australasia', 'Europe' ],
				selectCategory: ['One', 'Tow', 'Thre', 'Tour', 'Five'],
				selectDate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // подключить календарь
				selectPrice: [' less 500', '500 - 1000', '1000 - 1500', '1500 more '],
			};
			var selectWrap = $('.transparent');


			var c = 0;

			function selectOpen() {

				// console.log(c);



				event = window.event;
				var target = event.srcElement;

				// проверка передается ли id
				if(event.srcElement['id']){

					// console.log(c);
					// console.log(event);

					var activeSelectInput = $('#' + event.srcElement['id']).parent().children()[0],
					nameMaterials = event.srcElement['id'];

					var selectedId = $('#' + event.srcElement['id']);


				// проверка активный select или он disabled функция возвращает true/false
				if(createList()) {

					// console.log(selectedId);
					selectedId[0].removeAttribute('class');
					selectedId[0].setAttribute('class', 'active-select');

					selectedId.append(createList());

					// удаления прослушевания этой выборки
					remouveLisenerSelect(selectWrap, selectOpen);


				// добавляем слушателя на выбор элемента START

				var liItem = selectedId.find('.transparent-list-item');

				addLisenerSelect(liItem, getIten)
				// добавляем слушателя на выбор элемента END
			}

		} else {
			return;
		}

					// берем выбранный элемент и передаем в select
					function getIten() {

						event = window.event;
						var target = event.srcElement;


						var itemValue = target.innerHTML;

						setItemSelect(itemValue);

					};
					var countSelect = 0;

				// Добавляем выбранный элемент в select
				function setItemSelect(val) {

					remouveLisenerSelect(liItem, getIten);
						// var inputListener = $('#selectRegionInput');
						// console.log($('#' + target.id).parent().next()[0].children[0]); //.parent().siblings()[0].children[0]
						var nextSelect = $('#' + target.id).parent().next()[0].children[0];

						// console.log(nextSelect.type);
						// убираем атрибут у следующего input
						if(nextSelect.hasAttribute('disabled') && nextSelect.type == "text"){
							nextSelect.removeAttribute('disabled');
						}

						countSelect++;
						// console.log(nextSelect.hasAttribute('disabled'));
						// addLisenerSelect(inputListener, fun, 'change');

						activeSelectInput.value = val;

						// selectedId[0].classList.toggle('transparent');
						// selectedId[0].classList.toggle('active-select');
						selectedId[0].removeAttribute('class');
						selectedId[0].setAttribute('class', 'transparent');

					// console.log(selectedId);
					$('.transparent-list').remove();
					// selectWrap = $('.transparent#selectCategory');
					// setTimeout(addLisenerSelect(selectWrap, selectOpen), 1000);
					return addLisenerSelect(selectWrap, selectOpen);

				}

					// создаем Список START
					function createList () {

						// console.log(activeSelectInput.hasAttribute('disabled'));

						if(!activeSelectInput.hasAttribute('disabled')) {


							var insertableUl = document.createElement('ul');
							insertableUl.className = 'transparent-list';


				// Выбираем что вставлять
				var selectArrayMaterials =  selectElements[target.id];

				// console.log( selectArrayMaterials );

				for (var i = 0; i < selectArrayMaterials.length; i++){

					var insertableli = document.createElement('li');
					insertableli.className = 'transparent-list-item';

					insertableli.innerHTML = selectArrayMaterials[i];

					insertableUl.appendChild(insertableli);
				}


				return insertableUl;
			}
			return false;
		}
				// создаем Список END

				c++;


			}




			// добавление слушателя на селекты
			function addLisenerSelect (element, func, funcActiv) {

				// console.log(element);
				var valActiv = 'click';
				if(funcActiv) {
					valActiv = funcActiv;
				}
				// console.log(valActiv);

				for(var i = 0; i < element.length; i++) {


					if(valActiv == 'click') {

						element[i].attachEvent('on' + valActiv, func);

					} else {
						element[i].oninput = func;
					}

				}
			}

			function remouveLisenerSelect (element, func) {
				for(var i = 0; i < element.length; i++) {

					element[i].detachEvent ('onclick', func);

				}
			}

			addLisenerSelect(selectWrap, selectOpen);


			// селекты END

			// добавляем value вместо неработающего placeholder
			(function setPlaceHolders(){
				var input = document.getElementsByTagName('input'); // get all text fields
				var cls = "placeholdr"; // set name of the class

				if (input) { // if fields found
					for (var i=0; i < input.length; i++) { 
						var t = input[i]; 
						if(t.hasAttribute("placeholder")) {
							var txt = t.getAttribute("placeholder");

							if (txt.length > 0) { // if placeholder found
								t.className = t.value.length == 0 ? t.className+" "+cls : t.className; // add class
								t.value = t.value.length > 0 ? t.value : txt; // if no value found
								
								t.onfocus = function() { // on focus
									this.className = this.className.replace(cls);
									this.value = this.value == this.getAttribute("placeholder") ? "" : this.value;
								}

								t.onblur = function() { // on focus out 
									if (this.value.length == 0) {
										this.value = this.getAttribute("placeholder");
										this.className = this.className+" "+cls; // add class
									}
								}
							}  
						}
					}
				}
			})();



		};