$(function() {
	$('.west ul li a').click(function() {
        $(".west ul li a").removeClass("selected");
        $(this).addClass("selected");
    });
//	$('.west ul li a').click(function() {
//        $(".west ul li a").removeClass("selected");
//        $(this).addClass("selected");
//    });
});