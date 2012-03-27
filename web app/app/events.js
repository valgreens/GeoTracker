App.Events = (function(lng, app, undefined) {

	lng.dom('section#GeoTracker header a').tap(function(event) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(app.Services.sendPosition);
		}
	});

    return {

    }

})(LUNGO, App);