const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("part1");
const section_2 = document.getElementById("part2");

gsap.registerPlugin(ScrollTrigger);

gsap.to('.boy', {
  x: section_1.offsetWidth /2,
  duration: 0.5,
  yoyo: true,
})

gsap
.timeline({
  scrollTrigger: {
    trigger: "#part2",
    start: "top 40%",
    end: "bottom bottom",
    scrub: true,
    yoyo: true
  }
})
.to('.boy', { x: `-=500`, y: `+=1200` }, 0)
.to('#part2 .left', {width: `80%`}, 0);

gsap
.timeline({
  scrollTrigger: {
    trigger: "#part3",
    start: "top 40%",
    end: "bottom bottom",
    scrub: true,
    yoyo: true
  }
})
.to('.boy', { x: '+=500', y: `+=1200` }, 0)
.to('#part3 .left', {width: `60%`}, 0);

// =================================================================================
// Girl Animation

gsap.to('.girl', {
  x: `-=${section_1.offsetWidth/2}`,
  duration: 0.5,
  yoyo: true,
  // y: section_1.offsetHeight/2,
})

gsap
.timeline({
  scrollTrigger: {
    trigger: "#part2",
    start: "top 40%",
    end: "bottom bottom",
    scrub: true,
    yoyo: true
  }
})
.to('.girl', { x: `+=500`, y: `+=1200` }, 0)

gsap
.timeline({
  scrollTrigger: {
    trigger: "#part3",
    start: "top 40%",
    end: "bottom bottom",
    scrub: true,
    yoyo: true
  }
})
.to('.girl', { x: `-=500`, y: `+=1200` }, 0)
