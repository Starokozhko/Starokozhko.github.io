window.onload = function(){
	'use strict';

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

			if(e.target.id) {

				slider.frame = e.target.id.charAt(e.target.id.length - 1) - 1;

			} else if(event.target.labels == undefined)  {

				slider.frame = event.target.id.charAt(event.target.id.length - 1) - 1;

			} else {

				slider.frame = event.target.labels[0].innerHTML - 1; 

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

				if (document.body.addEventListener){

					w[i].addEventListener('click', this.nextLabel, false); 

				} else if (document.body.attachEvent){

					w[i].attachEvent('onclick', this.nextLabel);

				}
			}

		},

}


slider.initLabel();
slider.listener();
setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
	slider.nextSlide();
},5000);



};