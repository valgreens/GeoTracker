App.Services = (function(lng, app, undefined) {

	var sendPosition = function(position) {
		
		lng.Service.get('http://127.0.0.1:3000/api',
			{
				id: 'valverde',
				latitud: position.coords.latitude,
				longitud: position.coords.longitude
			}, function(response) {
				console.error(response);
			}
		);
	};

    return {
    	sendPosition: sendPosition
    }

})(LUNGO, App);