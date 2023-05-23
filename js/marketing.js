window.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = 0.5;
  }, 2900);
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);



  // navigation 
  const navigation = document.querySelector('.navigation'),
    bars = document.querySelector('.fa-bars');
  bars.addEventListener('click', () => {
    navigation.classList.add('navigation__add');

    if (navigation.classList.contains('navigation__add')) {
      navigation.classList.toggle('navigation__remove');

    }
  });

});