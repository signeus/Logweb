$("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('.form-container').fadeOut(500);
	 $('.wrapper').addClass('signin-success');
     $('.welcome_title').fadeIn(800);
});

$("#signup-button").click(function(event){
		 event.preventDefault();
	 
	 $('.form-container').fadeOut(500);
	 $('.wrapper').addClass('signup-success');
     $('.informative_title').fadeOut(200);
     $('.welcome_title').fadeIn(800);
});