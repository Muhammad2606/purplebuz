window.addEventListener('DOMContentLoaded', () => {


  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.style.opacity = 0.5;

  }, 1500);
  setTimeout(() => {
    loader.style.display = 'none';

  }, 1600);

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