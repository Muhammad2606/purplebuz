window.addEventListener('DOMContentLoaded', () => {



  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.style.opacity = 0.5;

  }, 1500);
  setTimeout(() => {
    loader.style.display = 'none';

  }, 1600);




  // work blog 

  const workBlogHeader = document.querySelector('.work__header'),
    workBlogItems = document.querySelectorAll('.work__items'),
    workBlogContent = document.querySelectorAll('.work__blog__content__A');

  console.log(workBlogContent);
  function workBlogContentHide() {
    workBlogContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'swirl-in-left-fwd');

    });
    workBlogItems.forEach(item => {
      item.classList.remove('work__active');
    });
  }
  function workBlogContentShow(i = 0) {
    workBlogContent[i].classList.add('show', 'swirl-in-left-fwd');
    workBlogContent[i].classList.remove('hide');
    workBlogItems[i].classList.add('work__active');

  }
  workBlogContentHide();
  workBlogContentShow();

  workBlogHeader.addEventListener('click', e => {
    const target = e.target;
    if (target && e.target.classList.contains('work__items')) {
      workBlogItems.forEach((item, idx) => {
        if (target == item) {
          workBlogContentHide();
          workBlogContentShow(idx);

        }
      });
    }
  });

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