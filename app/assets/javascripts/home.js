$(function(){
  
  $("nav").on("click", "#About", function(evt){
     evt.preventDefault();
	  $.ajax({
		  dataType: "script",
	  	  url: 'home/about',
	  	  timeout: 5000,
	  	  error: function(XMLHttpRequest, errorTextStatus, error){
	    	alert("Failed to submit : "+ errorTextStatus+" ;"+error);
	  	  },
	  	  success: null
	    });
  });
  
  $("nav").on("click", "#Home", function(evt){
     evt.preventDefault();
	  $.ajax({
		  dataType: "script",
	  	  url: '/home',
	  	  timeout: 5000,
	  	  error: function(XMLHttpRequest, errorTextStatus, error){
	    	alert("Failed to submit : "+ errorTextStatus+" ;"+error);
	  	  },
	  	  success: null
	    });
  });

});