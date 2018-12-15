(function() {
  const sideNav = document.getElementById('sideNav');
  const storyContentRows = document.querySelectorAll('#storyContent .row');

  // Reveal and Hide Side Nav
  function toggleSideNav() {
    const currentAnchor = fullpage_api.getActiveSection().anchor;
    if (screen.width > 1021 && innerWidth > 1021 && currentAnchor !== 'front-page') {
      sideNav.style.opacity = 1;
      sideNav.style.right = '25px' 
    } else {
      sideNav.style.opacity = '';
      sideNav.style.right = '';
    }
  }

  function animateStoryPage() {
    if (storyContentRows[0].style.opacity !== 1) {
      storyContentRows.forEach((each, i) => {
        each.style.transition = `opacity 0.5s linear ${0.2 + i * 0.2}s`;
        each.style.opacity = 1;
      })
    }
  }

  // Configure fullPage.js
  new fullpage('#fullpage', {
    licenseKey: null,
    anchors: ['front-page', 'story-page', 'work-page', 'contact-page'],
    controlArrows: false,
    fixedElements: '#sideNav',
    menu: '#sideNav>ul',
    scrollOverflow: true,

    afterResize: function() {
      console.log('resize');
      toggleSideNav();
    },

    afterLoad: function (origin, destination) {
      toggleSideNav();

      // Animation for Story Page
      if (destination.anchor === 'story-page') {
        animateStoryPage();
      }
    }
  });
})();