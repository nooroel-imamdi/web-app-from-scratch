'use strict';
(function (){
	var app = {
		init: function(){
			routes.init();
			sections.toggle("#start-screen");
		}	
	};

	var routes = {
		init: function(){
			window.addEventListener("hashchange",function(){
				sections.toggle(location.hash);
			});
		}	
	};

	var sections ={
		toggle: function(route){
			var activeView = document.querySelector(route);
			var viewElements = document.getElementsByClassName('view');

			for (var i = 0; i < viewElements.length; i++) {
			 	if(viewElements[i].id == activeView.id){
			 		viewElements[i].classList.remove('hide');
			 	} else {
			 		viewElements[i].classList.add('hide');
			 	}
			} 
		},
	};

	app.init();
})();
