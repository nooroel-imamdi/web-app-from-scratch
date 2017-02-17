(function (){
	'use strict';

	var app = {
		init: function(){
			routes.init();
			// sections.toggle("");
			dataRijksmuseum.init();
			search.init();
			// renderHTML.init();
			renderOverview.init();
			renderDetail.init();

		}	
	};
	// routie({
	// 	'': function() {
	//       console.log("screw you guys, I'm going");
	//     },
	//     '#nooroel': function() {
	//       console.log("Ja hoor");
	//     },

	// });

	var routes = {
		init: function(){
			// window.addEventListener("hashchange",function(){
			// 	sections.toggle(location.hash);
			// });
			routie({
				'': function() {
				    routie('zoeken');
				    getTotalSpan("random");
			    },

			    'zoeken': function() {
			    	console.log("zoeken geblazen");
			    },
			    '*': function() {
			    	console.log("zoeken geblazen");
			    },
			    'schilder/:id': function(id) {
		            buildUrl("detail", id);
		        }
			});
		}
	};
	// var sections = {
	// 	toggle: function(route){
	// 		var activeSection = document.querySelector(route);
	// 		var showSection = document.getElementsByClassName('show');

	// 		for (var i = 0; i < showSection.length; i++) {
	// 		 	if(showSection[i].id == activeSection.id){
	// 		 		showSection[i].classList.remove('hide');
	// 		 	} else {
	// 		 		showSection[i].classList.add('hide');
	// 		 	}
	// 		} 
	// 	},
	// };
	var search = {
		init: function(){
			document.getElementById("search-btn").addEventListener('click', this.userInput);
		},
		userInput: function(){
			var query = document.getElementById("user-input").value;
			dataRijksmuseum.init(query);
			// renderHTML.init(query);
			renderOverview.init(query);
		}
	};
	var dataRijksmuseum = {
		init: function(query){
			var request = new window.XMLHttpRequest();
			var userInput = query;
			console.log(query);
			var url = "https://www.rijksmuseum.nl/api/nl/collection?q=" + userInput + "&key=NG2q9L0R&format=json";
			request.open("GET", url, true);
			// request.open("GET", "https://www.rijksmuseum.nl/api/nl/collection?&key=NG2q9L0R&format=json", true);
			request.onload = function() {
			   if (request.status >= 200 && request.status < 400) {
			       // Success!
			       var data = JSON.parse(request.responseText);
			       // renderHTML.init(data);
			       renderOverview.init(data);
			       renderDetail.init(data);
			   } else {
			       // We reached our target server, but it returned an error
			   }
			   // console.log(data);

			};

			request.onerror = function() {
			   // There was a connection error of some sort
			};

			request.send();

		},
	};
	// var renderHTML = {
	// 	init: function(data){
	// 		var rawTemplating = document.getElementById("art-template").innerHTML;
	// 		var compiledTemplate = Handlebars.compile(rawTemplating);
	// 		var ourGeneratedHTML = compiledTemplate(data);

	// 		var outputArt = document.getElementById("output-art");
	// 		outputArt.innerHTML = ourGeneratedHTML;

	// 		// console.log(data)

	// 		// document.getElementById('art-template').innerHTML = Handlebars.compile(document.getElementById('output-art').innerHTML)(data);
	// 	}
	// };
	var renderOverview = {
		init: function(data){
			var rawTemplating = document.getElementById("overview-template").innerHTML;
			var compiledTemplate = Handlebars.compile(rawTemplating);
			var ourGeneratedHTML = compiledTemplate(data);

			var outputArt = document.getElementById("overview");
			outputArt.innerHTML = ourGeneratedHTML;
		}
	};
	var renderDetail = {
		init: function(data){
			var rawTemplating = document.getElementById("detail-template").innerHTML;
			var compiledTemplate = Handlebars.compile(rawTemplating);
			var ourGeneratedHTML = compiledTemplate(data);

			var outputArt = document.getElementById("detail");
			outputArt.innerHTML = ourGeneratedHTML;
		}
	};
	var buildUrl = function(type, id) {
		var queryUrl = "";

		
	};

	app.init();

})();