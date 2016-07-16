window.addEventListener("DOMContentLoaded", function() {
	"use strict;"

	var quest = [
	{	
		name: "first",
		question : "Что обозначает директива ‘use strict’?",
		type: "radio",
		goodAnswer : 1,
		points : 5,
		answer1 : "a. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.",
		answer2 : "b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.",
		answer3 : "c. Код данного скрипта будет обработан по строгим правилам стандарта HTML5.",
		answer4 : "d. Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.",
		inspection : function(str, question){
			if(str == "b") {
				var res = $("#result");
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + this.points + " баллов."))

				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);

				return this.points;
			}else{

				var res = $("#result")
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + 0 + " баллов."))
				
				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);
				return 0;

			}
		}	
	},{
		name: "second",
		question : "К какому участку скрипта применяется строгие правила ‘use strict’?",
		type: 'radio',
		goodAnswer : 1,
		points : 5,
		answer1 : "a. Строгие правила работают между директивами ‘use strict’ и ‘strict end’.",
		answer2 : "b. Во всем скрипте.",
		answer3 : "c. Либо во всем скрипте, либо в отдельной функции.",
		answer4 : "d. Внутри блока {}",
		inspection : function(str, question){
			if(str == "c") {

				var res = $("#result");
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + this.points + " баллов."))

				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);

				return this.points;

			}else{

				var res = $("#result")
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + 0 + " баллов."))
				
				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);
				return 0;

			}
		}
	},{
		name: "third",
		question : "Какие основное ограничения к объявлению переменных в строгом режиме?",
		type: 'radio',
		goodAnswer : 1,
		points : 5,
		answer1 : "a. Глобальные переменные должны объявляться с использованием ключевого слова var",
		answer2 : "b. Любая переменная должна объявляться с использованием ключевого слова var",
		answer3 : "c. Переменные функций должны объявляться с использованием ключевого слова var",
		answer4 : "d. Название переменных должно быть camel-case с маленькой буквы.",
		inspection : function(str, question){
			if(str == "b") {

				var res = $("#result");
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + this.points + " баллов."))

				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);

				return this.points;

			}else{
				var res = $("#result")
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + 0 + " баллов."))
				
				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);
				return 0;

			}
		}
	}
	,{
		name: "fourth",
		question : "Какой из пунктов  верен по отношению к строгому режиму javascript?",
		type: 'checkbox',
		goodAnswer : 3,
		points : 2,
		answer1 : "a. Запрещено использование директивы eval",
		answer2 : "b. Запрещено дублирование полей объектов",
		answer3 : "c. Запрещено дублирование параметров функции",
		answer4 : "d. Запрещено удаление полей, имеющих свойство writable = false",
		inspection : function(str, question){
			if(str == "a") {

				var res = $("#result")
				var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + 0 + " баллов."))
				
				var p = document.createElement('p');

				p.appendChild(strText);
				res.append(p);
				return 0;

			}else{

					var res = $("#result");
					var strText = document.createTextNode(String("Вопрос №" + question + " "+ str + ") - " + this.points + " баллов."))
					
					var p = document.createElement('p');

					p.appendChild(strText);
					res.append(p);

					return this.points;

				}
			}
		}
		];



		var strJson = JSON.stringify(quest);
		localStorage.setItem("questions", strJson);

		var getQuestions = JSON.parse(localStorage.getItem("questions"));


		var htmlTemps = $("#template").html();
		var lists = $(".listQustions");


		var content = tmpl(htmlTemps, {questions : getQuestions});

		lists.append(content);



		var points = 0,
				allGoodAnswer = 0,
				bals = 0;


		function getResult(e){


			var $list = $(".container input:checked"),
			obj = [],
			counter = 0,
			flag = 0;

			

			for(var i = 0; i < getQuestions.length; i++) {
				allGoodAnswer += Number(getQuestions[i].goodAnswer * getQuestions[i].points);
			}

			for(var i = 0; i < $list.length; i++){

				var name = $list[i].name;
				var val = $list[i].value;

				if(name == 'first'){
					obj[i] = (quest[i].inspection(val, (i + 1)));
				}else if(name == 'second'){
					obj[i] = (quest[i].inspection(val, (i + 1)));
				}else if(name == 'third'){
					obj[i] = (quest[i].inspection(val, (i + 1)));
				}else if(name == 'fourth'){
					obj[i] = (quest[3].inspection(val, (3 + 1)));
				}
			}		


			for(var i = 0; i <= obj.length - 1; i++){
				counter += obj[i];
				flag += 1;
			}


			function addModal() {
				var res = $("#result"),
				text_one,
				text_second,
				set,
				text,
				ul = document.createElement('ul');

				for(var i = 0; i < obj.length; i++) {
					console.log("obj[i] " + obj[i]);
					set = obj[i];
					bals += set;

					strText = '';
					li = '';
				}; 


				if(bals >=  (allGoodAnswer) - 5){

					text_one = document.createTextNode("Поздравляем!!!");

					text_secound = document.createTextNode("Вы здали тест и набрали " + bals + " из " + allGoodAnswer);

				}else {
					text_one = document.createTextNode("Сожалеем (((");
						text_secound = document.createTextNode("Вы набрали " + bals + " из " + (allGoodAnswer) + " возможных.");
					}

					var h1 = document.createElement('h1');
					var h3 = document.createElement('h3');

					h1.appendChild(text_one);
					h3.appendChild(text_secound);

					res.append(h1).append(h3);

					$(".wraper-modal").css({ display: "block" });
				}

				function closedModel() {

					var res = $("#result");
					$(".wraper-modal").css({ display: "none" });

					for(var i = 0; i < $list.length; i++) { $list[i].checked = ''; }

						set = 0,
					allGoodAnswer = 0;
					bals = 0;

					res.children().remove();
				}


				if(flag >= getQuestions.length) {
					addModal();
				}
				$(".modals img").on("click", closedModel);

			}

			$("button").on("click", getResult);


		});