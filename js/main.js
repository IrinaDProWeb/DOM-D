$(function () {

  $('.slider__box').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='./images/prev-arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='./images/next-arrow.svg' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: "<img src='./images/prev-arrow.svg' class='prev' alt='1'>",
          nextArrow: "<img src='./images/next-arrow.svg' class='next' alt='2'>",
        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.burger-menu').removeClass('burger-menu--close');
  });

  $('.burger-menu__btn-close').on('click', function () {
    $('.burger-menu').addClass('burger-menu--close');
  });

});
