// define(
//     'view',
//     ['jquery', 'tmpl', 'modul' ],
  function View( modul ){ // Начало
    	// $(function View(){

    		var self = this;


       function init() {

       	var wrapper = tmpl($('#wrapper-template').html());
       	$('body').append(wrapper);
       	self.elements = {
       		input: $('.item-value'),
       		addBtn: $('.item-add'),
       		listContainer: $('.item-list')
       	};

       	self.renderList(modul.data);
       	return true;
       };

       self.renderList = function (datas) {

       	var list = tmpl($('#list-tamplate').html(), {data: datas});

       	self.elements.listContainer.html(list);
       	return true;
       };
       function getElement (val) {
       	var str = '[data-id = ' + '"' + val + '"]';
       	var element = $(str);
       	return element;
       }

       self.fixText = function (val) {
       	var element = getElement(val);

       	if(element.attr('disabled') == 'disabled') {
       	element.removeAttr('disabled'); //
       	element.focus();
       } else {
       	element.attr('disabled', true); //
       	element.blur();
       }
     }

     self.change = function (val) {
     	var element = getElement(val);

     	if(element.next().next().css('display') !== 'block') {	
     		element.next().next().css('display','block');
     		element.next().next().next().css('display','none');
     	} else {
     		element.next().next().css('display','none');
     		element.next().next().next().css('display','block');
     	}
     }
     self.doneFix = function (val) {

     	var element = getElement(val);

     }

     init();

        // 
        // Концовка


    	// });

}
// );