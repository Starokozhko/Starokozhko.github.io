$(function(){
	$('#btn').click(function(){
			$(".block").each(function(){
				var h = Math.floor(Math.random()*200);
				var w = Math.floor(Math.random()*200);
				$(this).height(h);
				$(this).width(w);
				
			});
			
	});


})