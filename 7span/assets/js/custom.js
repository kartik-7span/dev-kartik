// Loader Js
    tl = gsap.timeline({
        defaults: {
            duration: 2.0,
            ease: "expo.inOut"
        }
    });
  tl.to(".slide-1", { width: 0, duration: 2.0 }).to("#loader", { height: 0 ,duration: 3.0});

// Btn Hover effect

$(function() {  
  $('.btn')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('.btn__bg--animation').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('.btn__bg--animation').css({top:relY, left:relX})
    });
});


// SVG file to SVG code convert JS Start
function img2svg() {
    jQuery('.in-svg').each(function(i, e) {
        var $img = jQuery(e);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
}
img2svg();
// SVG file to SVG code convert JS End

// image reval animation js
gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".section__projectsimg");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    delay: -1.5,
    ease: Power2.out
  });
});