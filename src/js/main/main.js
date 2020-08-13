$(document).ready(function () {

  // Modal Search
  $('#action-search').click(function () {
    $('.__wrap_modal_search').toggleClass('active');
    $('body').css({
      'overflow': 'hidden',
    });
  });

  $('#_close_search').click(function(){
    $('.__wrap_modal_search').removeClass('active');
    $('body').css({
      'overflow': 'auto',
    });
  });
  //End Modal Search

  // Scroll Next Section
  $('#scroll_next').click(function () {
    $('html,body').animate({
      scrollTop: $('.__ss_services').offset().top - 100,
    }, 1000);
  });

  // Click Icon Show Menu Right
  $('#showMenu').click(function () {
    $('.__wrap_nav_menu').toggleClass('active');
    $('body').css({
      'overflow': 'hidden',
    });
  });

  // Close menu
  $('#closeMenu').click(function () {
    $('.__wrap_nav_menu').removeClass('active');
    $('body').css({
      'overflow': 'auto',
    });
  });

  //Click Out Div Hide Menu
  let modal = document.getElementById('modalMenu');
  let modalSearch = document.getElementById('modalSearch');
  window.onclick = function (event) {
    if (event.target == modal) {
      $('.__wrap_nav_menu').removeClass('active');  
      $('body').css({
        'overflow': 'auto',
      });
    }else if(event.target == modalSearch){
      $('.__wrap_modal_search').removeClass('active');  
      $('body').css({
        'overflow': 'auto',
      });
    }
  }
  
  // Number Counter
  $('._percent span').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text(),
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
    });
  });

  // Popup
  $('#show_popup').magnificPopup({
    items: [
      {
        src: "https://www.youtube.com/watch?v=y_6aSG2yfe8",
        type: 'iframe',
      },
    ],
  });

  // Owl Carousel Comment Customer
  $('.feedback_customer').owlCarousel({
    loop: false,
    nav: true,
    margin: 30,
    dots: true,
    lazyLoad: true,
    responsive: {
      1000: {
        items: 2,
      },
    },
  });
});
