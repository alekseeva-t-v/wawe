import mixitup from 'mixitup';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

(function () {
  const header = document.querySelector('.header__top');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header__top--active');
    } else {
      header.classList.remove('header__top--active');
    }
  };
}());

$(function () {
  $('.menu a, .header__icon').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
  });

  Fancybox.bind('[data-fancybox]', {});

  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer = mixitup('.gallery__content');
});
