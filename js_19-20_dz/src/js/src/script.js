$(function(){
	'use strict';

// SLIDER Start ===========
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
// SLIDER END ===========

// HOVER Service START
var element = document.createElement('div'),
elementWr = document.createElement('div');

$(element).addClass('curtain');
$(elementWr).addClass('wr');

$('.servis-item')
.mouseenter(function() {
	$(this).append(elementWr);
	$(this).append(element);
})
.mouseleave(function() {
	$('.curtain').remove();
	$('.wr').remove();
});
// HOVER Service END

// ACTIVE Baners START
function spanAdd (){
	$('.menu').each(function() {
		if($(this).find('div').attr('class') == 'title'){    
			$( this ).find('span').html('+');
		} else {
			$( this ).find('span').html('-');
		}
	});
}


$('.menu').on('click', function(){
	if($(this).find('div').attr('class') == 'title') {

		$(this).find('div').addClass('activ').siblings();
		$(this).find('p').css({display: block, height: auto});
		
		spanAdd();
	} else {
		$(this).find('div').removeClass('activ');
		spanAdd();
	}
});
// ACTIVE Baners END 
spanAdd();

// data.json

var data = $.ajax({
	async: false,
	url: 'data.json',
	dataType: 'json',
	success: function(data){
		var skills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));
		console.log(skills);

		var namesCountFriends = _.reverse(_.map(_.sortBy(data, ['friends']), 'name'));
		console.log(namesCountFriends);

		var friends = _.uniq(_.map(_.flatten(_.map(data, 'friends')), 'name'));
		console.log(friends);
	}
}).responseJSON;

console.log(data);



});