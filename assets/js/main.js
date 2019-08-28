(function($) {
  $(".hero-area-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    mouseDrag: false
  });

  $(".testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: true
  });

  // init Isotope
  var $grid = $(".portfolio-container").isotope({
    masonry: {
      gutter: 10
    }
  });
  // filter items on button click
  $(".portfolio-filter").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });

  //On click change menu color
  $(".navbar-nav").on("click", "li", function() {
    $(".navbar-nav li a").removeClass("active");
    $(this)
      .children("a")
      .addClass("active");
  });

  $(".scrl-down").on("click", function(e) {
    if (
      $(".navbar-toggler").is(":visible") &&
      $(this).attr("href") !== $(".scrl-down.active").attr("href")
    )
      $(".navbar-toggler-icon").click();
    isScrolling = $(this).attr("href") === "#aboutSection" ? false : true;
    e.preventDefault();
    let speed = 1000;
    if (
      $(this).attr("href") == "#portfolioSection" ||
      $(".scrl-down.active").attr("href") == "#portfolioSection"
    ) {
      speed = 3000;
    }
    $(".animation-content").map((i, x) => $(x).addClass("animation-inactive"));
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      {
        duration: speed,
        easing: "linear",
        complete: function() {
          $(".animation-content").map((i, x) =>
            $(x).removeClass("animation-inactive")
          );
          isScrolling = false;
        }
      }
    );
  });
  //On scroll menu fixed to top
  // var menu = $("nav");
  // $(window).scroll(function () {
  //more then or equals to
  // if ($(window).scrollTop() < 800) {
  // 	menu.removeClass('fixed-top animated slideInDown');

  // 	//less then 100px from top
  // } else {
  // 	menu.addClass('fixed-top animated slideInDown');

  // }
  //});

  //	$('.scrollbar-body').mCustomScrollbar({
  //		theme: "dark",
  //		mouseWheel: {
  //			scrollAmount: 150
  //		},
  //		setHeight: '100%',
  //	});
})(jQuery);
var toogleNavAnimation = () => {
  $("#navbarSupportedContent").hasClass("show")
    ? $("#navbarSupportedContent").css(
        "animation",
        "1s ease 0s normal forwards 1 fadeoutFast"
      )
    : $("#navbarSupportedContent").css(
        "animation",
        "5s ease 0s normal forwards 1 fadein"
      );
};
