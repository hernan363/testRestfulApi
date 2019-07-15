//myclient

window.onload = function() {
	var url, i , jqxhr;

	for(i = 0; i < 1; ++i) {
		url = document.URL + 'api/';
		jqxhr = $.getJSON(url, function(data) {
			console.log('API response received');
			$('#states').append('<p>The Status is: ' + data[0].currentState);
			$('#states').append('<p>The order is: ' + data[1].targetState);
		});
	}
};
