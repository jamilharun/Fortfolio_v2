// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener('resize', () =>{console.log(window.innerWidth);});


// gsap configuration

const section = document.querySelector('.introAnimation'),
    sectionContainer = document.querySelector('.arhitExpance'),
    sectionCol = document.querySelectorAll('.section_col'),
    sectionCaption = document.querySelectorAll('.section_col_caption');

const isDesktop = window.matchMedia('(min-width: 768px)'); // 768px is the breakpoint for desktop
                                                            // not working on smaller resolution devices

const init = () => {
    if (isDesktop.matches) addEventListeners();
};

const addEventListeners = () =>{
    sectionCol[0].classList.add('active');
    // console.log('colasdasd')

    sectionCol.forEach((col,index)=>{
        col.addEventListener('mouseenter', () => {
            sectionCol.forEach((el)=> el.classList.remove('active'));

            col.classList.add('active');

            if (index === col.length - 1) col.classList.add('active');
    
        })

    })
}