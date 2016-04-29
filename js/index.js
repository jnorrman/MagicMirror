// Functions to update the clock
function clock() { 
	var t = moment(),
      s = t.seconds() * 6,
      a = t.minutes() * 6,
      o = t.hours() % 12 / 12 * 360 + (a / 12);
	$(".hour").css("transform", "rotate(" + o + "deg)");
	$(".minute").css("transform", "rotate(" + a + "deg)");
	$(".seconds").css("transform", "rotate(" + s + "deg)");
	updateTXT(t.hours(), t.minute());
}

function refreshClock() {
	clock(), setTimeout(refreshClock, 500)
}

function updateTXT(hour, min) {
	if (hour > 0 && hour < 11) {
		document.getElementById('Text').innerHTML = "God morgon Hampus"
	}
	else if (hour >= 11 && hour < 15) {
		document.getElementById('Text').innerHTML = "Hoppas lunchen smakar bra"
	}
	else if (hour >= 15 && hour < 20) {
		document.getElementById('Text').innerHTML = "Välkommen hem Hampus"
	}
	else {
		document.getElementById('Text').innerHTML = "God natt Hampus"
	}
	if (min == 10)
		updateWeather();
}

// Docs at http://simpleweatherjs.com
function updateWeather() {
	$(document).ready(function() {
	  $.simpleWeather({
	    location: '',
	    woeid: '906057',
	    unit: 'c',
	    success: function(weather) {
	      html = '<h1 class="icon-'+weather.code+'"></h1><h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	  
	      $("#weather").html(html);
	    },
	    error: function(error) {
	      $("#weather").html('<p>'+error+'</p>');
	    }
	  });
	});
};


updateWeather();
refreshClock();