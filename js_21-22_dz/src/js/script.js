'use strict';

var quest = {
	test: [
	{	
		id: 1,
		question : "Что обозначает директива ‘use strict’?",
		type: "radio",
		goodAnswer : 1,
		correct: "1b",
		points : 5,
		answer : ["a. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.",
		"b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.",
		"c. Код данного скрипта будет обработан по строгим правилам стандарта HTML5.",
		"d. Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода." ]
	},
	{
		id: 2,
		question : "К какому участку скрипта применяется строгие правила ‘use strict’?",
		type: 'radio',
		goodAnswer : 1,
		correct: "2c",
		points : 5,
		answer : ["a. Строгие правила работают между директивами ‘use strict’ и ‘strict end’.",
		"b. Во всем скрипте.",
		"c. Либо во всем скрипте, либо в отдельной функции.",
		"d. Внутри блока {}" ]
	},
	{
		id: 3,
		question : "Какие основное ограничения к объявлению переменных в строгом режиме?",
		type: 'radio',
		goodAnswer : 1,
		correct: "3b",
		points : 5,
		answer : ["a. Глобальные переменные должны объявляться с использованием ключевого слова var",
		"b. Любая переменная должна объявляться с использованием ключевого слова var",
		"c. Переменные функций должны объявляться с использованием ключевого слова var",
		"d. Название переменных должно быть camel-case с маленькой буквы." ]
	},
	{
		id: 4,
		question : "Какой из пунктов  верен по отношению к строгому режиму javascript?",
		type: 'checkbox',
		goodAnswer : 3,
		correct: "4a",
		points : 2,
		answer : ["a. Запрещено использование директивы eval",
		"b. Запрещено дублирование полей объектов",
		"c. Запрещено дублирование параметров функции",
		"d. Запрещено удаление полей, имеющих свойство writable = false" ]
	}
	],
	testt: (a,b) => a + b,

	inspection() {

		let arr =[],
		correct = [];


		for( let i = 0; i < quest.test.length; i++) {

			arr[i] = quest.test[i].goodAnswer;
			correct[i] = quest.test[i].correct;

		}

		return quest.getResult(arr, correct);
	},
	getResult(arr, correct) {
		let list = $(".container input:checked"),
		bals = 0,
		counter = 0;


		for (let val of list) {
			let add = 1;

			if(quest.test[val.value.charAt(0) - 1].goodAnswer == 1) {

				if(val.value == quest.test[val.value.charAt(0) - 1].correct){

					bals += quest.test[val.value.charAt(0) - 1].points;

					counter = val.value.charAt(0);
				}

			} else {
				if(val.value != quest.test[counter].correct){

					bals += quest.test[counter].points;

				}					
			}
		}

		return bals;
	},
	addModal(bals, allGoodAnswer) {

		let res = $("#result"),
		text_one,
		text_secound,
		ul = document.createElement('ul');

		if(bals >=  (allGoodAnswer - 5)){

			text_one = document.createTextNode("Поздравляем!!!");

			text_secound = document.createTextNode(`Вы здали тест и набрали ${bals} из ${allGoodAnswer}`);

		}else {
			text_one = document.createTextNode("Сожалеем (((");

				text_secound = document.createTextNode(`Вы набрали ${bals}  из  ${allGoodAnswer}  возможных.`);

			}

			let h1 = document.createElement('h1');
			let h3 = document.createElement('h3');

			h1.appendChild(text_one);
			h3.appendChild(text_secound);

			res.append(h1).append(h3);

			return ($(".wraper-modal").css({ display: "block" }));
		},
		getMaxRes() {
			let allGoodAnswer = 0;

			for(let i = 0; i < quest.test.length; i++) {
				allGoodAnswer += Number(quest.test[i].goodAnswer * quest.test[i].points);
			}

			return allGoodAnswer;
		},
		closedModel(lists) {
			let res = $("#result");
			$(".wraper-modal").css({ display: "none" });

			for(let i = 0; i < lists.length; i++) { lists[i].checked = '' };

				res.children().remove();

			return true;
		}
	};

	try {
		module.exports = quest;
	} catch (e) {}