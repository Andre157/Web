$(".sqr").mouseenter( function() {
	$(".dw").css("visibility" , "visible");

}
);
$(".tri").mouseenter( function() {
	$(".up").css("visibility" , "visible");
}
);
$(".sqr").mouseleave( function(){
	$(".up").animate({top: '+=360px'}, 2000);
	$(".up").animate({right:'+=1000px'}, 2000);
});
$(".sqr").mouseleave( function(){
	$(".dw").animate({right:'+=1000px'}, 2000);
	$(".dw").animate({top: '+=350px'}, 2000);
});
