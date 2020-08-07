// Activate carousel
$("#myCarousel").carousel();
// Enable carousel indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});
// Enable carousel controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});