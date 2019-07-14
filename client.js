//myclient

window.onload = function() {
	var url, i , jqxhr;

	for(i = 0; i < 1; ++i) {
		url = document.URL + 'inputs/' + i;
		jqxhr = $.getJSON(url, function(data) {
			console.log('API response received');
			$('#input').append('<p>The Status is: ' + data['value']);
			$('#input').append('<p>The order is: ' + data['value']);
		});
	}
};
