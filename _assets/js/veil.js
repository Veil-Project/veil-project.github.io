up.compiler('[data-date]', function($element) {
  var date = Date.parse($element.data('date'));
  var today = new Date();
  if (date < today) $element.addClass('is-past');
});

up.compiler('[data-carousel]', function($element, options) {
  $element.flickity(options);
})

$(window).on('scroll', function() {
  var scrolled = window.scrollY > 0;
  $('.VeilNav').toggleClass('is-scrolled', scrolled);
  $('.ScrollArrow').toggleClass('is-scrolled', scrolled);
})

up.on('click', 'a[href^="#"]', function(event, $link) {
  event.preventDefault()
  var scrollNode = document.scrollingElement || document.documentElement;
  up.scroll(scrollNode, $($link.attr('href')).offset().top - 90, {
    easing: 'swing',
    duration: 250
  });
})

$(window.location.hash).prop('checked', true)