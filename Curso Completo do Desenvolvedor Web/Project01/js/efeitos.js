$(document).ready(function(){
	$("#logotipo").on("mouseover", function(){
		$("#banner h1").addClass("efeito");
	}).on("mouseout", function(){
		$("#banner h1").removeClass("efeito");
	});
	$("#input-search").on("focus", function(){
		$("li.search").addClass("active");
	}).on("blur", function(){
		$("li.search").removeClass("active");
	});
	$(".thumbnails").owlCarousel({
		loop: true,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	$('#btn-news-next').click(function() {
    	owl.trigger('next.owl.carousel');
	});
	$('#btn-news-prev').click(function() {
    owl.trigger('prev.owl.carousel');
	});
});