$(function() {
	
	// Configure fullPage.js
	$('#fullpage').fullpage({
		anchors: ['front-page', 'story-page', 'work-page', 'contact-page'],
		controlArrows: false,
		fixedElements: '#sideNav',
		menu: '#sideNav>ul',
		scrollOverflow: true,

		// Reveal and Hide Side Nav
		afterLoad: function (anchorlink){
			if (screen.width > 1021) {
				if (anchorlink === 'front-page') {
					$('#sideNav').animate({
						opacity: '0',
						right: '-80px'
					}, 'slow', function() {
						$('#sideNav').css('display','none');
					});
				} else {
					$('#sideNav').css('display', 'block');
					$('#sideNav').animate({
						opacity: '1',
						right: '25px'
					}, 'slow');
				}
			}

			// Animation for Story Page
			if (anchorlink === 'story-page') {
				var rows = $('#storyContent .row');
				if (rows.eq(0).css('opacity') !==1) {
					for (var i = 0; i < rows.length; i++) {
						rows.eq(i).delay(i*200).animate({
							opacity: '1'
						}, 'slow');
					}
				}
			}
		}
	});
});

