// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});

// gsap configuration

// gsap animations
const tl = gsap.timeline({ stagger: true });
tl.to(".img", {
  // opacity: 0,
  // duration: 2,
  // scale: 1.1,
  // rotate:10,
  // ease: "power2.out"
})
  .to(".img", {
    duration: 3,
    scale: 1.05,
    rotate: 10,
    ease: "power2.out",
  })
  .to(".img", {
    opacity: 0,
    onComplete: () => {
      window.location.href = "src/components/main.html"; // navigate to the next page after animation completes
    },
  });
