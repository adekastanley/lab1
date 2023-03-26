
const hamburger = document.querySelector('.ham-container')
let navOPen = false;
hamburger.addEventListener('click', ()=> {
    if (navOPen){
        gsap.timeline()
        .to('.nav-container',{
           x: -200, ease:"power2.out" 
        })
        navOPen = false
    } else {
        gsap.timeline()
        .to('.nav-container',{
           x: 200, ease:"power2.out" 
        })
        navOPen = true
    }

})