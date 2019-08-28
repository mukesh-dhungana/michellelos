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
    $(".active-section").attr("id") === "serviceSection"
      ? $(document.body).css("overflow-y", "hidden")
      : "";
    transformInnerContent($(".active-section"), 1, scrollTo);
    transformInnerContent(moveToEl, 1.5, scrollTo);
    $(".nav-item.active").removeClass("active");
    $(el)
      .parent()
      .addClass("active");
    $(".active-section").removeClass("active-section");
    moveToEl.addClass("active-section");
    scrollToPos(moveToEl);
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
  var moveToSection = moveTo;
  transformInnerContent($(".active-section"), 1, scrollTo);
  $(".active-section").attr("id") === "serviceSection"
    ? $(document.body).css("overflow-y", "hidden")
    : "";
  $(".active-section").removeClass("active-section");
  moveToSection.addClass("active-section");
  scrollToPos(moveToSection);
  // offsetTop = document.getElementsByClassName("active-section")[0].offsetTop;
  // $(".active-section").css("transform", "translate(0," + -offsetTop + "px)");
  //$(".active-section").css("transition", " 1s ease-out");
  transformInnerContent($(".active-section"), 1.5, scrollTo);
  var els = $("a[href='#" + moveToSection.attr("id") + "']");
  $(".nav-item.active").removeClass("active");
  els.parent().addClass("active");

  //moveToSection.css("transform", "translate(0,-1081px)");
  //moveToSection.css("animation", "1s ease 0s normal forwards 1 fadein");

  //moveToSection.removeClass("hide-section");
};

var scrollToPos = el => {
  $("html, body").animate(
    {
      scrollLeft: el.offset().left,
      scrollTop: el.offset().top
    },
    {
      duration: 1500,
      specialEasing: {
        width: "linear",
        height: "easeOutBounce"
      },
      complete: function() {
        if (el.attr("id") === "serviceSection") {
          var offSetHeight = document.getElementsByClassName("section")[1]
            .offsetHeight;
          $(document.body).css("overflow-y", "scroll");
          $(document.body).css("height", +offSetHeight-10 + "px");
        }
      }
    }
  );
};
var transformInnerContent = (el, delay, scrollTo) => {
  el.find(".home-title-div").css("transition", "" + delay + "s ease-in-out");
  el.find(".main-contact-div").css("transition", "" + delay + "s ease-in-out");
  el.find(".home-title-div").css(
    "transform",
    "translate(" + (scrollTo === "right" ? "-8vw" : "0") + ", 0)"
  );
  el.find(".main-contact-div").css(
    "transform",
    "translate(" + (scrollTo === "right" ? "-8vw" : "0") + ", 0)"
  );
};

$(document).ready(() => {
  var firstElOffSetWidth = document.getElementsByClassName("section")[0]
    .offsetWidth;
  var offsetTop = document.getElementsByClassName("section")[1].offsetTop;
  document.getElementsByClassName("section")[1].style.transform =
    "translate(" + firstElOffSetWidth + "px," + -offsetTop + "px)";
  offsetTop = document.getElementsByClassName("section")[2].offsetTop;
  document.getElementsByClassName("section")[2].style.transform =
    "translate(" + firstElOffSetWidth * 2 + "px," + -offsetTop + "px)";
  scrollToPos($(".active-section"));
});
