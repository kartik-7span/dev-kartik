let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})
let flagPoles = CSSRulePlugin.getRule(".card:before");

tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
tl.to('.form', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=2")
tl.from('.card', { scaleY: 0, stagger: .2}, "-=2")
tl.from(flagPoles, {  stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
tl.to('.title, .desc', { stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
tl.to('footer', { opacity: 1}, "-=2")

/*Cursor JS*/

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursorDot");

const updateCursor = (e) => {
  gsap.to(".cursor", {
    duration: 1,
    x: e.pageX * 2 - 50 + "%",
    y: e.pageY * 2 - 50 + "%",
    ease: "power3.out",
  });
  cursorDot.style.top = e.pageY + "px";
  cursorDot.style.left = e.pageX + "px";
};

document.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursorBlock");
  cursor.classList.add("cursorNone");
  cursorDot.classList.remove("cursorBlock");
  cursorDot.classList.add("cursorNone");
});

document.addEventListener("mouseover", () => {
  cursor.classList.remove("cursorNone");
  cursor.classList.add("cursorBlock");
  cursorDot.classList.remove("cursorNone");
  cursorDot.classList.add("cursorBlock");
});

window.addEventListener("mousemove", updateCursor);