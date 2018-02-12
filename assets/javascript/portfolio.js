$(function() {
	
	// Configure fullPage.js
	$('#fullpage').fullpage({
		anchors: ['Front', 'About', 'Work', 'Contact'],
		fixedElements: '#sideNav',

		// Reveal and Hide Side Nav
		afterLoad: function (anchorlink){
			if (anchorlink === 'Front') {
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
