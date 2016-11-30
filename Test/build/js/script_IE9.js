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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRfSUU5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG5cdC8vICd1c2Ugc3RyaWN0JztcclxuXHJcbi8vICDRgdC70LDQudC00LXRgCBTVEFSVFxyXG5cclxudmFyIHNsaWRlciA9IHtcclxuXHRzbGlkZVBvc2l0aW9uOiBbICcwIDAnLCAnLTcwNXB4IDAnLCAnLTE0MTBweCAwJywgJy0yMTE1cHggMCcgXSxcclxuXHRmcmFtZTogMCxcclxuXHRmaXJzdFRleHQgOiBbICdPdXInLCAnT3VyIDInLCAnT3VyIDMnLCAnT3VyIDQnIF0sXHJcblx0c2Vjb25kVGV4dCA6IFsgJ05ldyBUb3VycycsICdOZXcgVG91cnMgMicsICdOZXcgVG91cnMgMycsICdOZXcgVG91cnMgNCcgXSxcclxuXHRwYXJhZ3JhZmVyOiBbIFxyXG5cdCdBdCBOYXR1cmV0b3VyIHdlIGFyZSBjb25zdGFudGx5IGFkZGluZyB0byBhbmQgaW1wcm92aW5nIG91ciBwb3J0Zm9saW8gb2Ygd2lsZGxpZmUgaG9saWRheXMgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhbiBldmVuIGdyZWF0ZXIgY2hvaWNlIG9mIHdpbGRsaWZlIHZpZXdpbmcgZXhwZXJpZW5jZXMuJyxcclxuXHQnQXQgTmF0dXJldG91ciB3ZSBhcmUgY29uc3RhbnRseSBhZGRpbmcgdG8gYW5kIGltcHJvdmluZyBvdXIgcG9ydGZvbGlvIG9mIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHByb3ZpZGUgeW91IHdpdGggYW4gZXZlbiBncmVhdGVyIGNob2ljZSBvZiB3aWxkbGlmZSB2aWV3aW5nIGV4cGVyaWVuY2VzLiAgTG9yZW0gaXBzdW0gZG9sb3IuJyxcclxuXHQnQXQgTmF0dXJldG91ciB3ZSBhcmUgY29uc3RhbnRseSBhZGRpbmcgdG8gYW5kIGltcHJvdmluZyBvdXIgcG9ydGZvbGlvIG9mIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHByb3ZpZGUgeW91IHdpdGggYW4gZXZlbiBncmVhdGVyIGNob2ljZSBvZiB3aWxkbGlmZSB2aWV3aW5nIGV4cGVyaWVuY2VzLicsXHJcblx0J0F0IE5hdHVyZXRvdXIgd2UgYXJlIGNvbnN0YW50bHkgYWRkaW5nIHRvIGFuZCBpbXByb3Zpbmcgb3VyIHBvcnRmb2xpbyBvZiB3aWxkbGlmZSBob2xpZGF5cyB0byBwcm92aWRlIHlvdSB3aXRoIGFuIGV2ZW4gZ3JlYXRlciBjaG9pY2Ugb2Ygd2lsZGxpZmUgdmlld2luZyBleHBlcmllbmNlcy4nXHJcblx0XSxcclxuXHRsaW5rVGV4dCA6IFsgJ1ZpZXcgbmV3IHRvdXJzLi4uJywgJ1ZpZXcgbmV3IHRvdXJzLi4uJywgJ1ZpZXcgbmV3IHRvdXJzLi4uJywgJ1ZpZXcgbmV3IHRvdXJzLi4uJyBdLFxyXG5cdGxpbmtIcmVmIDogWyAnIzEnLCAnIzInLCAnIzMnLCAnIzQnIF0sXHJcblx0Y2hlY2tib3hzIDogJycsXHJcblx0c2hvdyA6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQkKCcjZmlyc2ZUZXh0JylbMF0uaW5uZXJIVE1MID0gdGhpcy5maXJzdFRleHRbdGhpcy5mcmFtZV07XHJcblx0XHQkKCcjc2Vjb25kVGV4dCcpWzBdLmlubmVySFRNTD0gdGhpcy5zZWNvbmRUZXh0W3RoaXMuZnJhbWVdO1xyXG5cdFx0JCgnI3BhcmFncmFmZXInKVswXS5pbm5lckhUTUwgPSB0aGlzLnBhcmFncmFmZXJbdGhpcy5mcmFtZV07XHJcblx0XHQkKCcjc2xpZGVMaW5rJylbMF0uaW5uZXJIVE1MID0gdGhpcy5saW5rVGV4dFt0aGlzLmZyYW1lXTtcclxuXHRcdCQoJyNzbGlkZUxpbmsnKVswXS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLmxpbmtIcmVmW3RoaXMuZnJhbWVdKTtcclxuXHRcdCQoJy5zbGlkcycpWzBdLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHRoaXMuc2xpZGVQb3NpdGlvblt0aGlzLmZyYW1lXTtcclxuXHJcblx0fSxcclxuXHJcblxyXG5cdGluaXRMYWJlbCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5jaGVja2JveHMgPSAkKCcuc2xpZHMtcGFuZWwtY29udHJvbCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG5cdFx0dGhpcy5zZXRMYWJlbCgpO1xyXG5cdH0sXHJcblxyXG5cclxuXHRzZXRMYWJlbCA6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHRoaXMuY2hlY2tib3hzW3RoaXMuZnJhbWVdLmNoZWNrZWQgPSB0cnVlO1x0XHRcdFxyXG5cdFx0dGhpcy5zaG93KCk7XHJcblxyXG5cdH0sXHJcblxyXG5cclxuXHJcblx0bmV4dExhYmVsIDogZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQuc3JjRWxlbWVudDtcclxuXHJcblxyXG5cclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnNyY0VsZW1lbnQuaWQuY2hhckF0KGV2ZW50LnNyY0VsZW1lbnQuaWQubGVuZ3RoIC0gMSkgLSAxKTtcclxuXHJcblx0XHRpZihldmVudC5zcmNFbGVtZW50LmlkKSB7XHJcblxyXG5cdFx0XHRzbGlkZXIuZnJhbWUgPSBldmVudC5zcmNFbGVtZW50LmlkLmNoYXJBdChldmVudC5zcmNFbGVtZW50LmlkLmxlbmd0aCAtIDEpIC0gMTtcclxuXHJcblx0XHR9IFxyXG5cclxuXHJcblx0XHRzbGlkZXIuc2hvdygpO1xyXG5cdH0sXHJcblxyXG5cdG5leHRTbGlkZSA6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHRoaXMuY2hlY2tib3hzW3RoaXMuZnJhbWVdLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHNsaWRlci5mcmFtZSsrO1xyXG5cclxuXHRcdGlmKHNsaWRlci5mcmFtZSA9PSBzbGlkZXIuc2xpZGVQb3NpdGlvbi5sZW5ndGgpIHtcclxuXHRcdFx0c2xpZGVyLmZyYW1lID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldExhYmVsKCk7XHJcblx0fSxcclxuXHJcblxyXG5cdGxpc3RlbmVyIDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyIHcgPSAkKCcuc2xpZHMtcGFuZWwtY29udHJvbCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHcubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdHdbaV0uYXR0YWNoRXZlbnQoJ29uY2xpY2snLCB0aGlzLm5leHRMYWJlbCk7XHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblxyXG59XHJcblxyXG4vLyDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QsNGPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPICjQstGL0LfQvtCyKVxyXG5zbGlkZXIuaW5pdExhYmVsKCk7XHJcbnNsaWRlci5saXN0ZW5lcigpO1xyXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgLy8g0YHRgtCw0LLQuNC8INC/0Y/RgtC40YHQtdC60YPQvdC00L3Ri9C5INC40L3RgtC10YDQstCw0Lsg0LTQu9GPINC/0LXRgNC10LvQuNGB0YLRi9Cy0LDQvdC40Y8g0LrQsNGA0YLQuNC90L7QulxyXG5cdHNsaWRlci5uZXh0U2xpZGUoKTtcclxufSw1MDAwKTtcclxuXHJcblx0XHRcdC8vICDRgdC70LDQudC00LXRgCBFTkQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU1RBUlQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cdFx0XHQvLyDRgdC70LDQudC00LXRgCDRgSDQvNCw0YLQtdGA0LjQsNC70LDQvNC4INC/0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRj9C8IFNUQVJUXHJcblx0XHRcdHZhciBtYXRlcmlhbHNJdGVtID0ge1xyXG5cdFx0XHRcdGJ5RGVzdGluYXRpb246IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICcxLnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBZnJpY2EgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ0ZldyB3aWxkbGlmZSBlbnRodXNpYXN0cyBjYW4gcmVzaXN0IEFmcmljYS4gSXRzIGV4Y2VwdGlvbmFsIGFidW5kYW5jZSBhbmQgdmFyaWV0eSBvZiB3aWxkIGFuaW1hbHMgbWFrZSBpdCBvbmUgb2YgdGhlIHdvcmxk4oCZcyB0b3Agd2lsZGxpZmUgaG9saWRheSBkZXN0aW5hdGlvbnMuJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnMi5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQW1lcmljYXMgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ05vcnRoLCBTb3V0aCBhbmQgQ2VudHJhbCBBbWVyaWNhIGFyZSBob21lIHRvIGFuIGluY3JlZGlibGUgZGl2ZXJzaXR5IG9mIGhhYml0YXRzIGFuZCBzcGVjaWVzLCBwcm92aWRpbmcgb3Bwb3J0dW5pdGllcyBmb3Igd2lsZGxpZmUgaG9saWRheXMgdG8gc3VpdCBhbGwgdGFzdGVzLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzMucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FudGFyY3RpY2EgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ1RoZSDigJhHcmVhdCBXaGl0ZSBDb250aW5lbnTigJkgaXMgcGVyaGFwcyB0aGUgbGFzdCB0cnVlIHdpbGRlcm5lc3MgbGVmdCBvbiBlYXJ0aCBhbmQgdWx0aW1hdGUgd2lsZGxpZmUgaG9saWRheSBkZXN0aW5hdGlvbi4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc0LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBc2lhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdDaG9vc2UgYSBOYXR1cmV0b3VyIHdpbGRsaWZlIGhvbGlkYXkgdG8gQXNpYSBhbmQgYmVuZWZpdCBmcm9tIG91ciBleHBlcmllbmNlIG9mIG92ZXIgMjAgeWVhcnMsIGFuZCBhbWF6aW5nIG5ldHdvcmsgb2YgbG9jYWwgY29udGFjdHMsIG9uIHRoaXMgaW5jcmVkaWJseSBkaXZlcnNlIGNvbnRpbmVudC4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc1LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBdXN0cmFsYXNpYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQXVzdHJhbGlhIGFuZCBOZXcgWmVhbGFuZCBvZmZlciBleHRyYW9yZGluYXJ5IHdpbGRsaWZlIGluIHNhZmUsIHBlYWNlZnVsIHN1cnJvdW5kaW5ncy4gT3VyIHRvdXJzIGZvY3VzIG9uIHRoaXMgY29udGluZW50XFwncyB1bmlxdWUgZmxvcmEgYW5kIGZhdW5hLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzYucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0V1cm9wZSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnTmF0dXJldG91ciB3aWxkbGlmZSBob2xpZGF5cyBpbiBFdXJvcGUgZm9jdXMgb24gdGhlIG91dHN0YW5kaW5nIHdpbGRsaWZlIGhhYml0YXRzIGFuZCBzcGVjaWVzIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSByZWdpb24uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHJcblx0XHRcdFx0YnlTcGVjaWVzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnNi5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnRXVyb3BlIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdOYXR1cmV0b3VyIHdpbGRsaWZlIGhvbGlkYXlzIGluIEV1cm9wZSBmb2N1cyBvbiB0aGUgb3V0c3RhbmRpbmcgd2lsZGxpZmUgaGFiaXRhdHMgYW5kIHNwZWNpZXMgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIHJlZ2lvbi4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc1LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBdXN0cmFsYXNpYSBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQXVzdHJhbGlhIGFuZCBOZXcgWmVhbGFuZCBvZmZlciBleHRyYW9yZGluYXJ5IHdpbGRsaWZlIGluIHNhZmUsIHBlYWNlZnVsIHN1cnJvdW5kaW5ncy4gT3VyIHRvdXJzIGZvY3VzIG9uIHRoaXMgY29udGluZW50XFwncyB1bmlxdWUgZmxvcmEgYW5kIGZhdW5hLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzQucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FzaWEgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ0Nob29zZSBhIE5hdHVyZXRvdXIgd2lsZGxpZmUgaG9saWRheSB0byBBc2lhIGFuZCBiZW5lZml0IGZyb20gb3VyIGV4cGVyaWVuY2Ugb2Ygb3ZlciAyMCB5ZWFycywgYW5kIGFtYXppbmcgbmV0d29yayBvZiBsb2NhbCBjb250YWN0cywgb24gdGhpcyBpbmNyZWRpYmx5IGRpdmVyc2UgY29udGluZW50LidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzMucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FudGFyY3RpY2EgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ1RoZSDigJhHcmVhdCBXaGl0ZSBDb250aW5lbnTigJkgaXMgcGVyaGFwcyB0aGUgbGFzdCB0cnVlIHdpbGRlcm5lc3MgbGVmdCBvbiBlYXJ0aCBhbmQgdWx0aW1hdGUgd2lsZGxpZmUgaG9saWRheSBkZXN0aW5hdGlvbi4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICcyLnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBbWVyaWNhcyBIb2xpZGF5cycsXHJcblx0XHRcdFx0XHR0ZXh0OiAnTm9ydGgsIFNvdXRoIGFuZCBDZW50cmFsIEFtZXJpY2EgYXJlIGhvbWUgdG8gYW4gaW5jcmVkaWJsZSBkaXZlcnNpdHkgb2YgaGFiaXRhdHMgYW5kIHNwZWNpZXMsIHByb3ZpZGluZyBvcHBvcnR1bml0aWVzIGZvciB3aWxkbGlmZSBob2xpZGF5cyB0byBzdWl0IGFsbCB0YXN0ZXMuJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnMS5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQWZyaWNhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdGZXcgd2lsZGxpZmUgZW50aHVzaWFzdHMgY2FuIHJlc2lzdCBBZnJpY2EuIEl0cyBleGNlcHRpb25hbCBhYnVuZGFuY2UgYW5kIHZhcmlldHkgb2Ygd2lsZCBhbmltYWxzIG1ha2UgaXQgb25lIG9mIHRoZSB3b3JsZOKAmXMgdG9wIHdpbGRsaWZlIGhvbGlkYXkgZGVzdGluYXRpb25zLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzQucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FzaWEgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ0Nob29zZSBhIE5hdHVyZXRvdXIgd2lsZGxpZmUgaG9saWRheSB0byBBc2lhIGFuZCBiZW5lZml0IGZyb20gb3VyIGV4cGVyaWVuY2Ugb2Ygb3ZlciAyMCB5ZWFycywgYW5kIGFtYXppbmcgbmV0d29yayBvZiBsb2NhbCBjb250YWN0cywgb24gdGhpcyBpbmNyZWRpYmx5IGRpdmVyc2UgY29udGluZW50LidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzUucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0F1c3RyYWxhc2lhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdBdXN0cmFsaWEgYW5kIE5ldyBaZWFsYW5kIG9mZmVyIGV4dHJhb3JkaW5hcnkgd2lsZGxpZmUgaW4gc2FmZSwgcGVhY2VmdWwgc3Vycm91bmRpbmdzLiBPdXIgdG91cnMgZm9jdXMgb24gdGhpcyBjb250aW5lbnRcXCdzIHVuaXF1ZSBmbG9yYSBhbmQgZmF1bmEuJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHJcblx0XHRcdFx0YnlUb3VyVHlwZTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzUucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0F1c3RyYWxhc2lhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdBdXN0cmFsaWEgYW5kIE5ldyBaZWFsYW5kIG9mZmVyIGV4dHJhb3JkaW5hcnkgd2lsZGxpZmUgaW4gc2FmZSwgcGVhY2VmdWwgc3Vycm91bmRpbmdzLiBPdXIgdG91cnMgZm9jdXMgb24gdGhpcyBjb250aW5lbnRcXCdzIHVuaXF1ZSBmbG9yYSBhbmQgZmF1bmEuJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1nVXJsOiAnMi5wbmcnLFxyXG5cdFx0XHRcdFx0dGl0bGVUZXh0OiAnQW1lcmljYXMgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ05vcnRoLCBTb3V0aCBhbmQgQ2VudHJhbCBBbWVyaWNhIGFyZSBob21lIHRvIGFuIGluY3JlZGlibGUgZGl2ZXJzaXR5IG9mIGhhYml0YXRzIGFuZCBzcGVjaWVzLCBwcm92aWRpbmcgb3Bwb3J0dW5pdGllcyBmb3Igd2lsZGxpZmUgaG9saWRheXMgdG8gc3VpdCBhbGwgdGFzdGVzLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltZ1VybDogJzMucG5nJyxcclxuXHRcdFx0XHRcdHRpdGxlVGV4dDogJ0FudGFyY3RpY2EgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ1RoZSDigJhHcmVhdCBXaGl0ZSBDb250aW5lbnTigJkgaXMgcGVyaGFwcyB0aGUgbGFzdCB0cnVlIHdpbGRlcm5lc3MgbGVmdCBvbiBlYXJ0aCBhbmQgdWx0aW1hdGUgd2lsZGxpZmUgaG9saWRheSBkZXN0aW5hdGlvbi4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc0LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdBc2lhIEhvbGlkYXlzJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdDaG9vc2UgYSBOYXR1cmV0b3VyIHdpbGRsaWZlIGhvbGlkYXkgdG8gQXNpYSBhbmQgYmVuZWZpdCBmcm9tIG91ciBleHBlcmllbmNlIG9mIG92ZXIgMjAgeWVhcnMsIGFuZCBhbWF6aW5nIG5ldHdvcmsgb2YgbG9jYWwgY29udGFjdHMsIG9uIHRoaXMgaW5jcmVkaWJseSBkaXZlcnNlIGNvbnRpbmVudC4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWdVcmw6ICc2LnBuZycsXHJcblx0XHRcdFx0XHR0aXRsZVRleHQ6ICdFdXJvcGUgSG9saWRheXMnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ05hdHVyZXRvdXIgd2lsZGxpZmUgaG9saWRheXMgaW4gRXVyb3BlIGZvY3VzIG9uIHRoZSBvdXRzdGFuZGluZyB3aWxkbGlmZSBoYWJpdGF0cyBhbmQgc3BlY2llcyB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgcmVnaW9uLidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0L/QvtC00LrQu9GH0LXQvdC40LUg0YjQsNCx0LvQvtC90LjQt9Cw0YLQvtGA0LAgMiDQtNC70Y8g0YLQsNCx0L7QslxyXG5cdFx0XHR2YXIgaHRtbFRleHQgPSAkKCcjdGVtcGxpdGUyJykuaHRtbCgpLFxyXG5cdFx0XHRzbGlkZXJzID0gJCgnLm1hdGVyaWFscycpLFxyXG5cdFx0XHR0ZXh0ID0gJyc7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyDQv9C+0LrQsNC3INC80LDRgtC10YDQuNCw0LvQvtCyINC90LAg0L7RgdC90L7QstCw0L3QuNC4INCw0LrRgtC40LLQvdC+0LPQviDRgtCw0LHQsFxyXG5cdFx0XHRmdW5jdGlvbiBhZGRNYXRlcmlhbHMoKSB7XHJcblx0XHRcdFx0c2xpZGVycy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzbGlkZXJzLmNzcygnZGlzcGxheScpKTtcclxuXHRcdFx0XHR2YXIgc2VsZWN0VGFicyA9ICQoJ2xpW2NsYXNzPXNvcnRCYXItYWN0aXZlXScpWzBdLmlkO1xyXG5cclxuXHRcdFx0XHRzd2l0Y2goc2VsZWN0VGFicykge1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29ydEJhcl9vbmUnIDogIHZhciB0ZXh0ID0gdG1wbChodG1sVGV4dCwge2RhdGE6IG1hdGVyaWFsc0l0ZW0uYnlEZXN0aW5hdGlvbn0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzb3J0QmFyX3RvdycgOiAgdmFyIHRleHQgPSB0bXBsKGh0bWxUZXh0LCB7ZGF0YTogbWF0ZXJpYWxzSXRlbS5ieVNwZWNpZXN9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29ydEJhcl90aHJlJyA6IHZhciB0ZXh0ID0gdG1wbChodG1sVGV4dCwge2RhdGE6IG1hdGVyaWFsc0l0ZW0uYnlUb3VyVHlwZX0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0IDogdmFyIHRleHQgPSAnRXJyb3InO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzbGlkZXJzLmFwcGVuZCh0ZXh0KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGB0LrRgNGL0YLQuNC1INC80LDRgtC10YDQuNCw0LvQvtCyINC90LAg0L7RgdC90L7QstCw0L3QuNC4INC90LXQsNC60YLQuNCy0L3QvtCz0L4g0YLQsNCx0LBcclxuXHRcdFx0ZnVuY3Rpb24gcmVtb3ZlTWF0ZXJpYWxzKCkge1xyXG5cclxuXHRcdFx0XHRzbGlkZXJzLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdCQoJy5pdGVtJykucmVtb3ZlKHRleHQpO1xyXG5cclxuXHRcdFx0XHR9LCAzMDApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQvtC/0YDQtdC00LXQu9C10L3QuNC1INC90LDQttCw0YLQuNC1INC90LAg0YLQsNCxINC4INC40LfQvNC10L3QtdC90LjQtSDQutC70LDRgdGB0LAgKNCw0LrRgtC40LLQvdGL0Lkv0L3QtdCw0LrRgtC40LLQvdGL0LkpXHJcblx0XHRcdGZ1bmN0aW9uIGNoYW5nZVRhYiAoKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSAgZXZlbnQuc3JjRWxlbWVudDtcclxuXHJcblx0XHRcdFx0dmFyIHNlbGVjdGVkTGkgPSAnJztcclxuXHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LnNyY0VsZW1lbnQubG9jYWxOYW1lID09ICdoMicpIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3RlZExpID0gZXZlbnQuc3JjRWxlbWVudFsncGFyZW50RWxlbWVudCddLmlkOyBcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3RlZExpID0gZXZlbnQuc3JjRWxlbWVudC5pZDsgXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlclRhYnMubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdFx0Ly8gc2xpZGVyVGFic1tpXS5cclxuXHRcdFx0XHRpZihzbGlkZXJUYWJzW2ldLmNsYXNzTmFtZSA9PSAnc29ydEJhci1hY3RpdmUnICYmIHNsaWRlclRhYnNbaV0uaWQgIT0gc2VsZWN0ZWRMaSkge1xyXG5cclxuXHRcdFx0XHRcdHNsaWRlclRhYnNbaV0uY2xhc3NOYW1lID0gJ3NvcnRCYXItbm9BY3RpdmUnO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYoc2xpZGVyVGFic1tpXS5pZCA9PSBzZWxlY3RlZExpKSB7XHJcblxyXG5cdFx0XHRcdFx0c2xpZGVyVGFic1tpXS5jbGFzc05hbWUgPSAnc29ydEJhci1hY3RpdmUnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coc2VsZWN0ZWRMaSk7XHJcblx0XHRcdFx0cmVtb3ZlTWF0ZXJpYWxzKCk7XHJcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0YWRkTWF0ZXJpYWxzKCk7XHJcblxyXG5cdFx0XHRcdH0sIDMwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Ly8g0LTQvtCx0LDQstC70LXQvdC40LUg0YHQu9GD0YjQsNGC0LXQu9GPINC90LAg0YLQsNCx0YtcclxuXHRcdFx0dmFyIHNsaWRlclRhYnMgPSAkKCcuc29ydEJhcicpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coc2xpZGVyVGFic1syXS5pbm5lckhUTUwpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNsaWRlclRhYnMubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdFx0c2xpZGVyVGFic1tpXS5hdHRhY2hFdmVudCgnb25jbGljaycsIGNoYW5nZVRhYik7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRcdGFkZE1hdGVyaWFscygpO1xyXG5cclxuXHRcdFx0Ly8g0YHQu9Cw0LnQtNC10YAg0YEg0LzQsNGC0LXRgNC40LDQu9Cw0LzQuCDQv9C+INC90LDQv9GA0LDQstC70LXQvdC40Y/QvCBFTkQgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAtLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblx0XHRcdC8vINGB0LXQu9C10LrRgtGLIFNUQVJUXHJcblxyXG5cdFx0XHR2YXIgc2VsZWN0RWxlbWVudHMgPSB7XHJcblx0XHRcdFx0c2VsZWN0UmVnaW9uOiBbICdBZnJpY2EnLCAnQW1lcmljYScsICdBbnRhcmN0aWNhJywgJ0FzaWEnLCAnQXVzdHJhbGFzaWEnLCAnRXVyb3BlJyBdLFxyXG5cdFx0XHRcdHNlbGVjdENhdGVnb3J5OiBbJ09uZScsICdUb3cnLCAnVGhyZScsICdUb3VyJywgJ0ZpdmUnXSxcclxuXHRcdFx0XHRzZWxlY3REYXRlOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLCAvLyDQv9C+0LTQutC70Y7Rh9C40YLRjCDQutCw0LvQtdC90LTQsNGA0YxcclxuXHRcdFx0XHRzZWxlY3RQcmljZTogWycgbGVzcyA1MDAnLCAnNTAwIC0gMTAwMCcsICcxMDAwIC0gMTUwMCcsICcxNTAwIG1vcmUgJ10sXHJcblx0XHRcdH07XHJcblx0XHRcdHZhciBzZWxlY3RXcmFwID0gJCgnLnRyYW5zcGFyZW50Jyk7XHJcblxyXG5cclxuXHRcdFx0dmFyIGMgPSAwO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gc2VsZWN0T3BlbigpIHtcclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coYyk7XHJcblxyXG5cclxuXHJcblx0XHRcdFx0ZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XHJcblx0XHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnNyY0VsZW1lbnQ7XHJcblxyXG5cdFx0XHRcdC8vINC/0YDQvtCy0LXRgNC60LAg0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0LvQuCBpZFxyXG5cdFx0XHRcdGlmKGV2ZW50LnNyY0VsZW1lbnRbJ2lkJ10pe1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGMpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBhY3RpdmVTZWxlY3RJbnB1dCA9ICQoJyMnICsgZXZlbnQuc3JjRWxlbWVudFsnaWQnXSkucGFyZW50KCkuY2hpbGRyZW4oKVswXSxcclxuXHRcdFx0XHRcdG5hbWVNYXRlcmlhbHMgPSBldmVudC5zcmNFbGVtZW50WydpZCddO1xyXG5cclxuXHRcdFx0XHRcdHZhciBzZWxlY3RlZElkID0gJCgnIycgKyBldmVudC5zcmNFbGVtZW50WydpZCddKTtcclxuXHJcblxyXG5cdFx0XHRcdC8vINC/0YDQvtCy0LXRgNC60LAg0LDQutGC0LjQstC90YvQuSBzZWxlY3Qg0LjQu9C4INC+0L0gZGlzYWJsZWQg0YTRg9C90LrRhtC40Y8g0LLQvtC30LLRgNCw0YnQsNC10YIgdHJ1ZS9mYWxzZVxyXG5cdFx0XHRcdGlmKGNyZWF0ZUxpc3QoKSkge1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpO1xyXG5cdFx0XHRcdFx0c2VsZWN0ZWRJZFswXS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcblx0XHRcdFx0XHRzZWxlY3RlZElkWzBdLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlLXNlbGVjdCcpO1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdGVkSWQuYXBwZW5kKGNyZWF0ZUxpc3QoKSk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0YPQtNCw0LvQtdC90LjRjyDQv9GA0L7RgdC70YPRiNC10LLQsNC90LjRjyDRjdGC0L7QuSDQstGL0LHQvtGA0LrQuFxyXG5cdFx0XHRcdFx0cmVtb3V2ZUxpc2VuZXJTZWxlY3Qoc2VsZWN0V3JhcCwgc2VsZWN0T3Blbik7XHJcblxyXG5cclxuXHRcdFx0XHQvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQu9GD0YjQsNGC0LXQu9GPINC90LAg0LLRi9Cx0L7RgCDRjdC70LXQvNC10L3RgtCwIFNUQVJUXHJcblxyXG5cdFx0XHRcdHZhciBsaUl0ZW0gPSBzZWxlY3RlZElkLmZpbmQoJy50cmFuc3BhcmVudC1saXN0LWl0ZW0nKTtcclxuXHJcblx0XHRcdFx0YWRkTGlzZW5lclNlbGVjdChsaUl0ZW0sIGdldEl0ZW4pXHJcblx0XHRcdFx0Ly8g0LTQvtCx0LDQstC70Y/QtdC8INGB0LvRg9GI0LDRgtC10LvRjyDQvdCwINCy0YvQsdC+0YAg0Y3Qu9C10LzQtdC90YLQsCBFTkRcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDQsdC10YDQtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQuCDQv9C10YDQtdC00LDQtdC8INCyIHNlbGVjdFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gZ2V0SXRlbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQuc3JjRWxlbWVudDtcclxuXHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaXRlbVZhbHVlID0gdGFyZ2V0LmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHRcdHNldEl0ZW1TZWxlY3QoaXRlbVZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dmFyIGNvdW50U2VsZWN0ID0gMDtcclxuXHJcblx0XHRcdFx0Ly8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQsiBzZWxlY3RcclxuXHRcdFx0XHRmdW5jdGlvbiBzZXRJdGVtU2VsZWN0KHZhbCkge1xyXG5cclxuXHRcdFx0XHRcdHJlbW91dmVMaXNlbmVyU2VsZWN0KGxpSXRlbSwgZ2V0SXRlbik7XHJcblx0XHRcdFx0XHRcdC8vIHZhciBpbnB1dExpc3RlbmVyID0gJCgnI3NlbGVjdFJlZ2lvbklucHV0Jyk7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCQoJyMnICsgdGFyZ2V0LmlkKS5wYXJlbnQoKS5uZXh0KClbMF0uY2hpbGRyZW5bMF0pOyAvLy5wYXJlbnQoKS5zaWJsaW5ncygpWzBdLmNoaWxkcmVuWzBdXHJcblx0XHRcdFx0XHRcdHZhciBuZXh0U2VsZWN0ID0gJCgnIycgKyB0YXJnZXQuaWQpLnBhcmVudCgpLm5leHQoKVswXS5jaGlsZHJlblswXTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG5leHRTZWxlY3QudHlwZSk7XHJcblx0XHRcdFx0XHRcdC8vINGD0LHQuNGA0LDQtdC8INCw0YLRgNC40LHRg9GCINGDINGB0LvQtdC00YPRjtGJ0LXQs9C+IGlucHV0XHJcblx0XHRcdFx0XHRcdGlmKG5leHRTZWxlY3QuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIG5leHRTZWxlY3QudHlwZSA9PSBcInRleHRcIil7XHJcblx0XHRcdFx0XHRcdFx0bmV4dFNlbGVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGNvdW50U2VsZWN0Kys7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG5leHRTZWxlY3QuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcclxuXHRcdFx0XHRcdFx0Ly8gYWRkTGlzZW5lclNlbGVjdChpbnB1dExpc3RlbmVyLCBmdW4sICdjaGFuZ2UnKTtcclxuXHJcblx0XHRcdFx0XHRcdGFjdGl2ZVNlbGVjdElucHV0LnZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gc2VsZWN0ZWRJZFswXS5jbGFzc0xpc3QudG9nZ2xlKCd0cmFuc3BhcmVudCcpO1xyXG5cdFx0XHRcdFx0XHQvLyBzZWxlY3RlZElkWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1zZWxlY3QnKTtcclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRJZFswXS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkSWRbMF0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0cmFuc3BhcmVudCcpO1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpO1xyXG5cdFx0XHRcdFx0JCgnLnRyYW5zcGFyZW50LWxpc3QnKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdC8vIHNlbGVjdFdyYXAgPSAkKCcudHJhbnNwYXJlbnQjc2VsZWN0Q2F0ZWdvcnknKTtcclxuXHRcdFx0XHRcdC8vIHNldFRpbWVvdXQoYWRkTGlzZW5lclNlbGVjdChzZWxlY3RXcmFwLCBzZWxlY3RPcGVuKSwgMTAwMCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gYWRkTGlzZW5lclNlbGVjdChzZWxlY3RXcmFwLCBzZWxlY3RPcGVuKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vINGB0L7Qt9C00LDQtdC8INCh0L/QuNGB0L7QuiBTVEFSVFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlTGlzdCAoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhhY3RpdmVTZWxlY3RJbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIWFjdGl2ZVNlbGVjdElucHV0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xyXG5cclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGluc2VydGFibGVVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0XHRcdFx0XHRcdFx0aW5zZXJ0YWJsZVVsLmNsYXNzTmFtZSA9ICd0cmFuc3BhcmVudC1saXN0JztcclxuXHJcblxyXG5cdFx0XHRcdC8vINCS0YvQsdC40YDQsNC10Lwg0YfRgtC+INCy0YHRgtCw0LLQu9GP0YLRjFxyXG5cdFx0XHRcdHZhciBzZWxlY3RBcnJheU1hdGVyaWFscyA9ICBzZWxlY3RFbGVtZW50c1t0YXJnZXQuaWRdO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyggc2VsZWN0QXJyYXlNYXRlcmlhbHMgKTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RBcnJheU1hdGVyaWFscy5sZW5ndGg7IGkrKyl7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGluc2VydGFibGVsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRcdFx0XHRpbnNlcnRhYmxlbGkuY2xhc3NOYW1lID0gJ3RyYW5zcGFyZW50LWxpc3QtaXRlbSc7XHJcblxyXG5cdFx0XHRcdFx0aW5zZXJ0YWJsZWxpLmlubmVySFRNTCA9IHNlbGVjdEFycmF5TWF0ZXJpYWxzW2ldO1xyXG5cclxuXHRcdFx0XHRcdGluc2VydGFibGVVbC5hcHBlbmRDaGlsZChpbnNlcnRhYmxlbGkpO1xyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdHJldHVybiBpbnNlcnRhYmxlVWw7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHRcdC8vINGB0L7Qt9C00LDQtdC8INCh0L/QuNGB0L7QuiBFTkRcclxuXHJcblx0XHRcdFx0YysrO1xyXG5cclxuXHJcblx0XHRcdH1cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdC8vINC00L7QsdCw0LLQu9C10L3QuNC1INGB0LvRg9GI0LDRgtC10LvRjyDQvdCwINGB0LXQu9C10LrRgtGLXHJcblx0XHRcdGZ1bmN0aW9uIGFkZExpc2VuZXJTZWxlY3QgKGVsZW1lbnQsIGZ1bmMsIGZ1bmNBY3Rpdikge1xyXG5cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuXHRcdFx0XHR2YXIgdmFsQWN0aXYgPSAnY2xpY2snO1xyXG5cdFx0XHRcdGlmKGZ1bmNBY3Rpdikge1xyXG5cdFx0XHRcdFx0dmFsQWN0aXYgPSBmdW5jQWN0aXY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbEFjdGl2KTtcclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG5cdFx0XHRcdFx0aWYodmFsQWN0aXYgPT0gJ2NsaWNrJykge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWxlbWVudFtpXS5hdHRhY2hFdmVudCgnb24nICsgdmFsQWN0aXYsIGZ1bmMpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnRbaV0ub25pbnB1dCA9IGZ1bmM7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcmVtb3V2ZUxpc2VuZXJTZWxlY3QgKGVsZW1lbnQsIGZ1bmMpIHtcclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG5cclxuXHRcdFx0XHRcdGVsZW1lbnRbaV0uZGV0YWNoRXZlbnQgKCdvbmNsaWNrJywgZnVuYyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YWRkTGlzZW5lclNlbGVjdChzZWxlY3RXcmFwLCBzZWxlY3RPcGVuKTtcclxuXHJcblxyXG5cdFx0XHQvLyDRgdC10LvQtdC60YLRiyBFTkRcclxuXHJcblx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCB2YWx1ZSDQstC80LXRgdGC0L4g0L3QtdGA0LDQsdC+0YLQsNGO0YnQtdCz0L4gcGxhY2Vob2xkZXJcclxuXHRcdFx0KGZ1bmN0aW9uIHNldFBsYWNlSG9sZGVycygpe1xyXG5cdFx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpOyAvLyBnZXQgYWxsIHRleHQgZmllbGRzXHJcblx0XHRcdFx0dmFyIGNscyA9IFwicGxhY2Vob2xkclwiOyAvLyBzZXQgbmFtZSBvZiB0aGUgY2xhc3NcclxuXHJcblx0XHRcdFx0aWYgKGlucHV0KSB7IC8vIGlmIGZpZWxkcyBmb3VuZFxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHsgXHJcblx0XHRcdFx0XHRcdHZhciB0ID0gaW5wdXRbaV07IFxyXG5cdFx0XHRcdFx0XHRpZih0Lmhhc0F0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHR4dCA9IHQuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0eHQubGVuZ3RoID4gMCkgeyAvLyBpZiBwbGFjZWhvbGRlciBmb3VuZFxyXG5cdFx0XHRcdFx0XHRcdFx0dC5jbGFzc05hbWUgPSB0LnZhbHVlLmxlbmd0aCA9PSAwID8gdC5jbGFzc05hbWUrXCIgXCIrY2xzIDogdC5jbGFzc05hbWU7IC8vIGFkZCBjbGFzc1xyXG5cdFx0XHRcdFx0XHRcdFx0dC52YWx1ZSA9IHQudmFsdWUubGVuZ3RoID4gMCA/IHQudmFsdWUgOiB0eHQ7IC8vIGlmIG5vIHZhbHVlIGZvdW5kXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHQub25mb2N1cyA9IGZ1bmN0aW9uKCkgeyAvLyBvbiBmb2N1c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lLnJlcGxhY2UoY2xzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgPT0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSA/IFwiXCIgOiB0aGlzLnZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHQub25ibHVyID0gZnVuY3Rpb24oKSB7IC8vIG9uIGZvY3VzIG91dCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudmFsdWUubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lK1wiIFwiK2NsczsgLy8gYWRkIGNsYXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9ICBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkoKTtcclxuXHJcblxyXG5cclxuXHRcdH07Il0sImZpbGUiOiJzY3JpcHRfSUU5LmpzIn0=
