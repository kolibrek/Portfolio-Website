function testInView($el){
    var wTop = $(window).scrollTop();
    var wBot = wTop + $(window).height();
    var wMid = wBot - ($(window).height()/2);
    var eTop = $el.offset().top;
    var eBot = eTop + $el.height();
    return (((eTop <= wMid) && (eBot >= wMid)));
}
function setInView(){
    $(".active").removeClass("active");
    $("div.page").each(function(){
        var $zis = $(this);
        if(testInView($zis)){
           $zis.addClass("active");
            $("a[href='#"+$zis.attr("id")+"']").addClass("active");
        }
    });
    var intro = $("#intro");
    if (intro.length == 0 || !testInView(intro)){
      $("nav").addClass("past-intro");
    } else {
      $("nav").removeClass("past-intro");
    }
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
