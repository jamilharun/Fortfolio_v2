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
gsap.to('.jamil',{duration:3,opacity:1});

const tl = gsap.timeline({stagger: true})
tl  .to('.img', {duration: 3,scale: 1.05,rotate: 10,ease: 'power2.out'})
    .to('.img', {opacity: 0})
    .to('.jamil', {opacity: 0, delay: 3, ease: 'power2.out' });

//  remember jamil
//  mag lalagay ka ng 2 or 3 pics
//  gagawin mong random ang pag reveal ng pics 


// automatic redirect
let count = 1;
setInterval(()=>{
    count++
    if(count > 9) location.replace('/app/home.html')
}, 1000)

