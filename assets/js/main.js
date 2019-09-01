var scrollHorizontal = scrollTo => {
    //$('.hide-section').removeClass('hide-section');
    var scrollelLenghth =
        scrollTo === "right" ?
        $(".active-section").next(".section").length :
        $(".active-section").prev(".section").length;
    if (scrollelLenghth > 0) {
        var moveToEl =
            scrollTo === "right" ?
            $(".active-section").next(".section") :
            $(".active-section").prev(".section");
        slideSection(scrollTo, moveToEl);
        //$(".active-section").addClass("hide-section");
    }
};

var onNavLinkClick = el => {
    if (!$(el)
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
            0 ?
            "left" :
            "right";
        var moveToEl = $($(el).attr("href"));
        if (moveToEl.attr("id") === "serviceSection") {
            $(".insta-feed").css("animation", "2s ease 0s normal forwards 1 fadein");
        }
        $(".active-section").attr("id") === "serviceSection" ?
            $(document.body).css("overflow-y", "hidden") :
            "";
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
        } else scrollToPos(moveToEl, 1500);
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

    var moveToSection = moveTo;
    if (moveToSection.attr("id") === "serviceSection") {
        $(".insta-feed").css("animation", "2s ease 0s normal forwards 1 fadein");
    }
    transformInnerContent($(".active-section"), 1.5, scrollTo, 15);
    $(".active-section").attr("id") === "serviceSection" ?
        $(document.body).css("overflow-y", "hidden") :
        "";
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
    } else scrollToPos(moveToSection, 1500);
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
    $("html, body").animate({
        scrollLeft: el.offset().left,
        scrollTop: el.offset().top
    }, {
        duration,
        specialEasing: {
            scrollLeft: "easeInQuart"
        },
        complete: function() {
            if (el.attr("id") === "serviceSection") {
                var offSetHeight = document.getElementsByClassName("section")[1]
                    .offsetHeight;
                // $(document.body).css("overflow-y", "scroll");
                // $(document.body).css("height", +offSetHeight - 10 + "px");
            }
        }
    });
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
    $(".home-center-fit").css("height", window.innerHeight);
    $(".services-center-fit").css("height", window.innerHeight);
});

var transformNavActiveScrollBar = activeNavItem => {
    var activeNavListWidth = activeNavItem.offsetWidth;
    var activeNavListLeft = activeNavItem.offsetLeft;
    $(".nav-active-bar")
        .css("width", activeNavListWidth)
        .css("left", activeNavListLeft);
};

$("#contactForm").on("submit", function(e) {
    e.preventDefault();
    var formData = $("#contactForm").serializeArray();

});
window.onload = function() {
    var firstElOffSetWidth = document.getElementsByClassName("section")[0]
        .offsetWidth;
    var offsetTop = document.getElementsByClassName("section")[1].offsetTop;
    document.getElementsByClassName("section")[1].style.transform =
        "translate(" + firstElOffSetWidth + "px," + -offsetTop + "px)";
    offsetTop = document.getElementsByClassName("section")[2].offsetTop;
    document.getElementsByClassName("section")[2].style.transform =
        "translate(" + firstElOffSetWidth * 2 + "px," + -offsetTop + "px)";
    scrollToPos($(".active-section"), 1500);
};