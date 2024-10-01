import gsap from "gsap";

const btn = document.querySelector("#bouton");
btn.addEventListener("click", function () {
  gsap.set(".circle", {
    scale: 0.75,
  });

  gsap.to(".circle", {
    scale: 1,
    duration: 3,
    repeat: -1,
    yoyo: -1,
    delay: 1,
  });
});
