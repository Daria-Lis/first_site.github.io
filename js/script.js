$(document).ready(function() {
	$('.banner_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive:
  				 [
				  	{
				    	breakpoint: 768,
				    	settings: {
				      		slidesToShow: 1
				    	}
				  	}
				]
	});
});

$(document).ready(function() {
$(".tabs__item").on("click", function(event) {
				event.preventDefault();

				$(".tabs__item.active").removeClass("active");
				$(".tabs__content-item.active").removeClass("active");
				
				$(this).addClass("active");
				$( $(this).attr("href") ).addClass("active");
		});
});

$(document).ready(function() {
			$('.slider').slick({
				infinite: true,
				speed: 200,
				slidesToShow: 2,
				slideToScroll: 1,
				responsive: [
				  	{
				    	breakpoint: 768,
				    	settings: {
				      		slidesToShow: 1
				    	}
				  	}
				]
			});	
});	