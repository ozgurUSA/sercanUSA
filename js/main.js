$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: "Sep 22 2022",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
	    .append("<div>" + this.leadingZeros(data.days, 1) + " <span>gün</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 1) + " <span>saat</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 1) + " <span>dakika</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 1) + " <span>saniye</span></div>");
	}
});
