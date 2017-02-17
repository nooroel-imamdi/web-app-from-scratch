(function (){
	'use strict';

	var app = {
		init: function(){
			routes.init();
			dataRijksmuseum.init();
			search.init();
			renderOverview.init();
			renderDetail.init();
		}	
	};

	var routes = {
		init: function(){
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
	
	var search = {
		init: function(){
			document.getElementById("search-btn").addEventListener('click', this.userInput);
		},
		userInput: function(){
			var query = document.getElementById("user-input").value;
			dataRijksmuseum.init(query);
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
			request.onload = function() {
			   if (request.status >= 200 && request.status < 400) {
			       // Success!
			       var data = JSON.parse(request.responseText);
			       renderOverview.init(data);
			       renderDetail.init(data);
			   } else {
			       console.log("Something should happen here, or else it's unnecessary.")
			   }


			};

			request.onerror = function() {
			   console.log("Something should happen here, or else it's unnecessary.");
			};

			request.send();

		},
	};
	
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
