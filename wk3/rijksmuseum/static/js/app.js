(function (){
	'use strict';
	var overviewOutput = document.getElementById('overview');
    var resultsDetail = document.getElementById('detail');

	var app = {
		init: function(){
			routes.init();
			api.request();
			search.submitEvent();
		}	
	};


	var artists = [];

	var routes = {
		init: function(){
			routie({
				'': function() {
				    routie('zoeken');
				    console.log('Home');
			    },
			    'paintings/:id': function(id) {
		            var paintings = artists.find(function (artists) {
            		return artists.id === id;
          		});

		        console.log(artists);
		        // resultsDetail.innerHTML = templateDetail(album);
          		overviewOutput.classList.add("hide");
          		resultsDetail.classList.remove("hide");
		        }
			});
		}
	};

	var search = {
		submitEvent: function(){
			document.getElementById("search-field").addEventListener("submit", this.field);
		},
		field: function(){
			var query = document.getElementById("user-input").value;
			api.request(query);

			if (query.length > 0) {
				overviewOutput.classList.remove("hide");
          		resultsDetail.classList.add("hide");
          	}
			
		}
	};

	var api = {
		request: function(query){
			var request = new window.XMLHttpRequest();
			var userInput = query;
			console.log(query);
			var url = "https://www.rijksmuseum.nl/api/nl/collection?q=" + userInput + "&key=NG2q9L0R&format=json";
			request.open("GET", url, true);
			request.onload = function() {
			   if (request.status >= 200 && request.status < 400) {
			       // Success!
			       var data = JSON.parse(request.responseText);
			       templates.overview(data);
			       templates.detail(data);

			       console.log(data);

			   } else {
			       // We reached our target server, but it returned an error
			   }

			};

			request.onerror = function() {
			   // There was a connection error of some sort
			};

			request.send();

		},
	};

	var templates = {
		overview: function(data){
			var rawTemplating = document.getElementById("overview-template").innerHTML;
			var compiledTemplate = Handlebars.compile(rawTemplating);
			var ourGeneratedHTML = compiledTemplate(data);

			var outputArt = document.getElementById("overview");
			outputArt.innerHTML = ourGeneratedHTML;
		},
		detail: function(data){
			var rawTemplating = document.getElementById("detail-template").innerHTML;
			var compiledTemplate = Handlebars.compile(rawTemplating);
			var ourGeneratedHTML = compiledTemplate(data);

			var outputArt = document.getElementById("detail");
			outputArt.innerHTML = ourGeneratedHTML;
		}
	}

	app.init();

})();