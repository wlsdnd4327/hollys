$(function(){
    let swiper = new Swiper(".main_visual", {
        loop: true,
        autoplay : {  
        delay : 4000,  
        disableOnInteraction : false, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})