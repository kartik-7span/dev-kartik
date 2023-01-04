



// Portfolio Js

$(function () {

    'use strict';


    //Scroll Trigger
    gsap.registerPlugin(ScrollTrigger);

    function scrollTrig() {

        let gsapBl = $('.gsap__bl').width();
        let gsapTrack = $('.gsap__track').width();
        let scrollSliderTransform = gsapTrack - gsapBl;

        let winHeight = $(window).height();
        let slHeight = $('.gsap_slider').outerHeight(true);
        let startScrollTrig = (winHeight - slHeight) / 2;

        // Skew
        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".gsap__item", "skewX", "deg"),
            clamp = gsap.utils.clamp(-1000, 1000);

        gsap.to(".gsap__track", {
            scrollTrigger: {
                trigger: ".gsap_slider",
                start: () => "-=" + startScrollTrig,
                end: "+=1500px",
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / 800);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0,
                            duration: 0.8,
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            },
            x: "-" + scrollSliderTransform + "px",
        });
        gsap.set(".gsap__item", { transformOrigin: "center center", force3D: true });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);
    }
    scrollTrig();
});


console.clear();

const { gsap } = window;

gsap.timeline()
	.set(".menu", { autoAlpha: 1 })
	.from(".menu__item-innertext", {
		delay: 1,
		duration: 0.85,
		yPercent: 125,
		stagger: 0.095,
		skewY: gsap.utils.wrap([-8, 8]),
		ease: "expo.out",
	})
	.set(".menu", { pointerEvents: "all" });

gsap.defaults({
	duration: 0.55,
	ease: "expo.out",
});

const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach((item) => {
	const imageWrapper = item.querySelector(".menu__item-image_wrapper");
	const imageWrapperBounds = imageWrapper.getBoundingClientRect();
	let itemBounds = item.getBoundingClientRect();

	const onMouseEnter = () => {
		gsap.set(imageWrapper, { scale: 0.8, yPercent: 50, rotation: -15 });
		gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
	};
	const onMouseLeave = () => {
		gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: -15 });
	};
	const onMouseMove = ({ x, y }) => {
		let yOffset = itemBounds.top / imageWrapperBounds.height;
		yOffset = gsap.utils.mapRange(0, 1.5, -70, 70, yOffset);
		gsap.to(imageWrapper, {
			duration: 1.25,
			x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
			y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
		});
	};

	item.addEventListener("mouseenter", onMouseEnter);
	item.addEventListener("mouseleave", onMouseLeave);
	item.addEventListener("mousemove", onMouseMove);

	window.addEventListener("resize", () => {
		itemBounds = item.getBoundingClientRect();
	});
});


const tl = gsap.timeline();

tl.from(".reveal-anime", 1, {
  y: 100,
  ease: "power4.out",
  delay: 1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
})

var content = document.getElementsByClassName('.reveal-anime1');
TweenMax.fromTo(content, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0});


gsap.to(".bubble--container", 20, {
  rotation: 360,
  transformOrigin: "left 50%",
  repeat: -1,
  ease: "none"
});

var quotes = [
  '"Thank you so much for all of your help with everything!',
  '"Hands down the best support I have ever received."',
  '"The best service I have ever received!"',
  '"We could not have done it without you!"',
  '"Beyond grateful for the service I received!"',
  '"A wonderful experience all around!"'
];

var previousInt = 0;

function animateOut() {
  gsap.fromTo(".text", 2, { opacity: 1 }, { opacity: 0 });
}

function animateIn() {
  gsap.fromTo(".text", 2, { opacity: 0 }, { opacity: 1 });
}

// returns a random integer for the quote randomizer
function getRandomInt() {
  return Math.floor(Math.random() * quotes.length);
}

function handleAnimation() {
  var randomInt = getRandomInt();

  // prevents the new quote from being the same as the previous quote
  while (randomInt == previousInt) {
    randomInt = getRandomInt();
  }

  previousInt = randomInt;

  // fades the animation out after a second
  setTimeout(() => {
    animateOut();
  }, 1000);

  // changes the text of the quote after 2.8 seconds
  setTimeout(() => {
    document.querySelector(".text").innerHTML = quotes[randomInt];
  }, 2800);

  // fades the quote back in after 3 seconds
  setTimeout(() => {
    animateIn();
  }, 3000);
}

// changes the quote every 7 seconds
setInterval(handleAnimation, 4000);
