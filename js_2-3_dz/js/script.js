var obj = {
	addElement: function (tagName, parent, ordinalNum) {
		var element = document.createElement(tagName);
		var insert = document.querySelectorAll(parent);
		insert[ordinalNum].appendChild(element);
	},

	addClass: function (tagName, newClass, ordinalNum) {
		var element = document.querySelectorAll(tagName);
		element[ordinalNum].classList.add(newClass);
	},

	setAttr: function (tagName, value, attribute,  ordinalNum) {
		var element = document.querySelectorAll(tagName);
		element[ordinalNum].setAttribute(attribute, value);
	},

	addText: function (text, parent, ordinalNum) {
		var element = document.createTextNode(text);
		var insert = document.querySelectorAll(parent);
		insert[ordinalNum].appendChild(element);
	},

	setContent: function (tagName, text, ordinalNum) {
		var element = document.querySelectorAll(tagName);
		element[ordinalNum].innerHTML = text;
	}
};



obj.addElement('form', 'body', 0);
obj.addClass('form', 'container', 0);

obj.addElement('h2', 'form', 0);
obj.addClass('h2', 'text-center', 0);
obj.setContent('h2', 'Тест по программированию', 0);

obj.addElement('ol', 'form', 0);

for (var i = 0; i < 3; i++) {

	obj.addElement('li','ol', 0);

	obj.addElement('h3', 'li', i);
	obj.setContent('h3', 'Вопрос №'+(i+1), i);

		for (var a = 0; a < 3; a++) {
			var number = 3*i+a;

			obj.addElement('div', 'li', i);

			obj.addElement('section', 'div', number);
			obj.setAttr('section', 'margin-left: 20px', 'style', number);
			obj.addClass('section', 'checkbox', number);

			obj.addElement('input', 'section', number);
			obj.setAttr('input', 'checkbox', 'type', number);
			obj.setAttr('input', 'option' + number, 'name', number);
			obj.setAttr('input', 'a' + number, 'value', number);

			obj.addText('Вариант ответа №'+(a+1), 'section', number);
		};
};

obj.addElement('button', 'body', 0);
obj.setAttr('button', 'type', 'submit', 0);
obj.addClass('button', 'btn', 0);
obj.addClass('button', 'btn-primary', 0);
obj.addClass('button', 'center-block', 0);
obj.addClass('button', 'btn-lg', 0);
obj.setContent('button', 'Проверить мои результаты', 0);
