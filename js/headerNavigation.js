"use strict";
jQuery(function ($) {

    $('.no-js').removeClass('no-js');

    var checkMenuFocus = false;
    var $navigation = $('.navigation');
    var $menuButton = $('.navigation__button');
    var $navigationSection = $('.navigation__section-menu');

    function showToggleMenu() {
      $navigation.toggleClass('show');
    }

    $menuButton.on('click', function(event) {
      event.preventDefault();
      showToggleMenu();
    });

    $menuButton.on('keydown', function(event) {
      if(event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        showToggleMenu();
        checkMenuFocus = (checkMenuFocus) ? false : true;
        focusManager.capture($navigationSection.get(0));
      }
    });

    $(window).on("keydown", function(event) {
      if(event.keyCode === 27 && checkMenuFocus) {
        event.preventDefault();
        showToggleMenu();
        checkMenuFocus = false;
        focusManager.release($navigationSection.get(0));
      }
    });

});
