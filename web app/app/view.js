App.View = (function(lng, app, undefined) {

	

	var showPosition = function (position) {
		lng.dom('img#map-point').attr('src', 'http://maps.googleapis.com/maps/api/staticmap?center='+position.latitude+','+position.longitude+'&size=400x400&zoom=15&markers=color:blue%7Clabel:G%7C'+position.latitude+','+position.longitude+'&sensor=false');
	};

    return{
    	showPosition: showPosition
    }

})(LUNGO, App);