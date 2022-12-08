gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

const tl = gsap.timeline();
tl.from(".orange", {xPercent: -100})
  .from(".purple", {xPercent: 100})
  .from(".green", {yPercent: -100});


ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=4000", 
  scrub: true,
  pin: true,
  anticipatePin: 1
});
