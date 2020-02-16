
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 10.000, lng: 0.000},
    zoom: 2,
    scrollwheel: false
  });
  
	var window = new google.maps.InfoWindow({
		content: "",
	});
	

	var France = new google.maps.Marker({
		position: {lat: 48.857, lng: 2.352},
		map: map,
		title: 'France'
	});
  	var Fr =  '<h4 class="center">France</h4>' +
                '<img class="flag" src="img/map/France.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>My home country! I grew up in Seine-Saint-Denis, (Paris northeastern suburb). My paternal family is from Brittany and my maternal one from Picardie, but I am also familiar with Vendée, Jura and Corsica.</small></p>';
	France.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Fr);
    	window.open(map, this);
	});
	

	var Boston = new google.maps.Marker({
		position: {lat: 42.360, lng: -71.059},
		map: map,
		title: 'Boston'
	});
  	var Bs = '<h4 class="center">Boston</h4>' +
                '<img class="flag" src="img/map/USA.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>My current residency. During my first internships at Harvard (2013) and MIT (2014) I lived in Central square and at <a href="http://web.mit.edu/fenwayhouse/www/life.html">Fenway House</a> respectively. I am currently in Cambridge but might move down to the medical area in Longwood for the following years.</small></p>';
	Boston.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Bs);
    	window.open(map, this);
	});


	var New_York = new google.maps.Marker({
		position: {lat: 40.713, lng: -74.006},
		map: map,
		title: 'New York'
	});
  	var NY = '<h4 class="center">New York</h4>' +
                '<img class="flag" src="img/map/USA.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>During my first stay in the US in 2013, I took the opportunity to visit New York for a few days.</small></p>';
	New_York.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(NY);
    	window.open(map, this);
	});
	

	var United_Kingdom = new google.maps.Marker({
		position: {lat: 51.507, lng: -0.139},
		map: map,
		title: 'United Kingdom'
	});
  	var UK = '<h4 class="center">United Kingdom</h4>' +
                '<img class="flag" src="img/map/United_Kingdom.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>I had the opportunity to visit London and Oxford during my master and my internship at Cambridge (2013-2014). Before that I already had the chance to visit London as an undergraduate at Ecole Nationale des Ponts ParisTech (2011), and particularly enjoyed the National Gallery. During my preparatory classes, I also did two weeks of "one to one" training to improve my English (2009).</small></p>';
	United_Kingdom.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(UK);
    	window.open(map, this);
	});


	var Germany = new google.maps.Marker({
		position: {lat: 52.520, lng: 13.405},
		map: map,
		title: 'Germany'
	});
  	var Gm = '<h4 class="center">Germany</h4>' +
                '<img class="flag" src="img/map/Germany.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>I visited Berlin for one week in high school (2006), and did one week of "one to one training" to improve my German during my preparatory classes (2008).</small></p>';
	Germany.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Gm);
    	window.open(map, this);
	});
	

	var Spain = new google.maps.Marker({
		position: {lat: 40.417, lng: -3.704},
		map: map,
		title: 'Spain'
	});
  	var Sp = '<h4 class="center">Spain</h4>' +
                '<img class="flag" src="img/map/Spain.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>During my undergraduate (2012), I was given the opportunity to spend one week in Madrid as part of the Athens program. The title of the course was <a href="http://www.athensprogramme.com/catalog/show/895">\'Rage against the machines\'</a> and consisted of dystopia movies analysis. I wrote a short <a href="https://algathens2012akira.wordpress.com/2012/12/02/hello-world/">presentation</a> on Katsuhiro Otomo\'s masterpiece Akira. Outside of the classes, I visited the Prado.</small></p>';
	Spain.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Sp);
    	window.open(map, this);
	});
	

	var Belgium = new google.maps.Marker({
		position: {lat: 50.850, lng: 4.352},
		map: map,
		title: 'Belgium'
	});
  	var Bg = '<h4 class="center">Belgium</h4>' +
                '<img class="flag" src="img/map/Belgium.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>As a teenager I visited Belgium several times as it was very close from my Grand Parent\'s farm in Saint Gobert (Picardie, France).</small></p>';
	Belgium.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Bg);
    	window.open(map, this);
	});
	

	var Greece = new google.maps.Marker({
		position: {lat: 37.984, lng: 23.729},
		map: map,
		title: 'Greece'
	});
  	var Gc = '<h4 class="center">Greece</h4>' +
                '<img class="flag" src="img/map/Greece.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>In junior school (2005), I was given the opportunity to visit Athens as a class trip. I particularly remember wandering in the Acropolis with the guide, who taught us a lot about the Parthenon and the Herodeon.</small></p>';
	Greece.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Gc);
    	window.open(map, this);
	});


	var Morocco = new google.maps.Marker({
		position: {lat: 33.573, lng: -7.590},
		map: map,
		title: 'Morocco'
	});
  	var Mr = '<h4 class="center">Morocco</h4>' +
                '<img class="flag" src="img/map/Morocco.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>When I was a student at the department of Mechanical Engineering and Material Sciences at Ecole Nationale des Ponts et Chaussées (2012), we spent a week in Morocco. We first visited Tangier for its low CO2 emission <a href="https://group.renault.com/en/our-company/locations/renault-locations/tangier-plant/">factory</a> (Renault) and its wind farm. We then went to Casablanca and visited both its Harbor and the Hassan II mosque.</small></p>';
	Morocco.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Mr);
    	window.open(map, this);
	});


	var Shanghai = new google.maps.Marker({
		position: {lat: 31.230, lng: 121.474},
		map: map,
		title: 'Shanghai'
	});
  	var Sh = '<h4 class="center">Shanghai</h4>' +
                '<img class="flag" src="img/map/China.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>In 2012 I did a three months internship at Tongji University, in the College of Environmental Science and Engineering. Around Shanghai, I visited Hangzhou, and we did a laboratory retreat in Taizhou.</small></p>';
	Shanghai.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Sh);
    	window.open(map, this);
	});


	var Beijing = new google.maps.Marker({
		position: {lat: 39.904, lng: 116.407},
		map: map,
		title: 'Beijing'
	});
  	var Bj = '<h4 class="center">Beijing</h4>' +
                '<img class="flag" src="img/map/China.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>During my internship in Shanghai (2012), I took a week off to visit Beijing. I walked on the Great Wall, visited the Summer Palace, the Forbidden City and Tian\'anmen Square. I also developed rudimentary bargaining skills that would prove useful in my later trip to Morocco!</small></p>';
	Beijing.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Bj);
    	window.open(map, this);
	});


	var Singapore = new google.maps.Marker({
		position: {lat: 1.355, lng: 103.868},
		map: map,
		title: 'Singapore'
	});
  	var Sg = '<h4 class="center">Singapore</h4>' +
                '<img class="flag" src="img/map/Singapore.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>I spent a short week in Singapore in 2015. I enjoyed the Marina Bay and the City Center, but my favorite places are definitely the bird park, the aquarium, the zoo, the night safari and the riverside!</small></p>';
	Singapore.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Sg);
    	window.open(map, this);
	});
 
	var Taiwan = new google.maps.Marker({
		position: {lat: 25.033, lng: 121.565},
		map: map,
		title: 'Taiwan'
	});
  	var Tw = '<h4 class="center">Taiwan</h4>' +
                '<img class="flag" src="img/map/Taiwan.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>I spent three days in Taipei in 2015. It was short but I visited Taipei 101, wandered in the city center and enjoyed the night market.</small></p>';
	Taiwan.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Tw);
    	window.open(map, this);
	});
	
	
	var Japan = new google.maps.Marker({
		position: {lat: 35.690, lng: 139.692},
		map: map,
		title: 'Japan'
	});
  	var Jp = '<h4 class="center">Japan</h4>' +
                '<img class="flag" src="img/map/Japan.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>I spent ten intense days in Japan in 2015. I landed in Tokyo, went to the Mount Fuji, spent a few days in Kyoto, Osaka and Nara and visited Nagano, the Jigokudani Monkey Park and its hot sources, before I came back to Tokyo. From there I also made one day trips to both Nagoya and Yokohama.</small></p>';
	Japan.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Jp);
    	window.open(map, this);
	});
	
 
	var Guadeloupe = new google.maps.Marker({
		position: {lat: 16.265, lng: -61.551},
		map: map,
		title: 'Guadeloupe'
	});
  	var Gl = '<h4 class="center">Guadeloupe</h4>' +
                '<img class="flag" src="img/map/Guadeloupe.png" height="100" alt="">'+
                '<p></p>'+
                '<p><small>I visited this island twice as a child, and cherish the memories.</small></p>';
	Guadeloupe.addListener('click', function() {
  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
    	}		
		marker = this;
  		if (this.getAnimation() == null) {
    		this.setAnimation(google.maps.Animation.BOUNCE);
  		} else {
    		this.setAnimation(null);
  		}
		window.setContent(Gl);
    	window.open(map, this);
	});
	
  marker = new google.maps.Marker({
    map: map,
  });
  
  google.maps.event.addListener(window,'closeclick',function(){
  	marker.setAnimation(null);
  });
  
}


