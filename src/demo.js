$(document).ready(function () {
	window.pop1 = $('.content1').popup({
		trigger: $('#popup-btn1'),
	    size: 'middle',
	    background: '#fff'
	});


	window.pop2 = $('<div>abcdefghijk</div>').popup({
		trigger: $('#popup-btn2'),
	    width: 200,
	    height: 200,
	    background: '#fff',
	    animate: false,
	    clickOutsideHide: false
	});


})