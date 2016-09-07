window.addEventListener("DOMContentLoaded", function() {	

	let strJson = JSON.stringify(quest);
	localStorage.setItem("questions", strJson);
	let getQuestions = JSON.parse(localStorage.getItem("questions"));


	let $lists = $(".listQustions"),
		  letter = 1;

	for(let questens of getQuestions.test) {
		let count = 0;

		let ques = `<li><h3> ${questens.question} </h3>`;
		$lists.append(ques);

		for(let values of questens.answer) {
		let res = 'abcdefg'.charAt(count);
			let options = `<div><label class="checkbox"><input type="${questens.type}" name="${questens.id}" value="${ letter + res }"> ${values} </label></div>`;
			$lists.append(options);
		count++;
		}
		letter++;
	}





		let points = 0,
				allGoodAnswer = 0,
				bals = 0;

	$(".modals img").on("click", function($lists) {
		quest.closedModel($lists);
	});

	$("button").on("click", function(){

		quest.addModal(quest.inspection(), quest.getMaxRes())
	});


});
