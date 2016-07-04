$(function(){

		$('.jcarousel').jcarousel({
				animation: 'slow',
				wrap: 'circular'
		});

		$('.jcarousel-prev').jcarouselControl({
				target: '-=1'
		});

		$('.jcarousel-next').jcarouselControl({
				target: '+=1'
		});
	
		$('.jcarousel-pagination')
			.on('jcarouselpagination:active', 'a', function() {
				$(this).addClass('active');
		})
			.on('jcarouselpagination:inactive', 'a', function() {
					$(this).removeClass('active');
		});

		$('.jcarousel-pagination').jcarouselPagination({
				item: function(page) {
							return '<a href="#' + (page) + '">' + '</a>';
				},
		});

	$("select").selectify({ maxItems : 5 });


		// var $input = $('.js_checkBox');
		// $input.prettyCheckable();

	$('#noChecked2').prettyCheckable({label: 'Первый'});
	$('#checked2').prettyCheckable({label: 'Второй'});
	$('#disabled2').prettyCheckable({label: 'Третий'});



	$('.li-first').hover(function() {
		$(this).children('.menu-second').slideDown(200).animate({backgroundColor:'#8dbece'},200)
	}, function() {
		$(this).children('.menu-second').animate({backgroundColor:'#c097ae'},200).slideUp(200)
	});


	$('.li-second').hover(function() {
		$(this).children('.menu-third').slideDown(200).animate({backgroundColor:'#716785'},200)
	}, function() {
		$(this).children('.menu-third').animate({backgroundColor:'#c097ae'},200).slideUp(200);
	});

// var $test = $('.tester');
// $test.on('click', function(){
// 	$(this).animate({left: '+=50px', backgroundColor:'#c097ae'},2000);
// })
// // console.log(test);

	var menu2 = document.querySelector('.menu-bottom>li[class]');
	var menu3 = document.querySelector('.menu-bottom-second>li[class]');
		

	menu2.addEventListener('mouseover', function(){
		menu2.childNodes[2].style.height = "320px";
		for (var i = 1; i < 10; i += 2){
			menu2.childNodes[2].childNodes[i].style.opacity = 1;
		}
		
	});
	menu2.addEventListener('mouseout', function(){
	menu2.childNodes[2].style.height = "0";
	for (var i = 1; i < 10; i += 2){
			menu2.childNodes[2].childNodes[i].style.opacity = 0;
		}
	});




	menu3.addEventListener('mouseover', function(){
		menu3.childNodes[2].style.height = "200px";
		for (var i = 1; i < 10; i += 2){
			menu2.childNodes[2].childNodes[i].style.opacity = 1;
		}
	});
	menu3.addEventListener('mouseout', function(){
		menu3.childNodes[2].style.height = "0";
		for (var i = 1; i < 10; i += 2){
			menu2.childNodes[2].childNodes[i].style.opacity = 0;
		}
	});

});