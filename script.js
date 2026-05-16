/* 
   BACK TO TOP BUTTON ----------------------------------------------------
 */
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
        $("#backToTop").fadeIn();
    } else {
        $("#backToTop").fadeOut();
    }
});

$("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
});


/* 
   SLICK CAROUSEL (jQuery Plugin #1) ----------------------------------------------------
 */
$(document).ready(function () {
    $(".strip-container").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,     
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,         
        speed: 4000,             
        cssEase: "linear",       
        arrows: false,
        dots: false
    });
});


/* 
   MAGNIFIC POPUP (jQuery Plugin #2) ----------------------------------------------------
 */
$(".strip-container").magnificPopup({
    delegate: "img",
    type: "image",
    gallery: { enabled: true },
    callbacks: {
        elementParse: function (item) {
            item.src = item.el.attr("src");
        }
    }
});



/* 
   jQuery UI ACCORDION (Widget) ----------------------------------------------------
 */
$(".timeline-vertical").accordion({
    header: ".timeline-btn",
    collapsible: true,
    active: false,
    heightStyle: "content"
});


/* 
   FUN FACT RANDOMIZER (Extra Interaction) ----------------------------------------------------
 */
$(".fun-btn").on("click", function () {
    const facts = $(".fun-fact-list li");
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts.eq(randomIndex).text();

    $("#funFactDisplay").text(randomFact);
});

/* 
   AJAX REQUEST ----------------------------------------------------
*/
$("#loadAchievements").on("click", function () {
    $.ajax({
        url: "data/sportsAchievements.json",
        dataType: "json",
        success: function (data) {
            $("#achievementList").empty();

            data.achievements.forEach(function (item) {
                $("#achievementList").append(`<li>${item}</li>`);
            });

            $("#achievementList").slideDown();
        },
        error: function () {
            $("#achievementList").html("<li>Error loading achievements.</li>");
            $("#achievementList").slideDown();
        }
    });
});
