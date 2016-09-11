requirejs.config({
    paths:{
        tmpl: 'tmpl',
        modul: 'modul',
        view: 'view',
        controller: 'controller'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        },
        'tmpl': {
        	exports: 'tmpl',
        },
        'modul': {
        	exports: 'modul',
        },
        'view': {
        	exports: 'view',
        },
        'controller': {
        	exports: 'controller',
        }

    }
});
require(
    ['jquery', 'tmpl', 'modul', 'view', 'controller'],
    function( $, Tmpl, modul, view, controller){
       $(function() {
       
       	
       	// console.log(Controller);
       	var modul = new Modul();
       	var views = new View(modul);
       	var controller = new Controller(modul, views);
       	
       });
        
    }
);