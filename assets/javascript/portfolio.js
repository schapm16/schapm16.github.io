$(function() {
	
	// Configure fullPage.js
	$('#fullpage').fullpage({
		anchors: ['front-page', 'story-page', 'work-page', 'contact-page'],
		controlArrows: false,
		fixedElements: '#sideNav',
		menu: '#sideNav>ul',
		slidesNavigation: true,


		// Reveal and Hide Side Nav
		afterLoad: function (anchorlink){
			if (anchorlink === 'front-page') {
				$('#sideNav').animate({
					opacity: '0',
					right: '-200px'
				}, 'slow', function() {
					$('#sideNav').css('display','none');
				});
			} else {
				$('#sideNav').css('display', 'block');
				$('#sideNav').animate({
					opacity: '1',
					right: '0px'
				}, 'slow');
			}
		}
	});
});

