//Hamburger Menu Toggle start
$(".navbar-nav li a").click(function(event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});
//Hamburger Menu Toggle end
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Handle faq container clicks!
$('.answer.is-visible').toggleClass("is-visible");
$('.faq-container').click(function(e) {
    e.preventDefault();
    if ($(this).find('.answer').hasClass("is-visible") === false)
        $('.faq-container > .answer').removeClass("is-visible");
    $(this).find('.answer').toggleClass("is-visible");
});