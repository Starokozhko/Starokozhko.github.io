$(function(){
	//Код для первого задания
	var $links = $('a');
	$('a:first').siblings('.toggles').show();
	$links.on('click', showBlock);


//Код для второго задания
	var $inputs = $('input');
	$inputs.hover(sowHelpd,hideHelpd);
	var $button = $('button');
	$button.on('click', function(){
		$('div.helpd').animate({ opacity: 1, marginRight: '10px'}, 'slow');
	});
	$button.hover( function() {
		$(this).css({ background: "linear-gradient(to top, #051368, #596ff7)", color: '#fff'})
	}, function() {
		$(this).css({ background: '#ccc',	color: '#000'})
	});




//Функция для первого задания
	function showBlock(){
		$block = $('.toggles');
		$block.hide();
		$(this).siblings('.toggles').slideDown("slow");
		$('li').removeAttr('id');
		$(this).parent().attr('id', 'hover_block');
	}

//Функция для второго задания
	function sowHelpd() {
		$(this).next('div.helpd').animate({ opacity: 1, marginRight: '10px'}, 'slow');
	} 
//Функция для второго задания
	function hideHelpd() {
		$(this).next('div.helpd').animate({ opacity: 0, marginRight: '0px'}, 'slow');
	}


});