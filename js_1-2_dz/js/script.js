function first() {
	var text1 = 'Укажите число возводимое в степень';
	var text2 = 'Укажите в какую степень возводить число';

	var numb = isNan(text1);
	if (numb != null) {
		var power = isNan(text2);
	}

	if (numb != null && power != null) {		
		console.log (pow(numb, power));
	}

	function isNan(text){
		var number;

		while (isNaN( number )) {
			number = prompt( text );

			if (number == null) return;

			while (number == '') {
				number = prompt( 'Вы ничего не ввели! Введите число возводимое в степень!' );
			}
		}

		return number;
	}

	function pow(a, n) {

		var result = a;

		if (n > 0){
			for (var i = n; i > 1; i--) {
				result *= a;
			}
		} else {
			for (var i = n; i < -1; i++) {
				result *= a;
			}
			result = 1 / result;
		}
		return result;
	}
}

function second() {

	var arr = [];

	for (var i = 5; i > 0; i--){
		var userName  = prompt('Введите ' + i + ' любых имен. По одному!');
		if(userName == null) return;
		while (userName == ''){
			userName = prompt('Введите ' + i + ' любых имен. По одному!');
			if(userName == null) return;
		}
		arr[i] = userName;
	}
	
	var usernam = prompt('Введите имя пользователя!');
	if(usernam == null) return;

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

	console.log(arr);
}
