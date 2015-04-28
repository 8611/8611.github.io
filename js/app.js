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

var ctx = document.getElementById("myChart").getContext("2d");
  
  var data = {
    labels: ["PHP", "HTML&CSS", "Javascript", "Ruby on Rails", "C# & .NET", "Java (Android SDK)", "C/C++"],
    datasets: [
        {
            label: "Languages and technologies",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 50, 30, 20, 55, 55, 30]
        },
        {
            label: "Frameworks and libraries",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [60, 60, 50, 30, 40, 40, 20]
        }
        
    ]
};

var myRadarChart = new Chart(ctx).Radar(data);