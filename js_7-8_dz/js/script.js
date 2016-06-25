$(function(){
	//Код для первого задания
	var $links = $('a');
	$('a:first').siblings('.toggles').show();
	$links.on('click', showBlock);


//Код для второго задания
	var $inputs = $('input');

	var $mytitle = {
		firstName: $('input[name="firstName"]').attr('title'),
		lastName: $('input[name="lastName"]').attr('title'),
		address: $('input[name="address"]').attr('title')
	};
	var $mydiv1 = $('<div>', {
		class: 'helpd',
		id: 'firstName',
		text: $mytitle.firstName
	});
	var $mydiv2 = $('<div>', {
		class: 'helpd',
		id: 'lastName',
		text: $mytitle.lastName
	});
	var $mydiv3 = $('<div>', {
		class: 'helpd',
		id: 'address',
		text: $mytitle.address
	});
	// console.log($mytitle.first);
	// =====================================
	
	 $inputs.hover(sowHelpd,hideHelpd);
	var $button = $('button');

	$button.on('click', function(){
		$('input[name="firstName"]').parent().append($mydiv1);
		$('input[name="lastName"]').parent().append($mydiv2);
		$('input[name="address"]').parent().append($mydiv3);
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
		
		var $input = $(this).attr('name');
		switch ($input) {
			case 'firstName': 
												$(this).parent().append($mydiv1);
				break;
			case 'lastName': 
											$(this).parent().append($mydiv2);
				break;	
			case 'address': 
											$(this).parent().append($mydiv3);
				break;
		}
	
		$('.helpd').animate({ opacity: 1, marginRight: '10px'}, 500);
		$(this).attr('title','');
	} 







//Функция для второго задания
	function hideHelpd() {
		 
		var $input = $(this).next().attr('id');

		switch ($input) {
			case 'firstName': 
												var $texts = $mytitle.firstName;
				break;
			case 'lastName': 
												var $texts = $mytitle.lastName;
				break;	
			case 'address': 
												var $texts = $mytitle.address;
				break;
		}

		console.log($input);
		$(this).attr('title', $texts);
		$(this).next().animate({ opacity: 0, marginRight: '0px'}, 300).remove();
	}

});
