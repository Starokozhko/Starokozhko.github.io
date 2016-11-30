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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gINGB0LvQsNC50LTQtdGAIFNUQVJUXHJcblxyXG5cdC8vINGC0LXQutGB0YLQvtCy0LrQsCDQuCDQv9Cw0YDQsNC80LXRgtGA0Ysg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdHZhciBzbGlkZXIgPSB7XHJcblx0XHRzbGlkZVBvc2l0aW9uOiBbICcwIDAnLCAnLTcwNXB4IDAnLCAnLTE0MTBweCAwJywgJy0yMTE1cHggMCcgXSxcclxuXHRcdGZyYW1lOiAwLFxyXG5cdFx0Zmlyc3RUZXh0IDogWyAnT3VyJywgJ091ciAyJywgJ091ciAzJywgJ091ciA0JyBdLFxyXG5cdFx0c2Vjb25kVGV4dCA6IFsgJ05ldyBUb3VycycsICdOZXcgVG91cnMgMicsICdOZXcgVG91cnMgMycsICdOZXcgVG91cnMgNCcgXSxcclxuXHRcdHBhcmFncmFmZXI6IFsgXHJcblx0XHQnQXQgTmF0dXJldG91ciB3ZSBhcmUgY29uc3RhbnRseSBhZGRpbmcgdG8gYW5kIGltcHJvdmluZyBvdXIgcG9ydGZvbGlvIG9mIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHByb3ZpZGUgeW91IHdpdGggYW4gZXZlbiBncmVhdGVyIGNob2ljZSBvZiB3aWxkbGlmZSB2aWV3aW5nIGV4cGVyaWVuY2VzLicsXHJcblx0XHQnQXQgTmF0dXJldG91ciB3ZSBhcmUgY29uc3RhbnRseSBhZGRpbmcgdG8gYW5kIGltcHJvdmluZyBvdXIgcG9ydGZvbGlvIG9mIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHByb3ZpZGUgeW91IHdpdGggYW4gZXZlbiBncmVhdGVyIGNob2ljZSBvZiB3aWxkbGlmZSB2aWV3aW5nIGV4cGVyaWVuY2VzLiAgTG9yZW0gaXBzdW0gZG9sb3IuJyxcclxuXHRcdCdBdCBOYXR1cmV0b3VyIHdlIGFyZSBjb25zdGFudGx5IGFkZGluZyB0byBhbmQgaW1wcm92aW5nIG91ciBwb3J0Zm9saW8gb2Ygd2lsZGxpZmUgaG9saWRheXMgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhbiBldmVuIGdyZWF0ZXIgY2hvaWNlIG9mIHdpbGRsaWZlIHZpZXdpbmcgZXhwZXJpZW5jZXMuJyxcclxuXHRcdCdBdCBOYXR1cmV0b3VyIHdlIGFyZSBjb25zdGFudGx5IGFkZGluZyB0byBhbmQgaW1wcm92aW5nIG91ciBwb3J0Zm9saW8gb2Ygd2lsZGxpZmUgaG9saWRheXMgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhbiBldmVuIGdyZWF0ZXIgY2hvaWNlIG9mIHdpbGRsaWZlIHZpZXdpbmcgZXhwZXJpZW5jZXMuJ1xyXG5cdFx0XSxcclxuXHRcdGxpbmtUZXh0IDogWyAnVmlldyBuZXcgdG91cnMuLi4nLCAnVmlldyBuZXcgdG91cnMuLi4nLCAnVmlldyBuZXcgdG91cnMuLi4nLCAnVmlldyBuZXcgdG91cnMuLi4nIF0sXHJcblx0XHRsaW5rSHJlZiA6IFsgJyMxJywgJyMyJywgJyMzJywgJyM0JyBdLFxyXG5cdFx0Y2hlY2tib3hzIDogJycsXHJcblx0XHRzaG93IDogZnVuY3Rpb24gKCkgeyAvLyDQt9Cw0L/QvtC70L3Rj9C10Lwg0YHQu9Cw0LnQtNC10YBcclxuXHJcblx0XHRcdCQoJyNmaXJzZlRleHQnKVswXS5pbm5lckhUTUwgPSB0aGlzLmZpcnN0VGV4dFt0aGlzLmZyYW1lXTtcclxuXHRcdFx0JCgnI3NlY29uZFRleHQnKVswXS5pbm5lckhUTUw9IHRoaXMuc2Vjb25kVGV4dFt0aGlzLmZyYW1lXTtcclxuXHRcdFx0JCgnI3BhcmFncmFmZXInKVswXS5pbm5lckhUTUwgPSB0aGlzLnBhcmFncmFmZXJbdGhpcy5mcmFtZV07XHJcblx0XHRcdCQoJyNzbGlkZUxpbmsnKVswXS5pbm5lckhUTUwgPSB0aGlzLmxpbmtUZXh0W3RoaXMuZnJhbWVdO1xyXG5cdFx0XHQkKCcjc2xpZGVMaW5rJylbMF0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5saW5rSHJlZlt0aGlzLmZyYW1lXSk7XHJcblx0XHRcdCQoJy5zbGlkcycpWzBdLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHRoaXMuc2xpZGVQb3NpdGlvblt0aGlzLmZyYW1lXTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRpbml0TGFiZWwgOiBmdW5jdGlvbigpIHsgLy8g0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90LDRjyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xyXG5cdFx0XHR0aGlzLmNoZWNrYm94cyA9ICQoJy5zbGlkcy1wYW5lbC1jb250cm9sJykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcblx0XHRcdHRoaXMuc2V0TGFiZWwoKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHNldExhYmVsIDogZnVuY3Rpb24oKSB7IC8vINC+0YLQvNC10YfQsNC10LwgINCy0YvQsdGA0LDQvdC90YvQuSDRgdC70LDQudC0XHJcblxyXG5cdFx0XHR0aGlzLmNoZWNrYm94c1t0aGlzLmZyYW1lXS5jaGVja2VkID0gdHJ1ZTtcdFx0XHRcclxuXHRcdFx0dGhpcy5zaG93KCk7XHJcblxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0bmV4dExhYmVsIDogZnVuY3Rpb24oZSkgeyAvLyDQvtC/0YDQtdC00LXQu9GP0LXQvCDRgdC70LXQtNGD0Y7RidC40Lkg0LLRi9Cx0YDQsNC90L3Ri9C5INGB0LvQsNC50LRcclxuXHJcblx0XHRcdGlmKGUudGFyZ2V0LmlkKSB7XHJcblxyXG5cdFx0XHRcdHNsaWRlci5mcmFtZSA9IGUudGFyZ2V0LmlkLmNoYXJBdChlLnRhcmdldC5pZC5sZW5ndGggLSAxKSAtIDE7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYoZXZlbnQudGFyZ2V0LmxhYmVscyA9PSB1bmRlZmluZWQpICB7XHJcblxyXG5cdFx0XHRcdHNsaWRlci5mcmFtZSA9IGV2ZW50LnRhcmdldC5pZC5jaGFyQXQoZXZlbnQudGFyZ2V0LmlkLmxlbmd0aCAtIDEpIC0gMTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHNsaWRlci5mcmFtZSA9IGV2ZW50LnRhcmdldC5sYWJlbHNbMF0uaW5uZXJIVE1MIC0gMTsgXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0c2xpZGVyLnNob3coKTsgLy8g0LLRi9Cy0L7QtCDQvdC+0LLQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcblx0XHR9LFxyXG5cclxuXHRcdG5leHRTbGlkZSA6IGZ1bmN0aW9uKCkgeyAvLyDQsNCy0YLQviDQv9GA0L7QutGA0YPRgtC60LAg0YHQu9Cw0LnQtNC+0LJcclxuXHJcblx0XHRcdHRoaXMuY2hlY2tib3hzW3RoaXMuZnJhbWVdLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0c2xpZGVyLmZyYW1lKys7XHJcblxyXG5cdFx0XHRpZihzbGlkZXIuZnJhbWUgPT0gc2xpZGVyLnNsaWRlUG9zaXRpb24ubGVuZ3RoKSB7XHJcblx0XHRcdFx0c2xpZGVyLmZyYW1lID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zZXRMYWJlbCgpO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0bGlzdGVuZXIgOiBmdW5jdGlvbigpIHsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPXHJcblxyXG5cdFx0XHR2YXIgdyA9ICQoJy5zbGlkcy1wYW5lbC1jb250cm9sJykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB3Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cdFx0XHRcdGlmIChkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIpe1xyXG5cclxuXHRcdFx0XHRcdHdbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRMYWJlbCwgZmFsc2UpOyBcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmF0dGFjaEV2ZW50KXtcclxuXHJcblx0XHRcdFx0XHR3W2ldLmF0dGFjaEV2ZW50KCdvbmNsaWNrJywgdGhpcy5uZXh0TGFiZWwpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdCw0Y8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0Lgg0LTQvtCx0LDQstC70LXQvdC40LUg0YHQu9GD0YjQsNGC0LXQu9GPXHJcblx0c2xpZGVyLmluaXRMYWJlbCgpO1xyXG5cdHNsaWRlci5saXN0ZW5lcigpO1xyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyAvLyDRgdGC0LDQstC40Lwg0L/Rj9GC0LjRgdC10LrRg9C90LTQvdGL0Lkg0LjQvdGC0LXRgNCy0LDQuyDQtNC70Y8g0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC90LjRjyDQutCw0YDRgtC40L3QvtC6XHJcblx0XHRzbGlkZXIubmV4dFNsaWRlKCk7XHJcblx0fSw1MDAwKTtcclxuXHJcblx0XHRcdC8vICDRgdC70LDQudC00LXRgCBFTkRcclxuXHJcblxyXG5cclxuXHRcdFx0Ly8g0YLQsNCx0Ysg0YEg0LzQsNGC0LXRgNC40LDQu9Cw0LzQuCDQv9C+INC90LDQv9GA0LDQstC70LXQvdC40Y/QvCBTVEFSVFxyXG5cdFx0XHR2YXIgbWF0ZXJpYWxzSXRlbSA9IHtcclxuXHRcdFx0XHRieURlc3RpbmF0aW9uOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnMS5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQWZyaWNhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdGZXcgd2lsZGxpZmUgZW50aHVzaWFzdHMgY2FuIHJlc2lzdCBBZnJpY2EuIEl0cyBleGNlcHRpb25hbCBhYnVuZGFuY2UgYW5kIHZhcmlldHkgb2Ygd2lsZCBhbmltYWxzIG1ha2UgaXQgb25lIG9mIHRoZSB3b3JsZOKAmXMgdG9wIHdpbGRsaWZlIGhvbGlkYXkgZGVzdGluYXRpb25zLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzIucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FtZXJpY2FzIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdOb3J0aCwgU291dGggYW5kIENlbnRyYWwgQW1lcmljYSBhcmUgaG9tZSB0byBhbiBpbmNyZWRpYmxlIGRpdmVyc2l0eSBvZiBoYWJpdGF0cyBhbmQgc3BlY2llcywgcHJvdmlkaW5nIG9wcG9ydHVuaXRpZXMgZm9yIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHN1aXQgYWxsIHRhc3Rlcy4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICczLnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBbnRhcmN0aWNhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdUaGUg4oCYR3JlYXQgV2hpdGUgQ29udGluZW504oCZIGlzIHBlcmhhcHMgdGhlIGxhc3QgdHJ1ZSB3aWxkZXJuZXNzIGxlZnQgb24gZWFydGggYW5kIHVsdGltYXRlIHdpbGRsaWZlIGhvbGlkYXkgZGVzdGluYXRpb24uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnNC5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQXNpYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQ2hvb3NlIGEgTmF0dXJldG91ciB3aWxkbGlmZSBob2xpZGF5IHRvIEFzaWEgYW5kIGJlbmVmaXQgZnJvbSBvdXIgZXhwZXJpZW5jZSBvZiBvdmVyIDIwIHllYXJzLCBhbmQgYW1hemluZyBuZXR3b3JrIG9mIGxvY2FsIGNvbnRhY3RzLCBvbiB0aGlzIGluY3JlZGlibHkgZGl2ZXJzZSBjb250aW5lbnQuJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnNS5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQXVzdHJhbGFzaWEgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ0F1c3RyYWxpYSBhbmQgTmV3IFplYWxhbmQgb2ZmZXIgZXh0cmFvcmRpbmFyeSB3aWxkbGlmZSBpbiBzYWZlLCBwZWFjZWZ1bCBzdXJyb3VuZGluZ3MuIE91ciB0b3VycyBmb2N1cyBvbiB0aGlzIGNvbnRpbmVudFxcJ3MgdW5pcXVlIGZsb3JhIGFuZCBmYXVuYS4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc2LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdFdXJvcGUgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ05hdHVyZXRvdXIgd2lsZGxpZmUgaG9saWRheXMgaW4gRXVyb3BlIGZvY3VzIG9uIHRoZSBvdXRzdGFuZGluZyB3aWxkbGlmZSBoYWJpdGF0cyBhbmQgc3BlY2llcyB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgcmVnaW9uLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblxyXG5cdFx0XHRcdGJ5U3BlY2llczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzYucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0V1cm9wZSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnTmF0dXJldG91ciB3aWxkbGlmZSBob2xpZGF5cyBpbiBFdXJvcGUgZm9jdXMgb24gdGhlIG91dHN0YW5kaW5nIHdpbGRsaWZlIGhhYml0YXRzIGFuZCBzcGVjaWVzIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSByZWdpb24uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnNS5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQXVzdHJhbGFzaWEgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ0F1c3RyYWxpYSBhbmQgTmV3IFplYWxhbmQgb2ZmZXIgZXh0cmFvcmRpbmFyeSB3aWxkbGlmZSBpbiBzYWZlLCBwZWFjZWZ1bCBzdXJyb3VuZGluZ3MuIE91ciB0b3VycyBmb2N1cyBvbiB0aGlzIGNvbnRpbmVudFxcJ3MgdW5pcXVlIGZsb3JhIGFuZCBmYXVuYS4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc0LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBc2lhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdDaG9vc2UgYSBOYXR1cmV0b3VyIHdpbGRsaWZlIGhvbGlkYXkgdG8gQXNpYSBhbmQgYmVuZWZpdCBmcm9tIG91ciBleHBlcmllbmNlIG9mIG92ZXIgMjAgeWVhcnMsIGFuZCBhbWF6aW5nIG5ldHdvcmsgb2YgbG9jYWwgY29udGFjdHMsIG9uIHRoaXMgaW5jcmVkaWJseSBkaXZlcnNlIGNvbnRpbmVudC4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICczLnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBbnRhcmN0aWNhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdUaGUg4oCYR3JlYXQgV2hpdGUgQ29udGluZW504oCZIGlzIHBlcmhhcHMgdGhlIGxhc3QgdHJ1ZSB3aWxkZXJuZXNzIGxlZnQgb24gZWFydGggYW5kIHVsdGltYXRlIHdpbGRsaWZlIGhvbGlkYXkgZGVzdGluYXRpb24uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnMi5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQW1lcmljYXMgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ05vcnRoLCBTb3V0aCBhbmQgQ2VudHJhbCBBbWVyaWNhIGFyZSBob21lIHRvIGFuIGluY3JlZGlibGUgZGl2ZXJzaXR5IG9mIGhhYml0YXRzIGFuZCBzcGVjaWVzLCBwcm92aWRpbmcgb3Bwb3J0dW5pdGllcyBmb3Igd2lsZGxpZmUgaG9saWRheXMgdG8gc3VpdCBhbGwgdGFzdGVzLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzEucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FmcmljYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnRmV3IHdpbGRsaWZlIGVudGh1c2lhc3RzIGNhbiByZXNpc3QgQWZyaWNhLiBJdHMgZXhjZXB0aW9uYWwgYWJ1bmRhbmNlIGFuZCB2YXJpZXR5IG9mIHdpbGQgYW5pbWFscyBtYWtlIGl0IG9uZSBvZiB0aGUgd29ybGTigJlzIHRvcCB3aWxkbGlmZSBob2xpZGF5IGRlc3RpbmF0aW9ucy4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc0LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBc2lhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdDaG9vc2UgYSBOYXR1cmV0b3VyIHdpbGRsaWZlIGhvbGlkYXkgdG8gQXNpYSBhbmQgYmVuZWZpdCBmcm9tIG91ciBleHBlcmllbmNlIG9mIG92ZXIgMjAgeWVhcnMsIGFuZCBhbWF6aW5nIG5ldHdvcmsgb2YgbG9jYWwgY29udGFjdHMsIG9uIHRoaXMgaW5jcmVkaWJseSBkaXZlcnNlIGNvbnRpbmVudC4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc1LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBdXN0cmFsYXNpYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQXVzdHJhbGlhIGFuZCBOZXcgWmVhbGFuZCBvZmZlciBleHRyYW9yZGluYXJ5IHdpbGRsaWZlIGluIHNhZmUsIHBlYWNlZnVsIHN1cnJvdW5kaW5ncy4gT3VyIHRvdXJzIGZvY3VzIG9uIHRoaXMgY29udGluZW50XFwncyB1bmlxdWUgZmxvcmEgYW5kIGZhdW5hLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblxyXG5cdFx0XHRcdGJ5VG91clR5cGU6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc1LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBdXN0cmFsYXNpYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQXVzdHJhbGlhIGFuZCBOZXcgWmVhbGFuZCBvZmZlciBleHRyYW9yZGluYXJ5IHdpbGRsaWZlIGluIHNhZmUsIHBlYWNlZnVsIHN1cnJvdW5kaW5ncy4gT3VyIHRvdXJzIGZvY3VzIG9uIHRoaXMgY29udGluZW50XFwncyB1bmlxdWUgZmxvcmEgYW5kIGZhdW5hLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzIucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FtZXJpY2FzIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdOb3J0aCwgU291dGggYW5kIENlbnRyYWwgQW1lcmljYSBhcmUgaG9tZSB0byBhbiBpbmNyZWRpYmxlIGRpdmVyc2l0eSBvZiBoYWJpdGF0cyBhbmQgc3BlY2llcywgcHJvdmlkaW5nIG9wcG9ydHVuaXRpZXMgZm9yIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHN1aXQgYWxsIHRhc3Rlcy4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICczLnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBbnRhcmN0aWNhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdUaGUg4oCYR3JlYXQgV2hpdGUgQ29udGluZW504oCZIGlzIHBlcmhhcHMgdGhlIGxhc3QgdHJ1ZSB3aWxkZXJuZXNzIGxlZnQgb24gZWFydGggYW5kIHVsdGltYXRlIHdpbGRsaWZlIGhvbGlkYXkgZGVzdGluYXRpb24uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnNC5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQXNpYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQ2hvb3NlIGEgTmF0dXJldG91ciB3aWxkbGlmZSBob2xpZGF5IHRvIEFzaWEgYW5kIGJlbmVmaXQgZnJvbSBvdXIgZXhwZXJpZW5jZSBvZiBvdmVyIDIwIHllYXJzLCBhbmQgYW1hemluZyBuZXR3b3JrIG9mIGxvY2FsIGNvbnRhY3RzLCBvbiB0aGlzIGluY3JlZGlibHkgZGl2ZXJzZSBjb250aW5lbnQuJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnNi5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnRXVyb3BlIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdOYXR1cmV0b3VyIHdpbGRsaWZlIGhvbGlkYXlzIGluIEV1cm9wZSBmb2N1cyBvbiB0aGUgb3V0c3RhbmRpbmcgd2lsZGxpZmUgaGFiaXRhdHMgYW5kIHNwZWNpZXMgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIHJlZ2lvbi4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINC/0L7QtNC60LvRh9C10L3QuNC1INGI0LDQsdC70L7QvdC40LfQsNGC0L7RgNCwIDIg0LTQu9GPINGC0LDQsdC+0LJcclxuXHRcdFx0dmFyIGh0bWxUZXh0ID0gJCgnI3RlbXBsaXRlMicpLmh0bWwoKSxcclxuXHRcdFx0c2xpZGVycyA9ICQoJy5tYXRlcmlhbHMnKSxcclxuXHRcdFx0dGV4dCA9ICcnO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8g0L/QvtC60LDQtyDQvNCw0YLQtdGA0LjQsNC70L7QsiDQvdCwINC+0YHQvdC+0LLQsNC90LjQuCDQsNC60YLQuNCy0L3QvtCz0L4g0YLQsNCx0LBcclxuXHRcdFx0ZnVuY3Rpb24gYWRkTWF0ZXJpYWxzKCkge1xyXG5cdFx0XHRcdHNsaWRlcnMuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuXHJcblx0XHRcdFx0dmFyIHNlbGVjdFRhYnMgPSAkKCdsaVtjbGFzcz1zb3J0QmFyLWFjdGl2ZV0nKVswXS5pZDtcclxuXHJcblx0XHRcdFx0c3dpdGNoKHNlbGVjdFRhYnMpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3NvcnRCYXJfb25lJyA6ICB2YXIgdGV4dCA9IHRtcGwoaHRtbFRleHQsIHtkYXRhOiBtYXRlcmlhbHNJdGVtLmJ5RGVzdGluYXRpb259KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29ydEJhcl90b3cnIDogIHZhciB0ZXh0ID0gdG1wbChodG1sVGV4dCwge2RhdGE6IG1hdGVyaWFsc0l0ZW0uYnlTcGVjaWVzfSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NvcnRCYXJfdGhyZScgOiB2YXIgdGV4dCA9IHRtcGwoaHRtbFRleHQsIHtkYXRhOiBtYXRlcmlhbHNJdGVtLmJ5VG91clR5cGV9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdCA6IHZhciB0ZXh0ID0gJ0Vycm9yJztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2xpZGVycy5hcHBlbmQodGV4dCk7IC8vINC00L7QsdCw0LLQu9C10L3QuNC1INC80LDRgtC10YDQuNCw0LvQvtCyINGB0L/QvtC80L7RidGM0Y4g0YjQsNCx0LvQvtC90LjQt9Cw0YLQvtGA0LBcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGB0LrRgNGL0YLQuNC1INC80LDRgtC10YDQuNCw0LvQvtCyINC90LAg0L7RgdC90L7QstCw0L3QuNC4INC90LXQsNC60YLQuNCy0L3QvtCz0L4g0YLQsNCx0LBcclxuXHRcdFx0ZnVuY3Rpb24gcmVtb3ZlTWF0ZXJpYWxzKCkge1xyXG5cclxuXHRcdFx0XHRzbGlkZXJzLmNzcygnb3BhY2l0eScsICcwLjAnKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0JCgnLml0ZW0nKS5yZW1vdmUodGV4dCk7XHJcblxyXG5cdFx0XHRcdH0sIDMwMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINC+0L/RgNC10LTQtdC70LXQvdC40LUg0L3QsNC20LDRgtC40LUg0L3QsCDRgtCw0LEg0Lgg0LjQt9C80LXQvdC10L3QuNC1INC60LvQsNGB0YHQsCAo0LDQutGC0LjQstC90YvQuS/QvdC10LDQutGC0LjQstC90YvQuSlcclxuXHRcdFx0ZnVuY3Rpb24gY2hhbmdlVGFiIChlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBldmVudCA9IGUgfHwgZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuXHJcblx0XHRcdFx0dmFyIHNlbGVjdGVkTGkgPSAnJztcclxuXHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LnRhcmdldC5sb2NhbE5hbWUgPT0gJ2gyJykge1xyXG5cdFx0XHRcdFx0aWYodGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRMaSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmlkO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9ICBlbHNlIGlmKGV2ZW50LnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdsaScpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcclxuXHRcdFx0XHRcdHNlbGVjdGVkTGkgPSBldmVudC50YXJnZXQuaWQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZihldmVudC5zcmNFbGVtZW50LmxvY2FsTmFtZSA9PSAnaDInKSB7XHJcblx0XHRcdFx0XHRpZihldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkTGkgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkOyBcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZExpID0gZXZlbnQucGF0aFsxXS5pZDsgXHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdGVkTGkgPSBldmVudC5zcmNFbGVtZW50LmlkOyBcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXJUYWJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cclxuXHRcdFx0XHRcdGlmKHNsaWRlclRhYnNbaV0uY2xhc3NOYW1lID09ICdzb3J0QmFyLWFjdGl2ZScgJiYgc2xpZGVyVGFic1tpXS5pZCAhPSBzZWxlY3RlZExpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzbGlkZXJUYWJzW2ldLmNsYXNzTmFtZSA9ICdzb3J0QmFyLW5vQWN0aXZlJztcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoc2xpZGVyVGFic1tpXS5pZCA9PSBzZWxlY3RlZExpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzbGlkZXJUYWJzW2ldLmNsYXNzTmFtZSA9ICdzb3J0QmFyLWFjdGl2ZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdHJlbW92ZU1hdGVyaWFscygpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyAvLyDRgdGC0LjQu9C40LfQsNGG0LjRjyDQt9Cw0LzQtdC90Ysg0LzQsNGC0LXRgNC40LDQu9C+0LJcclxuXHJcblx0XHRcdFx0XHRhZGRNYXRlcmlhbHMoKTtcclxuXHJcblx0XHRcdFx0fSwgMzAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDRgtCw0LHRi1xyXG5cdFx0XHR2YXIgc2xpZGVyVGFicyA9ICQoJy5zb3J0QmFyJykuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xyXG5cdFx0XHRcclxuXHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzbGlkZXJUYWJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cdFx0XHRcdGlmIChkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIpe1xyXG5cclxuXHRcdFx0XHRcdHNsaWRlclRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWIsIGZhbHNlKTsgXHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5hdHRhY2hFdmVudCl7XHJcblxyXG5cdFx0XHRcdFx0c2xpZGVyVGFic1tpXS5hdHRhY2hFdmVudCgnb25jbGljaycsIGNoYW5nZVRhYik7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0XHRhZGRNYXRlcmlhbHMoKTtcclxuXHJcblx0XHRcdC8vINGC0LDQsdGLINGBINC80LDRgtC10YDQuNCw0LvQsNC80Lgg0L/QviDQvdCw0L/RgNCw0LLQu9C10L3QuNGP0LwgRU5EXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHRcdFx0Ly8g0YHQtdC70LXQutGC0YsgU1RBUlRcclxuXHJcblx0XHRcdHZhciBzZWxlY3RFbGVtZW50cyA9IHsgLy8g0LTQsNC90L3Ri9C1INCy0YvQstC+0LTQuNC80YvQtSDQsiDRgdC10LvQtdC60YLQvtGA0LDRhVxyXG5cdFx0XHRcdHNlbGVjdFJlZ2lvbjogWyAnQWZyaWNhJywgJ0FtZXJpY2EnLCAnQW50YXJjdGljYScsICdBc2lhJywgJ0F1c3RyYWxhc2lhJywgJ0V1cm9wZScgXSxcclxuXHRcdFx0XHRzZWxlY3RDYXRlZ29yeTogWydPbmUnLCAnVG93JywgJ1RocmUnLCAnVG91cicsICdGaXZlJ10sXHJcblx0XHRcdFx0c2VsZWN0RGF0ZTogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSwgXHJcblx0XHRcdFx0c2VsZWN0UHJpY2U6IFsnIGxlc3MgNTAwJywgJzUwMCAtIDEwMDAnLCAnMTAwMCAtIDE1MDAnLCAnMTUwMCBtb3JlICddLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YXIgc2VsZWN0V3JhcCA9ICQoJy50cmFuc3BhcmVudCcpO1xyXG5cclxuXHJcblx0XHRcdHZhciBjID0gMDtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIHNlbGVjdE9wZW4oZSkgeyBcclxuXHJcblxyXG5cdFx0XHRcdHZhciBldmVudCA9IGUgfHwgZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuXHJcblx0XHRcdFx0Ly8g0L/RgNC+0LLQtdGA0LrQsCDQv9C10YDQtdC00LDQtdGC0YHRjyDQu9C4IGlkXHJcblx0XHRcdFx0aWYoZXZlbnQudGFyZ2V0LmlkKXtcclxuXHJcblxyXG5cdFx0XHRcdFx0dmFyIGFjdGl2ZVNlbGVjdElucHV0ID0gJCgnIycgKyB0YXJnZXQuaWQpLnBhcmVudCgpLmNoaWxkcmVuKClbMF0sXHJcblx0XHRcdFx0XHRuYW1lTWF0ZXJpYWxzID0gdGFyZ2V0LmlkO1xyXG5cclxuXHRcdFx0XHRcdHZhciBzZWxlY3RlZElkID0gJCgnIycgKyB0YXJnZXQuaWQpO1xyXG5cclxuXHJcblx0XHRcdFx0Ly8g0L/RgNC+0LLQtdGA0LrQsCDQsNC60YLQuNCy0L3Ri9C5IHNlbGVjdCDQuNC70Lgg0L7QvSBkaXNhYmxlZCDRhNGD0L3QutGG0LjRjyDQstC+0LfQstGA0LDRidCw0LXRgiB0cnVlL2ZhbHNlXHJcblx0XHRcdFx0aWYoY3JlYXRlTGlzdCgpKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdGVkSWRbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNwYXJlbnQnKTtcclxuXHRcdFx0XHRcdHNlbGVjdGVkSWRbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLXNlbGVjdCcpO1xyXG5cclxuXHJcblx0XHRcdFx0XHRpZihzZWxlY3RlZElkLmFwcGVuZCA9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkSWQuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdCgpKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRJZC5hcHBlbmQoY3JlYXRlTGlzdCgpKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDRg9C00LDQu9C10L3QuNGPINC/0YDQvtGB0LvRg9GI0LXQstCw0L3QuNGPINGN0YLQvtC5INCy0YvQsdC+0YDQutC4XHJcblx0XHRcdFx0XHRyZW1vdXZlTGlzZW5lclNlbGVjdChzZWxlY3RXcmFwLCBzZWxlY3RPcGVuKTtcclxuXHJcblxyXG5cdFx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDQstGL0LHQvtGAINGN0LvQtdC80LXQvdGC0LAgU1RBUlRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgbGlJdGVtID0gc2VsZWN0ZWRJZC5maW5kKCcudHJhbnNwYXJlbnQtbGlzdC1pdGVtJyk7XHJcblxyXG5cdFx0XHRcdGFkZExpc2VuZXJTZWxlY3QobGlJdGVtLCBnZXRJdGVuKVxyXG5cdFx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdC70YPRiNCw0YLQtdC70Y8g0L3QsCDQstGL0LHQvtGAINGN0LvQtdC80LXQvdGC0LAgRU5EXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LHQtdGA0LXQvCDQstGL0LHRgNCw0L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0Lgg0L/QtdGA0LXQtNCw0LXQvCDQsiBzZWxlY3RcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIGdldEl0ZW4oZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGV2ZW50ID0gZSB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0XHRcdFx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuXHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaXRlbVZhbHVlID0gdGFyZ2V0LmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHRcdHNldEl0ZW1TZWxlY3QoaXRlbVZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dmFyIGNvdW50U2VsZWN0ID0gMDtcclxuXHJcblx0XHRcdFx0Ly8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQsiBzZWxlY3RcclxuXHRcdFx0XHRmdW5jdGlvbiBzZXRJdGVtU2VsZWN0KHZhbCkge1xyXG5cclxuXHRcdFx0XHRcdHJlbW91dmVMaXNlbmVyU2VsZWN0KGxpSXRlbSwgZ2V0SXRlbik7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgbmV4dFNlbGVjdCA9ICQoJyMnICsgdGFyZ2V0LmlkKS5wYXJlbnQoKS5uZXh0KClbMF0uY2hpbGRyZW5bMF07XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0YPQsdC40YDQsNC10Lwg0LDRgtGA0LjQsdGD0YIg0YMg0YHQu9C10LTRg9GO0YnQtdCz0L4gaW5wdXRcclxuXHRcdFx0XHRcdFx0aWYobmV4dFNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgbmV4dFNlbGVjdC50eXBlID09IFwidGV4dFwiKXtcclxuXHRcdFx0XHRcdFx0XHRuZXh0U2VsZWN0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Y291bnRTZWxlY3QrKztcclxuXHJcblx0XHRcdFx0XHRcdGFjdGl2ZVNlbGVjdElucHV0LnZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRJZFswXS5jbGFzc0xpc3QudG9nZ2xlKCd0cmFuc3BhcmVudCcpO1xyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZElkWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1zZWxlY3QnKTtcclxuXHJcblxyXG5cdFx0XHRcdFx0JCgnLnRyYW5zcGFyZW50LWxpc3QnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gYWRkTGlzZW5lclNlbGVjdChzZWxlY3RXcmFwLCBzZWxlY3RPcGVuKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vINGB0L7Qt9C00LDQtdC8INCh0L/QuNGB0L7QuiBTVEFSVFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlTGlzdCAoKSB7XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHRcdGlmKCFhY3RpdmVTZWxlY3RJbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBpbnNlcnRhYmxlVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdFx0XHRcdFx0XHRcdGluc2VydGFibGVVbC5jbGFzc05hbWUgPSAndHJhbnNwYXJlbnQtbGlzdCc7XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0JLRi9Cx0LjRgNCw0LXQvCDRh9GC0L4g0LLRgdGC0LDQstC70Y/RgtGMXHJcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RBcnJheU1hdGVyaWFscyA9ICBzZWxlY3RFbGVtZW50c1t0YXJnZXQuaWRdO1xyXG5cclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0QXJyYXlNYXRlcmlhbHMubGVuZ3RoOyBpKyspe1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgaW5zZXJ0YWJsZWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdFx0XHRcdFx0XHRpbnNlcnRhYmxlbGkuY2xhc3NOYW1lID0gJ3RyYW5zcGFyZW50LWxpc3QtaXRlbSc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGluc2VydGFibGVsaS5pbm5lckhUTUwgPSBzZWxlY3RBcnJheU1hdGVyaWFsc1tpXTtcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKGluc2VydGFibGVVbC5hcHBlbmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aW5zZXJ0YWJsZVVsLmFwcGVuZENoaWxkKGluc2VydGFibGVsaSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aW5zZXJ0YWJsZVVsLmFwcGVuZChpbnNlcnRhYmxlbGkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaW5zZXJ0YWJsZVVsO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g0YHQvtC30LTQsNC10Lwg0KHQv9C40YHQvtC6IEVORFxyXG5cclxuXHRcdFx0XHRjKys7XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Ly8g0LTQvtCx0LDQstC70LXQvdC40LUg0YHQu9GD0YjQsNGC0LXQu9GPINC90LAg0YHQtdC70LXQutGC0YtcclxuXHRcdFx0ZnVuY3Rpb24gYWRkTGlzZW5lclNlbGVjdCAoZWxlbWVudCwgZnVuYywgZnVuY0FjdGl2KSB7XHJcblxyXG5cclxuXHRcdFx0XHR2YXIgdmFsQWN0aXYgPSAnY2xpY2snO1xyXG5cdFx0XHRcdGlmKGZ1bmNBY3Rpdikge1xyXG5cdFx0XHRcdFx0dmFsQWN0aXYgPSBmdW5jQWN0aXY7XHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKXtcclxuXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRbaV0uYWRkRXZlbnRMaXN0ZW5lcih2YWxBY3RpdiwgZnVuYywgZmFsc2UpOyBcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuYXR0YWNoRXZlbnQpe1xyXG5cclxuXHRcdFx0XHRcdFx0aWYodmFsQWN0aXYgPT0gJ2NsaWNrJykge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRbaV0uYXR0YWNoRXZlbnQoJ29uJyArIHZhbEFjdGl2LCBmdW5jKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudFtpXS5vbmlucHV0ID0gZnVuYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiByZW1vdXZlTGlzZW5lclNlbGVjdCAoZWxlbWVudCwgZnVuYykge1xyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtZW50W2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYywgZmFsc2UpOyBcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuZGV0YWNoRXZlbnQgKXtcclxuXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRbaV0uZGV0YWNoRXZlbnQgKCdvbmNsaWNrJywgZnVuYyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YWRkTGlzZW5lclNlbGVjdChzZWxlY3RXcmFwLCBzZWxlY3RPcGVuKTtcclxuXHJcblx0XHRcdC8vINGB0LXQu9C10LrRgtGLIEVORFxyXG5cclxuXHRcdH07Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
