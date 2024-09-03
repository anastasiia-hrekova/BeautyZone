const swiper = new Swiper('.swiper-container', { 
    slidesPerView: 1,
    spaceBetween: 16,   
    loop: true,

    breakpoints: {
                
        768: {
          slidesPerView: 2,
         
        },
        
        1280: {
          slidesPerView: 3,

        }},

    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',
    },
  
    navigation: {
      nextEl: '.carousel-btn.next',
      prevEl: '.carousel-btn.prev',
    },
  
  });