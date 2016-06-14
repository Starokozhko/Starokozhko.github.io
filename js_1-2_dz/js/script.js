function first() {
	var text1 = 'Укажите число возводимое в степень';
	var text2 = 'Укажите в какую степень возводить число';

	var numb = isNan(text1);
	var power = isNan(text2);

	console.log (pow(numb, power));

	function isNan(text){
		var numb;
		while (isNaN( numb )) {
			numb = prompt( text );
		}

		return numb;
	}

	function pow(a, n) {
		var result = a;
		
		for (var i = n; i > 1; i--) {
			result *= a;
		}

		return result;
	}
}

function second() {
	var arr = [];
	for (var i = 5; i > 0; i--){
		arr.push(prompt('Введите ' + i + ' любых имен. По одному!'));
	}
	
	var usernam = prompt('Введите имя пользователя!');
	var authorized = 'none';

	for(var i = 0; i < arr.length; i++) {

		if (arr[i] == usernam) {
			authorized = arr[i];
		}
	}

	if(authorized != 'none') {
		alert(authorized + ', вы успешно вошли!');
	} else {
		alert('Ошибка!!!');
	}

	// console.log(arr);
}