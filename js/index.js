	function clock() { 
		var t = moment(),
	      s = t.seconds() * 6,
	      a = t.minutes() * 6,
	      o = t.hours() % 12 / 12 * 360 + (a / 12);
		$(".hour").css("transform", "rotate(" + o + "deg)");
		$(".minute").css("transform", "rotate(" + a + "deg)");
		$(".seconds").css("transform", "rotate(" + s + "deg)");
		updateTXT(t.hours());
	}

	function refreshClock() {
		clock(), setTimeout(refreshClock, 500)
	}

	function updateTXT(hour) {
		if (hour > 0 && hour < 11) {
			document.getElementById('Text').innerHTML = "God morgon Hampus"
			SMScounter = 15;
		}
		else if (hour >= 11 && hour < 15) {
			document.getElementById('Text').innerHTML = "Hoppas lunchen smakar bra"
			SMScounter = 15;
		}
		else if (hour >= 15 && hour < 19) {
			document.getElementById('Text').innerHTML = "Välkommen hem Hampus"
			SMScounter = 15;
		}
		else {
			document.getElementById('Text').innerHTML = "God natt Hampus"
			SMScounter = 15;
		}
	}

// Docs at http://simpleweatherjs.com
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


refreshClock();