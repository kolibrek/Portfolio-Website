function testInView($el){
	var wTop = $(window).scrollTop();
	var wBot = wTop + $(window).height();
	var wMid = wBot - ($(window).height()/2);
	var eTop = $el.offset().top;
	var eBot = eTop + $el.height();
	return (((eTop <= wMid) && (eBot >= wMid)));
}
function setInView(){
	$("main .active").removeClass("active");
	$("main section").each(function(){
		var $zis = $(this);
		if(testInView($zis)){
			$zis.addClass("active");
		}
	});
}
$(document).scroll(function(){
	setInView();
});
$(document).resize(function(){
	setInView();
});
$(document).ready(function(){
	setInView();
});
