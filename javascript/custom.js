// --------------------------------------------------------
//	Slider Caption
// -------------------------------------------------------- 
$(document).ready(function() {
	$(".carousel-caption .rotate").textrotator({
		animation: "fade", // Text Rotator Fade Effect
		speed: 1500 // Text Rotator Fade Speed
	});
	
	$('.carousel').carousel({
		interval: 8000, // Carousel Slide Transition Time
		pause: 'none' // Carousel slider pause on mouse hover
	})
	
    $("a[data-gal^='prettyPhoto']").prettyPhoto(); // Pretty Photo for Lightbox Image
});

// --------------------------------------------------------
//	Scroll Up
// -------------------------------------------------------- 	
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

$('.scroll-up').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;
});

// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");				
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// -------------------------------------------------------- 	
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// --------------------------------------------------------
//	Control Spy to Track Menu Change
// -------------------------------------------------------- 	
$(document).ready(function(){
    $(".navigation-menu").scrollspy();
});

// --------------------------------------------------------
//	Stats Counter+ Waypoints to know when to activate
// -------------------------------------------------------- 	
$('#stats').waypoint(function() {
 $('.list-title').each(function() {
        counter = $(this).attr('data-count'),
        $(this).find('span').delay(6000).countTo({
            from: 50,
            to: counter,
            speed: 3000,// Stats Counter Speed
            refreshInterval: 50,
        });
    });
 }, { offset: '50%', triggerOnce: true });
 
// --------------------------------------------------------
//	Skills Knob + Waypoints to know when to activate
// -------------------------------------------------------- 	
$('#composure').waypoint(function() {
	$('.knob').each(function () {
          var element = $(this);
          var perc = element.attr("value");  
          element.knob({ 
               'value': 0, 
                'min':0,
                'max':100,
                "skin":"tron",
                "readOnly":true,
				'fgColor': '#FF3D7F', // Color of Skill Knobs
				'inputColor': '#FFF',
                "thickness":.1,// Thickness of Skill Knobs
				'dynamicDraw': true,
				'draw' : function () { $(this.i).val(this.cv + '%'); }
          });

		$({value: 0}).animate({ value: perc }, {
			duration: 3000,
			easing: 'swing',
			progress: function () {
			element.val(Math.ceil(this.value)).trigger('change')}
		});
	});
 }, { offset: '50%', triggerOnce: true });
 
// --------------------------------------------------------
//	Google Map
// -------------------------------------------------------- 	
map = new GMaps({
	el: '#map',
	scrollwheel: false, // Map Mousewheel scroll disable
	zoom: 12, // Map Zoom
	lat: 55.089235,// Map Latitudes
	lng: -117.569139 // Map Longitudes
});

map.addMarker({
	lat: 55.089235, // Map Marker Latitudes
	lng: -117.569139 // Map Marker Latitudes
});