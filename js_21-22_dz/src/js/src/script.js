'use strict';

var quest = {
	test: [
	{	
		id: 1,
		question : "Что обозначает директива ‘use strict’?",
		type: "radio",
		goodAnswer : 1,
		correct: "b0",
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
		correct: "c1",
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
		correct: "b2",
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
		correct: "a3",
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
		correct = [],
		id = [];

// console.log(quest.test.length);

		for( let i = 0; i < quest.test.length; i++) {

			arr[i] = quest.test[i].goodAnswer;
			correct[i] = quest.test[i].correct;

		}
		// console.log('arr ' + arr);
		// console.log('correct ' + correct);

		return quest.getResult(arr, correct);
	},
	getResult(arr, correct) {
		let list = $(".container input:checked"),
		bals = 0;
			// console.log("ПРоверка что выводит" + arr + " " + correct);
			for(let i = 0; i < list.length; i++) {

				let answerUser = list[i].value,
				quisten = list[i].value.charAt(1);

				if(arr[quisten] == 1) {

					if(answerUser == correct[i]){
								console.log("Here: " + quest[0]);
								bals += Number(quest[0].test[answerUser.charAt(1)].points);
								// console.log("Add bals: " + bals);
							} else {
								// console.log( $list[i].value + " Not correct");
							}
						} 
						else 
						{
							if(arr[quisten] == 3) {
								if(answerUser !== quest[0].test[answerUser.charAt(1)].correct) {
									bals += Number(quest[0].test[answerUser.charAt(1)].points);
								// console.log("Add bals: " + bals);
							}else {
								// console.log("Not correct!");
							}
						}
					}
				}
				return bals;
			},
			addModal(bals, allGoodAnswer) {
				let res = $("#result"),
				text_one,
				text_second,
				set,
				text,
				ul = document.createElement('ul');

				if(bals >=  (allGoodAnswer) - 5){

					text_one = document.createTextNode("Поздравляем!!!");

					text_secound = document.createTextNode("Вы здали тест и набрали " + bals + " из " + allGoodAnswer);

				}else {
					text_one = document.createTextNode("Сожалеем (((");
						text_secound = document.createTextNode("Вы набрали " + bals + " из " + (allGoodAnswer) + " возможных.");
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
					// console.log("AllGoodAnswer: " + allGoodAnswer);
					// quest.addModal(quest.inspection(), allGoodAnswer);
					return allGoodAnswer;
				},
				closedModel(lists) {
					let res = $("#result");
					$(".wraper-modal").css({ display: "none" });

					for(let i = 0; i < lists.length; i++) { list[i].checked = ''; }

					set = 0,
					allGoodAnswer = 0;
					bals = 0;

					res.children().remove();
					flag = 0;
					return true;
				}
			};


try {
	module.exports = quest;
} catch (e) {}