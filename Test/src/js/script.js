window.onload = function(){
	'use strict';

//  слайдер START

	// текстовка и параметры слайдера
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
		show : function () { // заполняем слайдер

			$('#firsfText')[0].innerHTML = this.firstText[this.frame];
			$('#secondText')[0].innerHTML= this.secondText[this.frame];
			$('#paragrafer')[0].innerHTML = this.paragrafer[this.frame];
			$('#slideLink')[0].innerHTML = this.linkText[this.frame];
			$('#slideLink')[0].setAttribute('href', this.linkHref[this.frame]);
			$('.slids')[0].style.backgroundPosition = this.slidePosition[this.frame];

		},


		initLabel : function() { // первоначальная инициализация
			this.checkboxs = $('.slids-panel-control').find('input[type="radio"]');
			this.setLabel();
		},


		setLabel : function() { // отмечаем  выбранный слайд

			this.checkboxs[this.frame].checked = true;			
			this.show();

		},


		nextLabel : function(e) { // определяем следующий выбранный слайд

			if(e.target.id) {

				slider.frame = e.target.id.charAt(e.target.id.length - 1) - 1;

			} else if(event.target.labels == undefined)  {

				slider.frame = event.target.id.charAt(event.target.id.length - 1) - 1;

			} else {

				slider.frame = event.target.labels[0].innerHTML - 1; 

			}


			slider.show(); // вывод нового слайда
		},

		nextSlide : function() { // авто прокрутка слайдов

			this.checkboxs[this.frame].checked = false;
			slider.frame++;

			if(slider.frame == slider.slidePosition.length) {
				slider.frame = 0;
			}

			this.setLabel();
		},


		listener : function() { // добавляем обработчик события

			var w = $('.slids-panel-control').find('input[type="radio"]');
			for(var i = 0; i < w.length; i++) {

				if (document.body.addEventListener){

					w[i].addEventListener('click', this.nextLabel, false); 

				} else if (document.body.attachEvent){

					w[i].attachEvent('onclick', this.nextLabel);

				}
			}

		},

	}

	// первоначальная инициализация и добавление слушателя
	slider.initLabel();
	slider.listener();
	setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
		slider.nextSlide();
	},5000);

			//  слайдер END



			// табы с материалами по направлениям START
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
				sliders.css('opacity', '1');

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

				sliders.append(text); // добавление материалов спомощью шаблонизатора

			}

			// скрытие материалов на основании неактивного таба
			function removeMaterials() {

				sliders.css('opacity', '0.0');

				setTimeout( function() {

					$('.item').remove(text);

				}, 300);
			}

			// определение нажатие на таб и изменение класса (активный/неактивный)
			function changeTab (e) {

				var event = e || event || window.event;
				var target = e.target || event.target || event.srcElement;

				var selectedLi = '';


				if(event.target.localName == 'h2') {
					if(target.parentElement.id) {
						selectedLi = target.parentElement.id;
					}

				}  else if(event.target.nodeName.toLowerCase() == 'li') {

					console.log(event.currentTarget.id);
					selectedLi = event.target.id;

				} else if(event.srcElement.localName == 'h2') {
					if(event.currentTarget.id) {
						selectedLi = event.currentTarget.id; 

					} else {
						selectedLi = event.path[1].id; 

					}

				} else {

					selectedLi = event.srcElement.id; 

				}


				for (var i = 0; i < sliderTabs.length; i++) {


					if(sliderTabs[i].className == 'sortBar-active' && sliderTabs[i].id != selectedLi) {

						sliderTabs[i].className = 'sortBar-noActive';

					} else if(sliderTabs[i].id == selectedLi) {

						sliderTabs[i].className = 'sortBar-active';
					}

				}


				removeMaterials();
				setTimeout( function() { // стилизация замены материалов

					addMaterials();

				}, 300);

			}


			// добавление слушателя на табы
			var sliderTabs = $('.sortBar').children().children();
			

			for(var i = 0; i < sliderTabs.length; i++) {

				if (document.body.addEventListener){

					sliderTabs[i].addEventListener('click', changeTab, false); 

				} else if (document.body.attachEvent){

					sliderTabs[i].attachEvent('onclick', changeTab);

				}
			}



			addMaterials();

			// табы с материалами по направлениям END


// =================================    ===================================


			// селекты START

			var selectElements = { // данные выводимые в селекторах
				selectRegion: [ 'Africa', 'America', 'Antarctica', 'Asia', 'Australasia', 'Europe' ],
				selectCategory: ['One', 'Tow', 'Thre', 'Tour', 'Five'],
				selectDate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
				selectPrice: [' less 500', '500 - 1000', '1000 - 1500', '1500 more '],
			};
			var selectWrap = $('.transparent');


			var c = 0;

			function selectOpen(e) { 


				var event = e || event || window.event;
				var target = e.target || event.target || event.srcElement;

				// проверка передается ли id
				if(event.target.id){


					var activeSelectInput = $('#' + target.id).parent().children()[0],
					nameMaterials = target.id;

					var selectedId = $('#' + target.id);


				// проверка активный select или он disabled функция возвращает true/false
				if(createList()) {
					
					selectedId[0].classList.toggle('transparent');
					selectedId[0].classList.toggle('active-select');


					if(selectedId.append == undefined) {

						selectedId.appendChild(createList());

					} else {

						selectedId.append(createList());
					}

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
					function getIten(e) {

						var event = e || event || window.event;
						var target = e.target || event.target || event.srcElement;


						var itemValue = target.innerHTML;

						setItemSelect(itemValue);

					};
					var countSelect = 0;

				// Добавляем выбранный элемент в select
				function setItemSelect(val) {

					remouveLisenerSelect(liItem, getIten);

						var nextSelect = $('#' + target.id).parent().next()[0].children[0];


						// убираем атрибут у следующего input
						if(nextSelect.hasAttribute('disabled') && nextSelect.type == "text"){
							nextSelect.removeAttribute('disabled');
						}

						countSelect++;

						activeSelectInput.value = val;

						selectedId[0].classList.toggle('transparent');
						selectedId[0].classList.toggle('active-select');


					$('.transparent-list').remove();

					return addLisenerSelect(selectWrap, selectOpen);

				}

					// создаем Список START
					function createList () {



						if(!activeSelectInput.hasAttribute('disabled')) {


							var insertableUl = document.createElement('ul');
							insertableUl.className = 'transparent-list';


						// Выбираем что вставлять
						var selectArrayMaterials =  selectElements[target.id];


						for (var i = 0; i < selectArrayMaterials.length; i++){

							var insertableli = document.createElement('li');
							insertableli.className = 'transparent-list-item';

							insertableli.innerHTML = selectArrayMaterials[i];


							if(insertableUl.append == undefined) {

								insertableUl.appendChild(insertableli);

							} else {

								insertableUl.append(insertableli);
							}

						}


						return insertableUl;
					} else {

						return false;
					}
				}
				// создаем Список END

				c++;
				

			}


			// добавление слушателя на селекты
			function addLisenerSelect (element, func, funcActiv) {


				var valActiv = 'click';
				if(funcActiv) {
					valActiv = funcActiv;
				}


				for(var i = 0; i < element.length; i++) {

					if (document.body.addEventListener){

						element[i].addEventListener(valActiv, func, false); 

					} else if (document.body.attachEvent){

						if(valActiv == 'click') {
							
							element[i].attachEvent('on' + valActiv, func);

						} else {
							element[i].oninput = func;
						}


					}
				}
			}

			function remouveLisenerSelect (element, func) {
				for(var i = 0; i < element.length; i++) {

					if (document.body.removeEventListener){

						element[i].removeEventListener('click', func, false); 

					} else if (document.body.detachEvent ){

						element[i].detachEvent ('onclick', func);

					}
				}
			}

			addLisenerSelect(selectWrap, selectOpen);

			// селекты END

		};