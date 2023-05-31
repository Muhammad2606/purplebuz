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

  // input 

  const progress = document.querySelector('.progress__content'),
    input1 = progress.querySelector('.input1'),
    span1 = progress.querySelector('.span1'),
    input2 = progress.querySelector('.input2'),
    span2 = progress.querySelector('.span2'),
    input3 = progress.querySelector('.input3'),
    span3 = progress.querySelector('.span3');



    input1.oninput = myInputOne;

  function myInputOne() {
    span1.innerText = this.value +"%";

  }
  input2.oninput = myInputTwo;


  function myInputTwo() {
    span2.innerText = this.value + "%";

  }
  input3.oninput = myInputThree;


  function myInputThree() {
    span3.innerText = this.value + "%";

  }

});