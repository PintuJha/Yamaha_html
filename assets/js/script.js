// =============Header Code Start===============
$(function ($) {
  $(".mobile_btn").on("click", function () {
    $(".main_menu").slideToggle();
    $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 768) {
    $(".main_menu  ul li a").on("click", function () {
      $(this)
        .parent(".has_dropdown")
        .children(".sub_menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".has_dropdown")
        .children("a")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});



// =============Product Slider Code======================
$(document).ready(function() {
  var owl = $("#recent_event");
  owl.owlCarousel({
  autoPlay: 3000,
  items : 2, //10 items above 1000px browser width
  itemsDesktop : [1000,4], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0;
  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  pagination:false
  });
  $(".next").click(function(){
      owl.trigger('owl.next');
  })
  $(".prev").click(function(){
      owl.trigger('owl.prev');
  })
});


$(document).ready(function() {
  var owl = $("#recent_event1");
  owl.owlCarousel({
  autoPlay: 3000,
  items : 2, //10 items above 1000px browser width
  itemsDesktop : [1000,4], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0;
  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  pagination:false
  });
  $(".next").click(function(){
      owl.trigger('owl.next');
  })
  $(".prev").click(function(){
      owl.trigger('owl.prev');
  })
});


$(document).ready(function() {
  var owl = $("#recent_event2");
  owl.owlCarousel({
  autoPlay: 3000,
  items : 2, //10 items above 1000px browser width
  itemsDesktop : [1000,4], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0;
  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  pagination:false
  });
  $(".next").click(function(){
      owl.trigger('owl.next');
  })
  $(".prev").click(function(){
      owl.trigger('owl.prev');
  })
});




$(document).ready(function() {
  var owl = $("#recent_event11");
  owl.owlCarousel({
  autoPlay: 4000,
  items : 2, //10 items above 1000px browser width
  itemsDesktop : [1000,4], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0;
  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  pagination:false
  });
  $(".next").click(function(){
      owl.trigger('owl.next');
  })
  $(".prev").click(function(){
      owl.trigger('owl.prev');
  })
});


$(document).ready(function() {
  var owl = $("#recent_event22");
  owl.owlCarousel({
  autoPlay: 4000,
  items : 2, //10 items above 1000px browser width
  itemsDesktop : [1000,4], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0;
  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  pagination:false
  });
  $(".next").click(function(){
      owl.trigger('owl.next');
  })
  $(".prev").click(function(){
      owl.trigger('owl.prev');
  })
});



// ==============Search code start==================
