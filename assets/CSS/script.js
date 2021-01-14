// hide left & right arrow button on carousel when viewport width less than 600px
if($(window).width() < 600){
    $('.left-button').hide()
    $('.right-button').hide()
}
else {
    $('.left-button').show()
    $('.right-button').show()
}
// add event listener to buttons to animate content left or right
$('.left-button').click(function(){
    let leftPos = $('.wrapper').scrollLeft();
    $('.wrapper').animate({scrollLeft: leftPos - 450},400);
})
$('.right-button').click(function(){
    let leftPos = $('.wrapper').scrollLeft();
    $('.wrapper').animate({scrollLeft: leftPos + 450},400);
})