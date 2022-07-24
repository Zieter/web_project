/*---------------網頁載入自動播放--------------*/

$(window).ready(function() {   //ready要比onload先執行,所以用ready
    $(".LOGO").hide();  
    $(".menu").hide();
    $(".LOGO").slideDown("slow");
    $(".menu").slideDown("slow"); 


}) 



/*--------滾動時上方主選單隱藏-----------*/ 

$(window).scroll(function() {
    var juanTop = $(window).scrollTop();
    if(juanTop>=1){
        $(".LOGO").slideUp("normal"),
        $(".menu").slideUp("normal");
        
    } else {
        $(".LOGO").slideDown("fast"),
        $(".menu").slideDown("fast");
        
    }
})




/*--------返回頂端按鈕---------*/ 


$(document).ready(function() {
var offset = 250;
var duration = 500;
$(window).scroll(function() {
if ($(this).scrollTop() > offset) {
    $(".backtop").fadeIn(duration);
} else {
    $(".backtop").fadeOut(duration);
}
});
$(".backtop").click(function(event) {
event.preventDefault();
$("html, body").animate({scrollTop: 0}, duration);
})
});







