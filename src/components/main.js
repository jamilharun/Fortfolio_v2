gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip) 

// variables
const isDesktop1400 = window.matchMedia('( max-width: 1400px)'); // 768px is the breakpoint for desktop
const isDesktop = window.matchMedia('( min-width: 768px)'); // 768px is the breakpoint for desktop

// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener('resize', () =>{
    console.log(window.innerWidth);
    
});

let screenXShift = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1400) {
        console.log('my loptop screen');
        return '-25rem'; // Adjust for 768px to 1400px screens
    } else if (window.innerWidth < 768) {
        console.log('phone screen');
        return '-50rem'; // Adjust for smaller screens (below 768px)
    } else {
        console.log('larger screen');
        return '-50rem'; // Default for large screens (1400px and above)
    }
};

// arhitExpance configuration part1

const section = document.querySelector('.introAnimation'),
    sectionContainer = document.querySelector('.arhitExpance'),
    sectionCol = document.querySelectorAll('.section_col'),
    sectionCaption = document.querySelectorAll('.section_col_caption');
                                                   // not working on smaller resolution devices
const init = () => {    
    if (isDesktop.matches) {
        // console.log('is matching functional');
        addEventListeners();  // Add event listeners for desktop
    } else {
        removeEventListeners();  // Cleanup for smaller devices
    }
};
                                                            

// Add event listeners
const addEventListeners = () => {
    // Initially activate the first section
    sectionCol[0].classList.add('active');

    // Add hover functionality for each column
    sectionCol.forEach((col) => {
        col.addEventListener('mouseenter', handleMouseEnter);
    });
};

// Mouse enter handler for adding the 'active' class
const handleMouseEnter = (event) => {
    sectionCol.forEach((el) => el.classList.remove('active')); // Remove active class from all

    event.currentTarget.classList.add('active'); // Add active class to the hovered column
};

// Remove event listeners (for mobile or cleanup)
const removeEventListeners = () => {
    sectionCol.forEach((col) => {
        col.removeEventListener('mouseenter', handleMouseEnter);
    });
};

// Add listener for window resizing to handle desktop/mobile switch dynamically
isDesktop.addEventListener('change', init);

// Initialize on page load
init();


//  arhitExpance configuration part2

const menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu_list'),
    menuItemsAnchors = document.querySelectorAll('.menu_list_item');

const openButton = document.querySelector('.menu_open');
const closeButton = document.querySelector('.menu_close');

const tl = gsap.timeline({ 
    pause: true,
    defaults: {
        duration: 0.92,
        ease: 'expo.inOut'
    }
});


const initMenu = () => {
    gsap.set( menu, { PointerEvent: 'none', autoAlpha: 0});
    gsap.set(menuItems, {autoAlpha: 0 });
    gsap.set(menuItemsAnchors, { x: '-100%'});

    tl
    .to(menu,{
        autoAlpha: 1,
        stagger: 0.02,
        PointerEvents: 'auto'
    }, 0)
    .to(menuItems, {
        autoAlpha: 1,
    }, 0.08)
    .to(menuItemsAnchors, {
        x: '0%',
        stagger: 0.016
    }, 0);
    
    
    tl
    .to('.screenSized', {
        x: () => screenXShift()
    }, 0)
    .to('.arhitExpanceHeader div', {
        autoAlpha: 0
    }, 0)
    .to('body', {
        backgroundColor: '#111111',
        overflow: 'hidden',
        PointerEvents: 'nano'
    })
}

const open = () => {
    // console.log("shift to" + screenXShift);
    console.log('open');
    tl.play();
    menu.style.PointerEvent = 'auto';
}
const close = () => { 
    tl.reverse();
    menu.style.PointerEvent = 'none';
}

openButton.addEventListener('click', open);
closeButton.addEventListener('click', close);


// window.addEventListener('resize', () =>{
    
// });
initMenu();




// custom animation
const overlay = document.querySelector('.OverlayImage'),
    watermark = document.querySelector('.watermark'),
    message = document.querySelectorAll('.message'),
    text = document.querySelector('.text'),
    myName = document.querySelector('.name'),
    sentence = document.querySelector('.sentence');

let tlw = gsap.timeline({
    scrollTrigger: {
        trigger: overlay,
        start: 'top 70%',
        end: 'top 0%',
        // scrub: true
        markers: true
    }
});

let tlm = gsap.timeline({
    scrollTrigger: {
        trigger: message,
        start: 'top 70%',
        end: 'top 0%',
        // scrub: true
        // markers: true
    }
});


tlw .to(watermark, {
    duration: 3,
    rotate: 15,
    scale: 1.05,
    ease: 'power2.out',
    opacity: 0.3,
    // onComplete: () => {
    //     console.log("done");
        
    // }
})

tlm .to(message[0], {
        duration: 2,
        scale: 1.05,
        opacity: 1,
        ease: 'power2.out',
    
    })
    .to(message[0], {
        duration: 2,
        scale: 1.05,
        opacity: 0,
        ease: 'power2.out',
    })
    .to(message[1], {   
        duration: 1,
        opacity: 1,
        ease: 'power2.out',
    })
    .to(message[2], {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
    })
    .to(myName, {
        duration: 1,
        opacity: 1,
        ease: 'power2.out',
    })
    .to(sentence, {
        duration: 2,
        opacity: 1,
        ease: 'power2.out',
    })