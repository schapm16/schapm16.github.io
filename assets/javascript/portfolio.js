(function() {
  const sideNav = document.getElementById('sideNav');
  const storyContentRows = document.querySelectorAll('#storyContent .row');

  // Configure fullPage.js
  new fullpage('#fullpage', {
    licenseKey: null,
    anchors: ['front-page', 'story-page', 'work-page', 'contact-page'],
    controlArrows: false,
    fixedElements: '#sideNav',
    menu: '#sideNav>ul',
    scrollOverflow: true,

    afterLoad: function (origin, destination) {
      // Reveal and Hide Side Nav
      if (screen.width > 1021 && innerWidth > 1021) {
        if (destination.anchor === 'front-page') {
          sideNav.style.opacity = '';
          sideNav.style.right = '';
        } else {
          sideNav.style.opacity = 1;
          sideNav.style.right = '25px'
        }
      }

      // Animation for Story Page
      if (destination.anchor === 'story-page') {
        if (storyContentRows[0].style.opacity !== 1) {
          storyContentRows.forEach((each, i) => {
            each.style.transition = `opacity 0.5s linear ${0.2 + i * 0.2}s`;
            each.style.opacity = 1;
          })
        }
      }
    }
  });
})();