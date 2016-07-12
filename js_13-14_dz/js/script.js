window.addEventListener('DOMContentLoaded', function() {
	// 'use strict;'

	console.log('Ready');


	var questions = {
		
		question1 : "Что обозначает директива ‘use strict’?",
		answer11 : "a. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.",
		answer12 : "b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.",
		answer13 : "c. Код данного скрипта будет обработан по строгим правилам стандарта HTML5.",
		answer14 : "d. Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.",
		inspection : function(str){
			if(str == "b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.") {

			}else{

			}
		},
		
		question2 : "К какому участку скрипта применяется строгие правила ‘use strict’?",
		answer21 : "a. Строгие правила работают между директивами ‘use strict’ и ‘strict end’.",
		answer22 : "b. Во всем скрипте.",
		answer23 : "c. Либо во всем скрипте, либо в отдельной функции.",
		answer24 : "d. Внутри блока {}",
		inspection : function(str){
			if(str == "c. Либо во всем скрипте, либо в отдельной функции.") {

			}else{

			}
		},
		
		question3 : "Какие основное ограничения к объявлению переменных в строгом режиме?",
		answer31 : "a. Глобальные переменные должны объявляться с использованием ключевого слова var",
		answer32 : "b. Любая переменная должна объявляться с использованием ключевого слова var",
		answer33 : "c. Переменные функций должны объявляться с использованием ключевого слова var",
		answer34 : "d. Название переменных должно быть camel-case с маленькой буквы.",
		inspection : function(str){
			if(str == "b. Любая переменная должна объявляться с использованием ключевого слова var") {

			}else{

			}
		},
		
		question4 : "Какой из пунктов  верен по отношению к строгому режиму javascript?",
		answer41 : "a.",
		answer42 : "b.",
		answer43 : "c.",
		answer44 : "d.",
		inspection : function(str){
			if(str == '') {

			}else{

			}
		}
	};

	var str = JSON.stringify(questions);
	localStorage.setItem("questions", str);

	var getQuestions = JSON.parse(localStorage.getItem("questions"));
	console.log(questions);



	var htmlTemps = $("#template").html();
	console.log("template: " + htmlTemps);
	console.log("questions: " + questions);

	var lists = $(".listQustions");

	//document.list.innerHTML = _.template(htmlTemps)(questions);
	var content = tmpl(htmlTemps, questions);

	lists.append(content);



});