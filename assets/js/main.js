var scrollHorizontal = scrollTo => {
  //$('.hide-section').removeClass('hide-section');
  var scrollelLenghth =
    scrollTo === "right"
      ? $(".active-section").next(".section").length
      : $(".active-section").prev(".section").length;
  if (scrollelLenghth > 0) {
    var moveToEl =
      scrollTo === "right"
        ? $(".active-section").next(".section")
        : $(".active-section").prev(".section");
    slideSection(scrollTo, moveToEl);
    //$(".active-section").addClass("hide-section");
  }
};

var onNavLinkClick = el => {
  if (
    !$(el)
      .parent()
      .hasClass("active")
  ) {
    // $('.active-section').find('.background-img').css('transform', 'scale(1.1)');
    // $('.active-section').attr("id") === 'homeSection' ?
    //   $('.active-section').find('.background-img').css('width', '70vw') :
    //   $('.active-section').find('.background-img').css('width', '90vw');
    var scrollTo =
      parseInt($(".nav-item.active").attr("aria-label")) -
        parseInt(
          $(el)
            .parent()
            .attr("aria-label")
        ) >
        0
        ? "left"
        : "right";
    var moveToEl = $($(el).attr("href"));
    // $('#' + moveToEl.attr("id")).find('.background-img').css('transform', 'scale(1)');
    // moveToEl.attr("id") === 'homeSection' ?
    //   $('#' + moveToEl.attr("id")).find('.background-img').css('width', '75vw') :
    //   $('#' + moveToEl.attr("id")).find('.background-img').css('width', '100vw');
    if (moveToEl.attr("id") === "serviceSection") {
      $(".insta-feed").css("animation", "2s ease 0s normal forwards 1 fadein");
    }
    $(".active-section").attr("id") === "serviceSection"
      ? $(document.body).css("overflow-y", "hidden")
      : "";
    transformInnerContent($(".active-section"), 1.5, scrollTo, 15);
    transformInnerContent(moveToEl, 2, scrollTo, 0);
    $(".nav-item.active").removeClass("active");
    $(el)
      .parent()
      .addClass("active");

    if (
      $(".active-section").attr("id") === "serviceSection" &&
      window.scrollY > 0
    ) {
      var offSetWidth = document.getElementsByClassName("section")[1]
        .offsetWidth;
      $(".services-center-fit").css("transition", "2s ease");
      $(".services-center-fit").css(
        "transform",
        "translate(" +
        (scrollTo === "left" ? offSetWidth : -offSetWidth) +
        "px,0)"
      );
      $(".active-section")
        .find(".home-title-div")
        .css(
          "transform",
          "translate(" +
          (scrollTo === "right" ? -offSetWidth + "px" : offSetWidth + "px") +
          ", 0)"
        );
      $(".insta-feed").css("animation", "2s ease 0s normal forwards 1 fadeout");
      setTimeout(() => {
        $(".services-center-fit").css("transition", "none");
        $(".services-center-fit").css("transform", "translate(0,0)");
        scrollToPos(moveToEl, 0);
        $($(".home-title-div")[1]).css("transform", "translate(0, 0)");
      }, 2000);
    } else scrollToPos(moveToEl, 3000);
    transformNavActiveScrollBar(el);
    $(".active-section").removeClass("active-section");
    moveToEl.addClass("active-section");
  }
  //slideSection(scrollTo, moveToEl);
};

var slideSection = (scrollTo, moveTo) => {
  // var offsetTop = document.getElementsByClassName("active-section")[0]
  //   .offsetTop;
  // var offSetWidth = document.getElementsByClassName("active-section")[0]
  //   .offsetWidth;
  // $(".active-section").css(
  //   "transform",
  //   "translate(" +
  //     (scrollTo === "right" ? -offSetWidth : offSetWidth) +
  //     "px," +
  //     -offsetTop +
  //     "px)"
  // );
  //$('.active-section').find('img').css('transform', 'scale(1.1)');
  var moveToSection = moveTo;
  //$('#' + moveToSection.attr("id")).find('img').css('transform', 'scale(1)');
  if (moveToSection.attr("id") === "serviceSection") {
    $(".insta-feed").css("animation", "2s ease 0s normal forwards 1 fadein");
  }
  transformInnerContent($(".active-section"), 1.5, scrollTo, 15);
  $(".active-section").attr("id") === "serviceSection"
    ? $(document.body).css("overflow-y", "hidden")
    : "";
  $(".active-section").css("transition", " 1s ease-out");

  if (
    $(".active-section").attr("id") === "serviceSection" &&
    window.scrollY > 0
  ) {
    var offSetWidth = document.getElementsByClassName("section")[1].offsetWidth;
    $(".services-center-fit").css("transition", "2s ease");
    $(".services-center-fit").css(
      "transform",
      "translate(" +
      (scrollTo === "left" ? offSetWidth : -offSetWidth) +
      "px,0)"
    );
    $(".active-section")
      .find(".home-title-div")
      .css(
        "transform",
        "translate(" +
        (scrollTo === "right" ? -offSetWidth + "px" : offSetWidth + "px") +
        ", 0)"
      );
    $(".insta-feed").css("animation", "2s ease 0s normal forwards 1 fadeout");
    setTimeout(() => {
      $(".services-center-fit").css("transition", "none");
      $(".services-center-fit").css("transform", "translate(0,0)");
      scrollToPos(moveToSection, 0);
      $($(".home-title-div")[1]).css("transform", "translate(0, 0)");
    }, 2000);
  } else scrollToPos(moveToSection, 3000);
  $(".active-section").removeClass("active-section");
  moveToSection.addClass("active-section");
  // offsetTop = document.getElementsByClassName("active-section")[0].offsetTop;
  // $(".active-section").css("transform", "translate(0," + -offsetTop + "px)");
  $(".active-section").css("transition", " 2s ease-in");
  transformInnerContent($(".active-section"), 2, scrollTo, 0);
  var els = $("a[href='#" + moveToSection.attr("id") + "']");
  $(".nav-item.active").removeClass("active");
  els.parent().addClass("active");
  transformNavActiveScrollBar(els[0]);
  //moveToSection.css("transform", "translate(0,-1081px)");
  //moveToSection.css("animation", "1s ease 0s normal forwards 1 fadein");

  //moveToSection.removeClass("hide-section");
};

var scrollToPos = (el, duration) => {

  //document.getElementsByClassName('home-center-fit')[0].style.transform="scale(1)"
  $("html, body").animate(
    {
      scrollLeft: el.offset().left,
      scrollTop: el.offset().top,
      transform: "scale(1.1)"
    },
    // {
    //   step: function(now, fx) {
    //     $($('.services-center-fit')[0]).css("-webkit-transform", "translate3D(" + now + "deg)");
    //   },
    {
      duration,
      specialEasing: {
        scrollLeft: "easeOutQuart",
        scrollTop: "linear"
      },
      complete: function () {
        if (el.attr("id") === "serviceSection") {
          var offSetHeight = document.getElementsByClassName("section")[1]
            .offsetHeight;

          // $(document.body).css("overflow-y", "scroll");
          // $(document.body).css("height", +offSetHeight - 10 + "px");
        }
      }
    }
  );
};
var transformInnerContent = (el, delay, scrollTo, scrollPos) => {
  el.find(".home-title-div").css("transition", "" + delay + "s ease-in-out");
  el.find(".main-contact-div").css("transition", "" + delay + "s ease-in-out");
  el.find(".home-title-div").css(
    "transform",
    "translate(" +
    (scrollTo === "right" ? -scrollPos + "vw" : scrollPos + "vw") +
    ", 0)"
  );
  el.find(".main-contact-div").css(
    "transform",
    "translate(" +
    (scrollTo === "right" ? -scrollPos + "vw" : scrollPos + "vw") +
    ", 0)"
  );
};

$(document).ready(() => {
  var activeNavItem = document
    .getElementsByClassName("nav-item")[0]
    .getElementsByTagName("a")[0];
  var activeNavListWidth = activeNavItem.offsetWidth;
  var activeNavListLeft = activeNavItem.offsetLeft;
  $(".nav-active-bar")
    .css("width", activeNavListWidth + 4)
    .css("left", activeNavListLeft);
  //$(".home-center-fit").css("height", window.innerHeight);
  //$(".services-center-fit").css("height", window.innerHeight);
});

var transformNavActiveScrollBar = activeNavItem => {
  var activeNavListWidth = activeNavItem.offsetWidth;
  var activeNavListLeft = activeNavItem.offsetLeft;
  $(".nav-active-bar")
    .css("width", activeNavListWidth)
    .css("left", activeNavListLeft);
};

$("#contactForm").on("submit", function (e) {
  e.preventDefault();
  var formData = $("#contactForm").serializeArray();
});
window.onload = function () {
  var firstElOffSetWidth = document.getElementsByClassName("section")[0]
    .offsetWidth;
  var section = document.getElementsByClassName("section");
  for (i = 1; i < section.length; i++) {
    var offsetTop = section[i].offsetTop;
    section[i].style.transform =
      "translate(" + firstElOffSetWidth * i + "px," + -offsetTop + "px)";
  }
  // var offsetTop = document.getElementsByClassName("section")[1].offsetTop;
  // document.getElementsByClassName("section")[1].style.transform =
  //   "translate(" + firstElOffSetWidth + "px," + -offsetTop + "px)";
  // offsetTop = document.getElementsByClassName("section")[2].offsetTop;
  // document.getElementsByClassName("section")[2].style.transform =
  //   "translate(" + firstElOffSetWidth * 2 + "px," + -offsetTop + "px)";

  scrollToPos($(".active-section"), 3000);

  var activeLi = document.getElementsByClassName("nav-item active")[0];
  $(".nav-active-bar").css(
    "top",
    activeLi.offsetTop + activeLi.offsetHeight + 10 + "px"
  );
  //$(".services-center-fit").css("height", document.getElementById('serviceSection').scrollHeight);
};

// document.addEventListener('gesturestart', function(e) {
//   e.preventDefault();
//   // special hack to prevent zoom-to-tabs gesture in safari
//   document.body.style.zoom = 0.99;
// });

// document.addEventListener('gesturechange', function(e) {
//   e.preventDefault();
//   // special hack to prevent zoom-to-tabs gesture in safari
//   document.body.style.zoom = 0.99;
// });

// document.addEventListener('gestureend', function(e) {
//   e.preventDefault();
//   // special hack to prevent zoom-to-tabs gesture in safari
//   document.body.style.zoom = 0.99;
// });
document.addEventListener('touchmove', function (e) {
  e.preventDefault();
  if (e.scale !== 1) { e.preventDefault(); }
},{passive: false});

document.addEventListener("touchstart", function(e){
  if(e.touches.length > 1){
    //the event is multi-touch
    //you can then prevent the behavior
    e.preventDefault()
}
  },{passive: false});

