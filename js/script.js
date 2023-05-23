window.addEventListener('DOMContentLoaded', () =>{
// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
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

  // blog 

  const blogHeader = document.querySelector('.blog__header'),
        blogItem = document.querySelectorAll('.blog__item'),
        blogContainer = document.querySelectorAll('.blog__container');

        function hideBlogContainer (){
                blogContainer.forEach(item  =>{
                  item.classList.add('hide');
                  item.classList.remove('show','grid');
                });
                blogItem.forEach(item =>{
                  item.classList.remove('active');
                });
        }
        function showBlogContainer (i = 0){
              blogContainer[i].classList.add('show','grid');
              blogContainer[i].classList.remove('hide');
              blogItem[i].classList.add('active');
        }
        hideBlogContainer();
        showBlogContainer();

        blogHeader.addEventListener('click', (e) =>{
          const target = e.target;
          if(target && e.target.classList.contains('blog__item')){
            
            blogItem.forEach((item,idx) =>{
              if(item == target){
                hideBlogContainer();
                showBlogContainer(idx);
              }
            });
          }
        });

        // navigation 

        const navigation = document.querySelector('.navigation'),
              bars = document.querySelector('.fa-bars');
              bars.addEventListener('click', () =>{
                navigation.classList.add('navigation__add');
                
                if(navigation.classList.contains('navigation__add')){
                  navigation.classList.toggle('navigation__remove');
              
                }
              });
             

             


});