var stertTime;

var resultDeck = document.querySelector('.result');
var doc = document.querySelectorAll('.wraper'),
hour = doc[0].children.hour,
min = doc[0].children.min,
sec = doc[0].children.sec,
msec = doc[0].children[5],
ms = doc[0].children[6],
flag_ms = 0,
flag = false,
mseconds,
secound,
minutes,
hours,
count = 1;

var but1 = document.querySelectorAll('button');

for (var i = 0; i < but1.length; i++) {
	but1[i].addEventListener('click', eventStart);
};


function eventStart(e) {

	switch (e.path[0].getAttribute('id')) {
		case 'first': 	timeSet = (+new Date());
										stertTime = setInterval(starsTimer, 10);
					break;
		case 'second': clearTimer(stertTime) ;
					break;
		case 'third': pauseTimer();
					break;
		case 'split': setResultDeck('Split');
					break;
		default: console.log('Error result button');
					break;
	}


	function starsTimer() {
		flag = true;
		
		e.path[0].setAttribute('class', 'btn btn-warning col-md-3 col-sm-4');
		e.path[0].setAttribute('id', 'third');// замена атрибутов у кнопки
		e.path[0].innerHTML = 'Stop'; // замена Подписи кнопки
		
		if (flag_ms != '0'){
		 addTime(flag_ms);
		}else {
		 addTime();
		}
	}

	function addTime(flag_ms) {
			var getmin = (mseconds / 1000) / 60;

			flag_ms = flag_ms || 0;
			mseconds = flag_ms + ((+new Date()) - timeSet); // Здесь увеличивать скорость
	

			if ((mseconds / 1000) % 60) { // Добавление секунд

				if((Math.floor(mseconds / 1000) % 60) <= 9) {
					sec.innerHTML = '0' + (Math.floor(mseconds / 1000) % 60);
				} else {
					sec.innerHTML = Math.floor(mseconds / 1000) % 60;
				}
			}


			if (Math.floor(getmin % 60)) { // Добавление минут

				if((Math.floor(getmin % 60)) <= 9) {
					min.innerHTML = '0' + Math.floor(getmin % 60);
				} else {
					min.innerHTML = Math.floor(getmin % 60);
				}
			}


			if (Math.floor((getmin % 3600) / 60)) { // Добавление часы

				if((Math.floor((getmin % 3600) / 60)) <= 9) {
					hour.innerHTML = '0' + Math.floor((getmin % 3600) / 60);
				} else {
					hour.innerHTML =  Math.floor((getmin % 3600) / 60);
				}
			}

			msec.innerHTML = Math.floor(mseconds%1000);
			ms.innerHTML = mseconds;
	}


	function pauseTimer() {
			clearInterval(stertTime);
			setResultDeck('Stop');

			flag_ms = + ms.innerHTML; // сохраняем милесекунды

			e.path[0].setAttribute('id', 'first');// замена атрибутов у кнопки
			e.path[0].setAttribute('class', 'btn btn-success col-md-3 col-sm-4');// замена атрибутов у кнопки
			e.path[0].innerHTML = 'Start'; // замена Подписи кнопки

			flag = false;
	}

	function clearTimer() {

			clearInterval(stertTime);
			flag_ms = 0;
			count = 1;
			ms.innerHTML = msec.innerHTML = mseconds = '000';
			sec.innerHTML = secound = '00';
			min.innerHTML = minutes = '00';
			hour.innerHTML = hours = '00';

			var countEl = resultDeck.children;
				
			for (var i = countEl.length - 1; i >= 0; i--) {
				var elements = countEl[i];
				resultDeck.removeChild(elements);
			}
	
			var buttonChenge = document.querySelectorAll('button');
			buttonChenge[0].setAttribute('class', 'btn btn-primary col-md-3 col-sm-4');// замена атрибутов у кнопки
			buttonChenge[0].setAttribute('id', 'first');// замена атрибутов у кнопки
			buttonChenge[0].innerHTML = 'Start'; // замена Подписи кнопки
	}

	function setResultDeck(nameEvent) {
		if(flag) { // проверяем запещен ли счетчик
			var resultString =  count + '. ' + nameEvent + ': ' + hour.innerHTML + ":" + 
			min.innerHTML + ':' +
			sec.innerHTML + '.' +
			msec.innerHTML;

			var resultP = document.createElement('p');
			resultP.innerHTML = resultString; 
			resultDeck.appendChild(resultP);

			count++;
		}
	}
}



