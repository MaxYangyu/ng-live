$(function() {
    var size = $(window).width() / 18;
    $("html").css("font-size", size);
})
function enterlive(live_id){
    location.href="http://m.doubo.tv/onlive/" + live_id;
}