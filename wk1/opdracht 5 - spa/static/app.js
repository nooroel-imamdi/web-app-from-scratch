(function (){
	'use strict';
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
			var showSection = document.getElementsByClassName('show');

			for (var i = 0; i < showSection.length; i++) {
			 	if(showSection[i].id == activeSection.id){
			 		showSection[i].classList.remove('hide');
			 	} else {
			 		showSection[i].classList.add('hide');
			 	}
			} 
		},
	};

	app.init();

})();