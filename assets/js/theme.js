
(function ($) {
	"use strict";


	 $(window).on('scroll', function (){		
		if ($("header.top_header").offset().top > 550) {
			$("header.top_header").addClass("views");
		} else {
			$("header.top_header").removeClass("views");
		}		
	});	
	
	
	$('a.scroll[href^="#"]').on('click', function (e) {
				e.preventDefault();
				var target = this.hash;
				var $target = $(target);
				$('html, body').animate({
					'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});	
	
	

})(window.jQuery);


