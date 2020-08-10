$(document).ready(function () {
  $('#action-search').click(function () {
    $('.__modal_search').css({ "display": "block" });
  });

  // Owl Carousel Comment Customer
  $('.feedback_customer').owlCarousel({
    loop: false,
    nav: true,
    margin: 30,
    dots: true,
    lazyLoad:true,
    responsive: {
      1000: {
        items: 2,
      },
    },
  });
});
