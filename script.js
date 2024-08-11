gsap.from("#page2 .card",{
    
    delay:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 .card",
        scroller:"body",
        start:"top 50%",
        end:"top 70%",
        scrub:2,
        markers:false,
        
    }
})
gsap.from("#page3 h1",{
    duration:2,
    y:50,
    delay:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start:"top 40%",
        end:"top 70%",
        scrub:2,
        markers:false,
        
    }
})

  var swiper = new Swiper('.swiper-container', {
    loop: true,           // Enables looping
    autoplay: {
      delay: 2500,        // Delay between transitions (in ms)
      disableOnInteraction: false, // Autoplay won't stop after user interactions
    },
  });

