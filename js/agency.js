---
---


// jQuery(document).ready(function(){
//     jQuery("#team-intro").click(function(){
//         $('#team-intro').addClass('bounce');
//     });
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$('#map_model').on('shown.bs.modal', (function() {
  var mapIsAdded = false;

  return function() {
    if (!mapIsAdded) {
      $('.modal-body').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.150077056266!2d121.48978899999997!3d25.062902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8e049be5471%3A0xc0496d5e6358b3cf!2z5LiJ6YeN5Y2A57ac5ZCI6auU6IKy6aSo!5e0!3m2!1szh-TW!2stw!4v1438250382747" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>');

      mapIsAdded = true;
    }    
  };
})());