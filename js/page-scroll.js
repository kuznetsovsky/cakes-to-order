jQuery(function( $ ) {
    'use strict';

    $('.navigation__list').on('click', '.navigation__links', function (event) {
      event.preventDefault();

      let link = $(this).attr('href');

      if ($(link).length != 0) {
        $('html, body').stop().animate({ scrollTop: $(link).offset().top }, 700);
      }
    });

    $('.footer__menu-list').on('click', '.footer__menu-link', function (event) {
      event.preventDefault();

      let link = $(this).attr('href');

      if ($(link).length != 0) {
        $('html, body').stop().animate({ scrollTop: $(link).offset().top }, 700);
      }
    });

  });
