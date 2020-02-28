
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 700) {
        //clearHeader, not clearheader - caps H
        $(".navbar").css("background","rgba(255,255,255,.7)");
        $("nav ul li, nav ul li a").css("color","#5352ed");
    }
    else if (scroll <= 0){
      $(".navbar").css("background","none");
    }
    else {
      $(".navbar").css("background","rgba(0,0,0,.7)");
      $("nav ul li, nav ul li a").css("color","#fff");
    }
}); //missing );


jQuery(document).ready(function($){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $(".navbar nav").toggleClass('opened');
	});
});
