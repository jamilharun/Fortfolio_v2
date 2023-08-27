// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener('resize', () =>{console.log(window.innerWidth);});


// -------------------------------------------------------------------------------------------------
// configuration
const swup = new Swup()
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

// gsap animations
const tl = gsap.timeline({stagger: true})
tl  .to('.img', {duration: 3,scale: 1.05,rotate: 10,ease: 'power2.out'})
    .to('.img', {opacity: 0});

// automatic redirect
let count = 1;
setInterval(()=>{
    count++
    if(count > 6) location.replace('/src/components/home.html')
}, 1000)

