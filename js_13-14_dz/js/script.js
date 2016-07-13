window.addEventListener("DOMContentLoaded", function() {
	"use strict;"



	var quest = [
	{	
		name: "first",
		question : "Что обозначает директива ‘use strict’?",
		type: "radio",
		answer1 : "a. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.",
		answer2 : "b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.",
		answer3 : "c. Код данного скрипта будет обработан по строгим правилам стандарта HTML5.",
		answer4 : "d. Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.",
		inspection : function(str){
			if(str == "b") {
				return true;
			}else{
				return false;
			}
		}	
	},{
		name: "second",
		question : "К какому участку скрипта применяется строгие правила ‘use strict’?",
		type: 'radio',
		answer1 : "a. Строгие правила работают между директивами ‘use strict’ и ‘strict end’.",
		answer2 : "b. Во всем скрипте.",
		answer3 : "c. Либо во всем скрипте, либо в отдельной функции.",
		answer4 : "d. Внутри блока {}",
		inspection : function(str){
			if(str == "c") {
				return true;
			}else{
				return false;
			}
		}
	},{
		name: "third",
		question : "Какие основное ограничения к объявлению переменных в строгом режиме?",
		type: 'radio',
		answer1 : "a. Глобальные переменные должны объявляться с использованием ключевого слова var",
		answer2 : "b. Любая переменная должна объявляться с использованием ключевого слова var",
		answer3 : "c. Переменные функций должны объявляться с использованием ключевого слова var",
		answer4 : "d. Название переменных должно быть camel-case с маленькой буквы.",
		inspection : function(str){
			if(str == "b") {
				return true;
			}else{
				return false;
			}
		}
	}
	,{
		name: "fourth",
		question : "Какой из пунктов  верен по отношению к строгому режиму javascript?",
		type: 'checkbox',
		answer1 : "a. Запрещено использование директивы eval",
		answer2 : "b. Запрещено дублирование полей объектов",
		answer3 : "c. Запрещено дублирование параметров функции",
		answer4 : "d. Запрещено удаление полей, имеющих свойство writable = false",
		inspection : function(str){
			if(str == "a") {
				return false;
			}else{
				return true;
			}
		}
	}
	];

	

	var str = JSON.stringify(quest);
	localStorage.setItem("questions", str);

	var getQuestions = JSON.parse(localStorage.getItem("questions"));


	var htmlTemps = $("#template").html();
	var lists = $(".listQustions");

	
	var content = tmpl(htmlTemps, {questions : getQuestions});

	lists.append(content);

	function getResult(e){


		var $list = $(".container input:checked");


		var obj = [];
		var flag = 0;
		for(var i = 0; i < $list.length; i++){

			var name = $list[i].name;
			var val = $list[i].value;

			if(name == 'first'){
				obj[i] = (quest[i].inspection(val)) ? true : false;
			}else if(name == 'second'){
				obj[i] = (quest[i].inspection(val)) ? true : false;
			}else if(name == 'third'){
				obj[i] = (quest[i].inspection(val)) ? true : false;
			}else if(name == 'fourth'){
				obj[i] = (quest[3].inspection(val)) ? true : false;
			}
		}		
		for(var i = 0; i <= obj.length - 1; i++){
			if(obj[i] == true){
				flag += 1;
			}
		}


		function addModal(str) {
			var res = $("#result"),
			text_one,
			text_second;

			if(str == 'ok'){
				text_one = document.createTextNode("Поздравляем!!!");
				text_secound = document.createTextNode("Вы здали тест");
			}else {
				text_one = document.createTextNode("Сожалеем (((");
					text_secound = document.createTextNode("Вы ответили не верно.");
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

					res.children().remove();
			}


			if(flag == obj.length) {
				addModal("ok");

			}else {
				addModal("bead");
			}
			$(".modals img").on("click", closedModel);

		}

		$("button").on("click", getResult);


	});