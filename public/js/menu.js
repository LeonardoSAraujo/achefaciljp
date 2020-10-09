$(function() {
$('#menuHeader').hide();
$(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 300) {
$('#menuHeader').fadeIn();;
} else {
$('#menuHeader').fadeOut();
}
 });
})
