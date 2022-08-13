$(document).ready(function(){

    const swiper = new Swiper('.swiper-container', {

        // slider effect

    effect: 'cube',
      grabCursor: true,
      cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
      },

      autoplay: {
            delay: 3000,
            disableOnInteraction: false,
      },
      speed:1000,




        // swiper-paginaton

            pagination: {
                el: '.swiper-pagination',
                type : "fraction"
            },

            // swiper-scrollbar

            // scrollbar: {
            //     el: '.swiper-scrollbar',
                
            //   },

            //   navigation-arrow


            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            

    })
})