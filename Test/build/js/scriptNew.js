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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHROZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgc2xpZGVyID0ge1xyXG5cdFx0c2xpZGVQb3NpdGlvbjogWyAnMCAwJywgJy03MDVweCAwJywgJy0xNDEwcHggMCcsICctMjExNXB4IDAnIF0sXHJcblx0XHRmcmFtZTogMCxcclxuXHRcdGZpcnN0VGV4dCA6IFsgJ091cicsICdPdXIgMicsICdPdXIgMycsICdPdXIgNCcgXSxcclxuXHRcdHNlY29uZFRleHQgOiBbICdOZXcgVG91cnMnLCAnTmV3IFRvdXJzIDInLCAnTmV3IFRvdXJzIDMnLCAnTmV3IFRvdXJzIDQnIF0sXHJcblx0XHRwYXJhZ3JhZmVyOiBbIFxyXG5cdFx0J0F0IE5hdHVyZXRvdXIgd2UgYXJlIGNvbnN0YW50bHkgYWRkaW5nIHRvIGFuZCBpbXByb3Zpbmcgb3VyIHBvcnRmb2xpbyBvZiB3aWxkbGlmZSBob2xpZGF5cyB0byBwcm92aWRlIHlvdSB3aXRoIGFuIGV2ZW4gZ3JlYXRlciBjaG9pY2Ugb2Ygd2lsZGxpZmUgdmlld2luZyBleHBlcmllbmNlcy4nLFxyXG5cdFx0J0F0IE5hdHVyZXRvdXIgd2UgYXJlIGNvbnN0YW50bHkgYWRkaW5nIHRvIGFuZCBpbXByb3Zpbmcgb3VyIHBvcnRmb2xpbyBvZiB3aWxkbGlmZSBob2xpZGF5cyB0byBwcm92aWRlIHlvdSB3aXRoIGFuIGV2ZW4gZ3JlYXRlciBjaG9pY2Ugb2Ygd2lsZGxpZmUgdmlld2luZyBleHBlcmllbmNlcy4gIExvcmVtIGlwc3VtIGRvbG9yLicsXHJcblx0XHQnQXQgTmF0dXJldG91ciB3ZSBhcmUgY29uc3RhbnRseSBhZGRpbmcgdG8gYW5kIGltcHJvdmluZyBvdXIgcG9ydGZvbGlvIG9mIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHByb3ZpZGUgeW91IHdpdGggYW4gZXZlbiBncmVhdGVyIGNob2ljZSBvZiB3aWxkbGlmZSB2aWV3aW5nIGV4cGVyaWVuY2VzLicsXHJcblx0XHQnQXQgTmF0dXJldG91ciB3ZSBhcmUgY29uc3RhbnRseSBhZGRpbmcgdG8gYW5kIGltcHJvdmluZyBvdXIgcG9ydGZvbGlvIG9mIHdpbGRsaWZlIGhvbGlkYXlzIHRvIHByb3ZpZGUgeW91IHdpdGggYW4gZXZlbiBncmVhdGVyIGNob2ljZSBvZiB3aWxkbGlmZSB2aWV3aW5nIGV4cGVyaWVuY2VzLidcclxuXHRcdF0sXHJcblx0XHRsaW5rVGV4dCA6IFsgJ1ZpZXcgbmV3IHRvdXJzLi4uJywgJ1ZpZXcgbmV3IHRvdXJzLi4uJywgJ1ZpZXcgbmV3IHRvdXJzLi4uJywgJ1ZpZXcgbmV3IHRvdXJzLi4uJyBdLFxyXG5cdFx0bGlua0hyZWYgOiBbICcjMScsICcjMicsICcjMycsICcjNCcgXSxcclxuXHRcdGNoZWNrYm94cyA6ICcnLFxyXG5cdFx0c2hvdyA6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdCQoJyNmaXJzZlRleHQnKVswXS5pbm5lckhUTUwgPSB0aGlzLmZpcnN0VGV4dFt0aGlzLmZyYW1lXTtcclxuXHRcdFx0JCgnI3NlY29uZFRleHQnKVswXS5pbm5lckhUTUw9IHRoaXMuc2Vjb25kVGV4dFt0aGlzLmZyYW1lXTtcclxuXHRcdFx0JCgnI3BhcmFncmFmZXInKVswXS5pbm5lckhUTUwgPSB0aGlzLnBhcmFncmFmZXJbdGhpcy5mcmFtZV07XHJcblx0XHRcdCQoJyNzbGlkZUxpbmsnKVswXS5pbm5lckhUTUwgPSB0aGlzLmxpbmtUZXh0W3RoaXMuZnJhbWVdO1xyXG5cdFx0XHQkKCcjc2xpZGVMaW5rJylbMF0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5saW5rSHJlZlt0aGlzLmZyYW1lXSk7XHJcblx0XHRcdCQoJy5zbGlkcycpWzBdLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHRoaXMuc2xpZGVQb3NpdGlvblt0aGlzLmZyYW1lXTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRpbml0TGFiZWwgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jaGVja2JveHMgPSAkKCcuc2xpZHMtcGFuZWwtY29udHJvbCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG5cdFx0XHR0aGlzLnNldExhYmVsKCk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZXRMYWJlbCA6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dGhpcy5jaGVja2JveHNbdGhpcy5mcmFtZV0uY2hlY2tlZCA9IHRydWU7XHRcdFx0XHJcblx0XHRcdHRoaXMuc2hvdygpO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cclxuXHJcblx0XHRuZXh0TGFiZWwgOiBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRpZihlLnRhcmdldC5pZCkge1xyXG5cclxuXHRcdFx0XHRzbGlkZXIuZnJhbWUgPSBlLnRhcmdldC5pZC5jaGFyQXQoZS50YXJnZXQuaWQubGVuZ3RoIC0gMSkgLSAxO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmKGV2ZW50LnRhcmdldC5sYWJlbHMgPT0gdW5kZWZpbmVkKSAge1xyXG5cclxuXHRcdFx0XHRzbGlkZXIuZnJhbWUgPSBldmVudC50YXJnZXQuaWQuY2hhckF0KGV2ZW50LnRhcmdldC5pZC5sZW5ndGggLSAxKSAtIDE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRzbGlkZXIuZnJhbWUgPSBldmVudC50YXJnZXQubGFiZWxzWzBdLmlubmVySFRNTCAtIDE7IFxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRzbGlkZXIuc2hvdygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRuZXh0U2xpZGUgOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHRoaXMuY2hlY2tib3hzW3RoaXMuZnJhbWVdLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0c2xpZGVyLmZyYW1lKys7XHJcblxyXG5cdFx0XHRpZihzbGlkZXIuZnJhbWUgPT0gc2xpZGVyLnNsaWRlUG9zaXRpb24ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRzbGlkZXIuZnJhbWUgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNldExhYmVsKCk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRsaXN0ZW5lciA6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIHcgPSAkKCcuc2xpZHMtcGFuZWwtY29udHJvbCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdy5sZW5ndGg7IGkrKykge1xyXG5cclxuXHRcdFx0XHRpZiAoZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKXtcclxuXHJcblx0XHRcdFx0XHR3W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0TGFiZWwsIGZhbHNlKTsgXHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5hdHRhY2hFdmVudCl7XHJcblxyXG5cdFx0XHRcdFx0d1tpXS5hdHRhY2hFdmVudCgnb25jbGljaycsIHRoaXMubmV4dExhYmVsKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcbn1cclxuXHJcblxyXG5zbGlkZXIuaW5pdExhYmVsKCk7XHJcbnNsaWRlci5saXN0ZW5lcigpO1xyXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgLy8g0YHRgtCw0LLQuNC8INC/0Y/RgtC40YHQtdC60YPQvdC00L3Ri9C5INC40L3RgtC10YDQstCw0Lsg0LTQu9GPINC/0LXRgNC10LvQuNGB0YLRi9Cy0LDQvdC40Y8g0LrQsNGA0YLQuNC90L7QulxyXG5cdHNsaWRlci5uZXh0U2xpZGUoKTtcclxufSw1MDAwKTtcclxuXHJcblxyXG5cclxufTsiXSwiZmlsZSI6InNjcmlwdE5ldy5qcyJ9
