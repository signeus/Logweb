$("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
     $('.welcome_title').fadeIn(800);
});

$("#signup-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-signup-success');
     $('.informative_title').fadeOut(200);
     $('.welcome_title').fadeIn(800);
});