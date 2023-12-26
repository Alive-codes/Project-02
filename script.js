// Menu Open Close 
let menu = document.querySelector('.menu-icon');

menu.oneclick = () => {
    menu.classList.toggle("move");
};

//swiper
var swiper = new Swiper("services-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

