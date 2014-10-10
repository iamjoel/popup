$(document).ready(function () {
	$('.content1').popup({
		trigger: $('#popup-btn1'),
	    size: 'middle',
	    background: '#fff'
	});


	$('<div>abcdefghijk</div>').popup({
		trigger: $('#popup-btn2'),
	    width: 200,
	    height: 200,
	    background: '#fff'
	});
})