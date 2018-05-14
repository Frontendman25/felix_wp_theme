$(document).ready(function() {
 
/* Кнопка наверх на jQuery. */ 
	var
	speed = 300,
	$scrollTop = $('<a href="#" class="scrollTop"><i class="fa fa-angle-up" aria-hidden="true"></i></a>').appendTo('body');        
 
	$scrollTop.click(function(e){
		e.preventDefault();
 
		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});
 
	//появление
	function show_scrollTop(){
		( $(window).scrollTop() > 300 ) ? $scrollTop.stop().fadeIn(10):
		$scrollTop.stop().fadeOut(200);
	}
	$(window).scroll( function(){ show_scrollTop(); } );

});	