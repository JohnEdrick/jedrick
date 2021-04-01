const cbox = document.querySelectorAll("a");

 for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", function() {
        $('a').removeClass("active");
        $(this).addClass('active');
     });
 }

 const animationTrigger = document.querySelectorAll("#playAnim");
 $(window).scroll(function () {
    for (let i = 0; i < animationTrigger.length; i++) {
        if ($(animationTrigger[i]).isInViewport()) {
            $(animationTrigger[i]).addClass('playAnimation');
            
        } else {
            //  Remove class
            $(animationTrigger[i]).removeClass('playAnimation');
            
        }    
    }
    
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};




function wrapSpan(newElem){
    var elem = $(newElem);
var characters = elem.text().split("");
elem.empty();

$.each(characters, function (i, el) {
    elem.append("<span>" + el + "</span");
});
}
wrapSpan($('.softwareeng'))
wrapSpan($('.myname'))

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-links');

hamburger.addEventListener('click',() =>{
    navUL.classList.toggle("show-nav");
});

