function save_img() {

	var canvas  = document.getElementById("pjscanvas");
	var context = canvas.getContext("2d");
	var img     = canvas.toDataURL("image/png");
	
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	
	$('#modalbox').html('<img src="/images/ajax-loader.gif" />');
	
	$('#modalbox').html('<img src="'+img+'"/>').fadeIn('fast');
	
	$('#modalbox').css({
		position:'absolute',
		left: (parseInt($(window).width() - 1040))/2,
		top: (parseInt($(window).height() - 540))/2
	});
	
	$('#container').fadeTo('slow', 0.2, function() {
      // fade the rest of the page
    });
	
	$('#modalbox').append('<p style="text-align:left; width:100%">Right click to save image.<span style="float:right;"><a href="#" onclick="close_img(); return false">Close X</a></span></p>');
}

function close_img() {
	$('#container').fadeTo('slow', 1, function() {
      // fade the rest of the page
    });
	
	$('#modalbox').fadeOut('fast');
}

$(document).ready(function() {
	$('#front_canvas').mouseenter(function() {
		$('#recursion_message').slideDown('slow');
		$('#front_img_img').fadeOut();
	});
});