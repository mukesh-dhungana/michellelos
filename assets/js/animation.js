var isScrolling = false;
window.onscroll = () => myFunction();
function myFunction() {
  const animationSectionLen = document.getElementsByClassName(
    "animation-sections"
  ).length;
  const windowHeight = window.innerHeight;
  for (a = 0; a < animationSectionLen; a++) {
    if (
      document
        .getElementsByClassName("animation-sections")
        [a].getBoundingClientRect().top +
        document.getElementsByClassName("animation-sections")[a].offsetHeight /
          2 -
        windowHeight >
        -1000 &&
      document
        .getElementsByClassName("animation-sections")
        [a].getBoundingClientRect().top +
        document.getElementsByClassName("animation-sections")[a].offsetHeight /
          2 -
        windowHeight <
        150
    ) {
      document.getElementsByClassName("video-play")[a].play();
    } else {
      document.getElementsByClassName("video-play")[a].pause();
    }
    if (
      document
        .getElementsByClassName("animation-sections")
        [a].getBoundingClientRect().top < 2
    ) {
      //document.getElementById("videoDiv").style.width = "90%";
      document.getElementsByClassName("animation-sidebar-right")[
        a
      ].style.transform = "scale(0, 1)";
      document.getElementsByClassName("animation-sidebar-left")[
        a
      ].style.transform = "scale(0, 1)";
      document.getElementsByClassName("animation-sidebar-top")[
        a
      ].style.transform = "scale(1, 0.57)";
      document.getElementsByClassName("animation-sidebar-bottom")[
        a
      ].style.transform = "scale(1, 0)";
      for (i = a * 3; i < a * 3 + 3; i++) {
        if (window.innerWidth < 770) {
          document.getElementsByClassName("animation-element")[
            i
          ].style.transform = "translate(45px, -50px)";
        } else {
          document.getElementsByClassName("animation-element")[
            i
          ].style.transform = "translate(110px, -50px)";
        }
        document.getElementsByClassName("animation-element")[
          i
        ].style.animation = "5s ease 0s normal forwards 1 fadein";
      }

      //document.getElementsByClassName("video-play")[a].play();
    }
    if (
      document
        .getElementsByClassName("animation-sections")
        [a].getBoundingClientRect().top < 200 &&
      document
        .getElementsByClassName("animation-sections")
        [a].getBoundingClientRect().top > 2
    ) {
      //document.getElementById("videoDiv").style.width = "90%";
      document.getElementsByClassName("animation-sidebar-right")[
        a
      ].style.transform = "scale(0.596591, 1)";
      document.getElementsByClassName("animation-sidebar-left")[
        a
      ].style.transform = "scale(0.596591, 1)";
      document.getElementsByClassName("animation-sidebar-top")[
        a
      ].style.transform = "scale(1, 0.826534)";
      document.getElementsByClassName("animation-sidebar-bottom")[
        a
      ].style.transform = "scale(1, 0.596591)";
      for (i = a * 3; i < a * 3 + 3; i++) {
        if (window.innerWidth < 770) {
          document.getElementsByClassName("animation-element")[
            i
          ].style.transform = "translate(45px, -50px)";
        } else {
          document.getElementsByClassName("animation-element")[
            i
          ].style.transform = "translate(110px, -50px)";
        }
        document.getElementsByClassName("animation-element")[
          i
        ].style.animation = "5s ease 0s normal forwards 1 fadein";
      }

      //document.getElementsByClassName("video-play")[a].play();
    }

    if (
      document
        .getElementsByClassName("animation-sections")
        [a].getBoundingClientRect().top > 200
    ) {
      document.getElementsByClassName("animation-sidebar-right")[
        a
      ].style.transform = "scale(1, 1)";
      document.getElementsByClassName("animation-sidebar-left")[
        a
      ].style.transform = "scale(1, 1)";
      document.getElementsByClassName("animation-sidebar-top")[
        a
      ].style.transform = "scale(1, 1)";
      document.getElementsByClassName("animation-sidebar-bottom")[
        a
      ].style.transform = "scale(1, 1)";
      for (i = a * 3; i < a * 3 + 3; i++) {
        if (window.innerWidth < 770) {
          document.getElementsByClassName("animation-element")[
            i
          ].style.transform = "translate(45px, 100px)";
        } else {
          document.getElementsByClassName("animation-element")[
            i
          ].style.transform = "translate(110px, 120px)";
        }
        document.getElementsByClassName("animation-element")[
          i
        ].style.animation = "0.5s ease 0s normal forwards 1 fadeout";
      }
      //document.getElementsByClassName("video-play")[a].pause();
    }
  }

  //transitional-section-animation
  transfromTransitionalSection();
  //....//

  //home-section-scroll-animation
  transfromHomeSection();
  //..........//
}

var isScrolledIntoView = elem => {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = elem.offsetTop;
  var elemBottom = elemTop + elem.offsetHeight;

  return elemBottom <= docViewBottom + 200 && elemTop >= docViewTop;
};

//region-transitional-section-scroll-animation
var transfromTransitionalSection = () => {
  var transitionalSectionLen = document.getElementsByClassName(
    "transitional-section"
  ).length;
  for (item = 0; item < transitionalSectionLen; item++) {
    var transitionalSection = document.getElementsByClassName(
      "transitional-section"
    )[item];
    if (
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().top <
      20
    ) {
      transformTransitionalEl(120, transitionalSection.parentElement);
    }
    if (
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().top >
        20 &&
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().top <=
        100
    ) {
      transformTransitionalEl(45, transitionalSection.parentElement);
    }
    if (
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().top >=
        200 &&
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().top <
        window.innerHeight
    ) {
      transformTransitionalEl(0, transitionalSection.parentElement);
    }
    let transitionLowerHeight = 500,
      transitionUpperHeight = 600;
    let windowHeight = window.innerHeight;
    switch (true) {
      case windowHeight < 700:
        transitionLowerHeight = 300;
        transitionUpperHeight = 500;
        break;
      case windowHeight > 700 && windowHeight < 900:
        transitionLowerHeight = 600;
        transitionUpperHeight = 700;
        break;
      case windowHeight > 900 && windowHeight < 1100:
        transitionLowerHeight = 700;
        transitionUpperHeight = 900;
        break;
      case windowHeight > 1100 && windowHeight < 1300:
        transitionLowerHeight = 1050;
        transitionUpperHeight = 1100;
      default:
    }
    if (
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().bottom >=
        transitionLowerHeight &&
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().bottom <=
        transitionUpperHeight
    ) {
      transformTransitionalEl(-60, transitionalSection.parentElement);
    }
    if (
      window.innerHeight -
        document
          .getElementsByClassName("transitional-section")
          [item].getBoundingClientRect().bottom >=
      transitionUpperHeight
    ) {
      transformTransitionalEl(-80, transitionalSection.parentElement);
    }
    // if (isScrolledIntoView(transitionalSection)) {
    //   transformTransitionalEl(true, transitionalSection.parentElement);
    // } else {
    //   transformTransitionalEl(false, transitionalSection.parentElement);
    // }
  }
};

var transformTransitionalEl = (transtionSize, transitionalSection) => {
  var transitionalDiv = transitionalSection.getElementsByClassName(
    "transitional-content-div"
  );
  for (tLen = 0; tLen < transitionalDiv.length; tLen++) {
    var transitionalContentLen = transitionalDiv[tLen].getElementsByClassName(
      "transitional-content"
    ).length;
    for (i = 0; i < transitionalContentLen; i++) {
      transitionalDiv[tLen].getElementsByClassName("transitional-content")[
        i
      ].style.transform = "translate(0," + transtionSize + "px)";
      transitionalDiv[tLen].getElementsByClassName("transitional-content")[
        i
      ].style.animation = "5s ease 0s normal forwards 1 fadein";
    }
  }
};

//....//

//region-home-section-scroll-animation
var transfromHomeSection = () => {
  if (
    document.getElementById("homeSection").getBoundingClientRect().bottom <
      500 &&
    document.getElementById("homeSection").getBoundingClientRect().bottom > 200
  ) {
    var homeAnimationLen = document.getElementsByClassName("home-animation")
      .length;
    for (i = 0; i < homeAnimationLen; i++) {
      let translate = "0";
      const windowWidth = window.innerWidth;
      switch (true) {
        case windowWidth > 767 && windowWidth <= 992:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(45px, -270px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(47px, -90px)";
          }

          break;
        case windowWidth <= 568:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(45px, -140px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(47px, -70px)";
          }
          break;
        default:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(145px,-500px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = " translate(150px, -300px)";
          }
          let fade = "fadeout";
          fade = isScrolling ? "fadeoutFast" : "fadeout";
          document.getElementsByClassName("home-animation")[i].style.animation =
            "2s ease 0s normal forwards 1 " + fade;
      }
    }
  } else {
    var homeAnimationLen = document.getElementsByClassName("home-animation")
      .length;
    for (i = 0; i < homeAnimationLen; i++) {
      let translate = "0";
      const windowWidth = window.innerWidth;
      switch (true) {
        case windowWidth > 767 && windowWidth <= 992:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(45px, -370px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(47px, -190px)";
          }
          break;
        case windowWidth <= 568:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(45px, -180px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(47px, -100px)";
          }
          break;
        default:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(145px,-400px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = " translate(150px, -205px)";
          }
      }

      document.getElementsByClassName("home-animation")[i].style.animation =
        "5s ease 0s normal forwards 1 fadein";
    }
  }
};
//....//

$(document).ready(() => {
  //region-video-smooth-transition
  const videoCount = document.getElementsByClassName("video-play").length;
  for (i = 0; i < videoCount; i++) {
    const video = document.getElementsByClassName("video-play")[i];
    video.addEventListener("ended", () => {
      video.currentTime = 0.05;
      video.play();
    });
  }
  const videoHome = document.getElementById("video-home");
  videoHome.addEventListener("ended", () => {
    videoHome.currentTime = 0.05;
    videoHome.play();
  });
  //....//

  //home-section-onload-animation
  setTimeout(() => {
    var homeAnimationLen = document.getElementsByClassName("home-animation")
      .length;
    for (i = 0; i < homeAnimationLen; i++) {
      let translate = "0";
      const windowWidth = window.innerWidth;
      switch (true) {
        case windowWidth > 767 && windowWidth <= 992:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(45px, -270px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(47px, -90px)";
          }
          break;
        case windowWidth <= 568:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(45px, -140px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(47px, -70px)";
          }
          break;
        default:
          if (i == 0 || i == 1) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = "translate(145px,-400px)";
          }

          if (i == 2) {
            document.getElementsByClassName("home-animation")[
              i
            ].style.transform = " translate(150px, -205px)";
          }
      }

      document.getElementsByClassName("home-animation")[i].style.animation =
        "5s ease 0s normal forwards 1 fadein";
    }
  }, 700);
  //......//

  transfromTransitionalSection();
});
