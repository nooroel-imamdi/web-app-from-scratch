(function (){
	'use strict';
	var overviewOutput = document.getElementById('overview'),
    	resultsDetail = document.getElementById('detail'),
    	filterOption = document.getElementById("filter-output");


	var app = {
		init: function(){
			routes.routie();
			collection.get();
			search.submitEvent();
		}
	};
	
	// var artists = [];
	

	var routes = {
		routie: function(){
			routie({
				'': function() {
				    routie('zoeken');
			    },
			    'paintings/:objectNumber': function(objectNumber) {
			    	
			    	collection.getPainting(objectNumber);
		        }
			});
		},
		goBack: function(backButton){
			backButton = document.getElementById("back-button").innerHTML;
			window.history.back(backButton);
		}
	};

	// searchfield
	var search = {
		submitEvent: function(){
			document.getElementById("search-field").addEventListener("submit", this.field);
		},
		field: function(){
			var query = document.getElementById("user-input").value;
			
			// artists.push(query);
			
			collection.get(query);

			if (query.length > 0) {
				overviewOutput.classList.remove("hide");
          		resultsDetail.classList.add("hide");
          		document.getElementById("search-userinput").innerHTML = "U zocht op " + "'" + query + "'";
          	} else{
          		document.getElementById("search-userinput").innerHTML = "U heeft het zoekveld leeggelaten.";
          		overviewOutput.classList.add("hide");
          	}
			
		}
	};

	// Get data from API
	var collection = {
		get: function(query){
			var request = new window.XMLHttpRequest();
			var userInput = query;
			
			var url = "https://www.rijksmuseum.nl/api/nl/collection?q=" + userInput + "&key=NG2q9L0R&format=json";
			request.open("GET", url, true);
			request.onload = function() {
			   if (request.status >= 200 && request.status < 400) {
			       // Success!
			       var data = JSON.parse(request.responseText);

			       templates.overview(data);
			       templates.filter(data);

			   } else {
			       // We reached our target server, but it returned an error
			   }

			};

			request.onerror = function() {
			   // There was a connection error of some sort
			};

			request.send();
		},
		
		getPainting: function (objectNumber) {
			var request = new window.XMLHttpRequest();
			var url = "https://www.rijksmuseum.nl/api/nl/collection/" + objectNumber + "?&key=NG2q9L0R&format=json";

			request.open("GET", url, true);
			request.onload = function() {
			   if (request.status >= 200 && request.status < 400) {
			       // Success!
			       var data = JSON.parse(request.responseText);
					
					templates.detail(data);

			   } else {
			       // We reached our target server, but it returned an error
			   }

			};

			request.onerror = function() {
			   // There was a connection error of some sort
			};

			request.send();

			templates.detail(objectNumber);
		}

	};

	// Templating
	var templates = {
		overview: function(data){
			var rawTemplating = document.getElementById("overview-template").innerHTML;
			var compiledTemplate = Handlebars.compile(rawTemplating);
			var ourGeneratedHTML = compiledTemplate(data);

			var outputArt = document.getElementById("overview");
			outputArt.innerHTML = ourGeneratedHTML;

          	filterOption.classList.add("hide");
		},
		detail: function(data){
			var rawTemplating = document.getElementById("detail-template").innerHTML;
			var compiledTemplate = Handlebars.compile(rawTemplating);
			var ourGeneratedHTML = compiledTemplate(data);

			var outputArt = document.getElementById("detail");
			outputArt.innerHTML = ourGeneratedHTML;

			overviewOutput.classList.add("hide");
          	resultsDetail.classList.remove("hide");
          	filterOption.classList.add("hide");

          	
		},
        filter: function(data) {
            var filterCollection = [];

            Object.keys(data).forEach(function (key) {
                filterCollection.push(data[key]);
            });

            

            var myFilter = filterCollection.filter(function (obj) {
                if (obj.hasImage === true) {
                    return filterCollection;
                }
                console.log(obj);
            });
            // console.log(myFilter);

            var filterObject = {myFilter};

   //          var rawTemplating = document.getElementById("filter-template").innerHTML;
			// var compiledTemplate = Handlebars.compile(rawTemplating);
			// var ourGeneratedHTML = compiledTemplate(data);

			// var outputArt = document.getElementById("filter-output");
			// outputArt.innerHTML = ourGeneratedHTML;


			// overviewOutput.classList.add("hide");
          	resultsDetail.classList.add("hide");
          	filterOption.classList.remove("hide");

   
        }
        
	}

	app.init();

})();