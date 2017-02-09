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
			var activeSection = document.querySelector(route);
			var viewSelections = document.getElementsByClassName('view');

			for (var i = 0; i < viewSelections.length; i++) {
			 	if(viewSelections[i].id == activeSection.id){
			 		viewSelections[i].classList.remove('hide');
			 	} else {
			 		viewSelections[i].classList.add('hide');
			 	}
			} 
		},
	};

	app.init();

})();