// custom scripts
// pre loader
  $(window).load(function(){
    $('#preloader').fadeOut('20000',function(){
      $(this).remove();
    });
  });
  // ocument items
$(document).ready(function(){
	// finding window height
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	// assigning window height banner wrapper
	$(".points-wrapper, .first-view").height(windowHeight - 50);
	$(".points-wrapper .image-moves img").height(windowHeight - 50);
	// keep item in center
	var outerContent = $('.points-wrapper').width();
  var innerContent = $('.points-wrapper .image-moves img').width();
  var middlePoint = (innerContent - outerContent)/2;
    // assign scrollleft
    $(".points-wrapper .image-moves").width(innerContent);
 	$(".points-wrapper" ).scrollLeft(middlePoint);
  // left travel
  $(".side-swipe-bts.left-bt").click(function () {
    $(".points-wrapper" ).animate({
      scrollLeft: 0
    },1000);
  });
  // right travel
  $(".side-swipe-bts.right-bt").click(function () {
    var extremeRight = $(".points-wrapper .image-moves img").width();
    $(".points-wrapper" ).animate({
      scrollLeft: extremeRight
    },1000);
  });
 	// fading first view
 	$(".first-view-bt").click(function () {
 		$(".first-view").fadeOut(500);
 	});
  $(".extra-main-logo img").click(function(){
    $(".first-view").fadeIn(500);
  });
 	// scroll animtion
 	$(function() {
      var linkSelects = $('.open-scroll-bt a[href*="#"]:not([href="#"]),.points-wrapper a.click-plus-bt[href*="#"]:not([href="#"]),.go-to-next-article a[href*="#"]:not([href="#"])');
      linkSelects.click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 0
            }, 1000);
            return false;
          }
        }
      });
      // back home click
      var homeBack = $('.back-to-top-fixed a[href*="#"]:not([href="#"])');
      homeBack.click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top -55
            }, 1000);
            return false;
          }
        }
      });
    });
 	// unlocking scroll
 	$(".points-wrapper .click-plus-bt, .open-scroll-bt a").click(function(){
 		$(".all-result-container").show();
 	});
  // adding next article button on scroll
  // var scrolltp = $("html, boy").scrollTop() = 0;
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $(".go-to-next-article").addClass("bottom-0");
    }else{
      $(".go-to-next-article").removeClass("bottom-0");
    }
  });
});
// determining scroll direction
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $(".dummy-nav").addClass("downwards");
       $(".back-to-top-fixed").removeClass("downwards");
       // console.log("downward");
   } else {
      // upscroll code
      $(".dummy-nav").removeClass("downwards");
      $(".back-to-top-fixed").addClass("downwards");
      // console.log("upward");
   }
   lastScrollTop = st;

   $('.result-each-warp').each(function() {
        if($(window).scrollTop() == $(this).offset().top) {
            var id = $(this).attr('id');
            var _data = $(this).attr('data-id');
            $(".go-to-next-article .active-art").attr("href","#gotchaagain"+_data);

          // hide on bottom
          $(".go-to-next-article .active-art").click(function(){
            if ($(this).attr("href") == "#gotchaagain11") {
              // alert("1")
              $(this).parent().removeClass("bottom-0");
            }
          });
        }
        
  });
});