
    const ProjectSwiper = new Swiper('.proSwiper', {
        
   slidesPerView:3,
   spaceBetween:9,
   // speed:6000,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay:2500,
    disableOnInteraction: false,
   //   pauseOnMouseEnter: true,

},

  allowTouchMove:true,

//   freeMode:true,
   // If we need pagination
   pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    

});
