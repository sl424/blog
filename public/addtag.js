document.addEventListener('DOMContentLoaded', function() {
	var el = document.getElementsByTagName('pre');
	for (var i = 0; i < el.length; i++){
		el[i].classList.add("prettyprint"); 
	}
});
