// const swup = new Swup()
// random number generator
// var randNum = Math.floor(Math.random() * 1) + 1;
// console.log(randNum);

// // gsap animation
// if(randNum == 1){
//     gsap.to
// }

(function () {
    const name = document.querySelectorAll('.box > .hover');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
        const span = document.querySelector('.hoverEf');
        const {offsetX: x, offsetY: y} = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move= 25,   
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    name.forEach(b => b.addEventListener('mousemove', animateit));
    name.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
})();