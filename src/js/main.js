import gsap from "gsap";

gsap.set(".duration", {
  opacity: 0.0,
});

gsap.to(".duration", {
  scale: 1,
  opacity: 1,
  duration: 2,
  delay: 1,
});
