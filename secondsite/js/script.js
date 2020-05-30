$(document).ready(function() {
	$("#menu").on("click", "a", function(event) {
		event.preventDefault();
		var target = $(this).attr("href"),
		top = $(target).offset().top;
		$("html,body").animate({scrollTop: top - 70}, 1500);
	});

	$('.kenya').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
	});
	$('.iceland').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
	});
	$('.zealand').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
	});
});

