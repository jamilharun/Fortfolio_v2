// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener('resize', () =>{console.log(window.innerWidth);});


// arhitExpance configuration part1

const section = document.querySelector('.introAnimation'),
    sectionContainer = document.querySelector('.arhitExpance'),
    sectionCol = document.querySelectorAll('.section_col'),
    sectionCaption = document.querySelectorAll('.section_col_caption');

const isDesktop = window.matchMedia('( min-width: 768px)'); // 768px is the breakpoint for desktop
                                                            // not working on smaller resolution devices
const init = () => {
    if (isDesktop.matches) {
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
        x: '-50rem'
    }, 0)
    .to('section_header div', {
        autoAlpha: 0
    }, 0)
    .to('body', {
        backgroundColor: '#111111',
        overflow: 'hidden',
        PointerEvents: 'nano'
    })
}

const open = () => {
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

initMenu();