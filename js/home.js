
function toggleBio () {
	if( $('.person-bio').css('opacity') == 0 ){
    	$(".person-image").mouseover(function () {
	    	$(this).parent().siblings('.person-bio').addClass('active');
	    }).mouseout(function () {
	    	$(this).parent().siblings('.person-bio').removeClass('active');
	    });
    }
}

jQuery(document).ready(function($) {
	// Slider
    $(".royalSlider").royalSlider({
    	autoScaleSlider: true,
    	autoScaleSliderWidth: 1200,
    	autoScaleSliderHeight: 600,
    	imageScaleMode: 'fill',
        imageAlignCenter:true,
        keyboardNavEnabled: true
    });  

    // Conductor Tooltip

    toggleBio();
    $(window).resize(function() {
    	toggleBio();
    });
	    
	
});