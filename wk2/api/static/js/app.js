(function (){
	'use strict';
	var overviewOutput = document.getElementById('overview');
    var resultsDetail = document.getElementById('detail');

    var rawTemplating = document.getElementById("detail-template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplating);

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

	var schilders = [];

	var routes = {
		init: function(){
			// window.addEventListener("hashchange",function(){
			// 	sections.toggle(location.hash);
			// });
			routie({
				'': function() {
				    routie('zoeken');
				    // getTotalSpan("random");
				    console.log('Home');
			    },

			    // 'zoeken': function() {
			    // 	console.log("zoeken geblazen");
			    // },
			    // '*': function() {
			    // 	console.log("zoeken geblazen");
			    // },
			    'schilder/:id': function(id) {
		            var schilder = schilders.find(function (schilder) {
            		return schilder.id === id;
          		});

          		console.log(schilder);
          		
          		resultsDetail.innerHTML = compiledTemplate(schilder);

          		
          		overviewOutput.classList.add('hide');
          		resultsDetail.classList.remove('hide');
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
			renderDetail.init(query);
			if (query.length > 0) {
				overviewOutput.classList.remove('hide');
          		resultsDetail.classList.add('hide');
          	}
			
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

	app.init();

})();