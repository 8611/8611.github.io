$.backstretch(["img/bg.jpg"], {
  fade: 2000
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(
        /^\//,
        '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +
        ']');
      if (target.length) {

        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll / 20 + '%)'
  });
});