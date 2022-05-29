"use strict";

jQuery(function ($) {

  $('.review__list').owlCarousel({
    margin: 10,
    nav: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      768: {
        items: 1,
        nav: true,
        touchDrag: false,
        dots: false
      }
    },
    onInitialized: reviewListCounter,
    onTranslated: reviewListCounter
  });

  function reviewListCounter(event) {
    var maxCounters = event.item.count;
    var count = event.item.index + 1;

    $('.review__counter--current').text(count);
    $('.review__counter--total').text(maxCounters);
  }

  $('.ind-order__decor-list').owlCarousel({
    margin: 10,
    nav: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: true,
        dots: false,
        touchDrag: false
      }
    },
    onInitialized: decoreListCounter,
    onTranslated: decoreListCounter
  });

  function decoreListCounter(event) {
    var maxCounters = event.item.count;
    var count = event.item.index + 1;

    $('.ind-order__counters-decor').text(count +'/'+ maxCounters);
  }

  $('.ind-order__size-list').owlCarousel({
    margin: 0,
    nav: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      768: {
        items: 4,
        nav: false,
        dots: false,
        touchDrag: false
      }
    }
  });

  $('.ind-order__slyder-block').owlCarousel({
    margin: 0,
    nav: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 1,
        nav: true,
        dots: false,
        touchDrag: false
      }
    },
    onInitialized: fillingListCounter,
    onTranslated: fillingListCounter
  });

  function fillingListCounter(event) {
    var maxCounters = event.item.count;
    var count = event.item.index + 1;

    $('.ind-order__counters').text(count +'/'+ maxCounters);
  }

  var formSizeItems = $('.ind-order__size-item');
  var formDecorItems = $('.ind-order__decor-list-item');
  var formsSizeClick = $('.ind-order__size-content-image-button, .ind-order-size__button');
  var formsDecorClick = $('.ind-order__decor-button, .ind-order__decor-image-sl');
  var buttonsFilling = $('.ind-order__filling-block__button');
  var inputSizeSelect = $('.order-form__select[name="order-size"] option');
  var inputDecorSelect = $('.order-form__select[name="order-decor"] option');
  var inputFillingSelect = $('.order-form__select[name="order-filling"] option');


  function resetSizeItems() {
    for (var i = 0; i < formSizeItems.length; i++) {
      formSizeItems.eq(i).removeClass('active');
      inputSizeSelect.eq(i).prop('selected', false);
    }
  }

  function resetDecoreItems() {
    for (var i = 0; i < formDecorItems.length; i++) {
      formDecorItems.eq(i).removeClass('active');
      inputDecorSelect.eq(i).prop('selected', false);
    }
  }

  function resetFillingButtons() {
    for (var i = 0; i < formDecorItems.length; i++) {
      buttonsFilling.eq(i).removeClass('active');
      inputFillingSelect.eq(i).prop('selected', false);
    }
  }

  formsSizeClick.on('click', function() {
    resetSizeItems();
    $(this).parents('.ind-order__size-item').addClass('active');
    var count = $(this).attr('data-size-order');
    inputSizeSelect.eq(count).prop('selected', true);
    });

  formsDecorClick.on('click', function() {
    resetDecoreItems();
    $(this).parents('.ind-order__decor-list-item').addClass('active');
    var count = $(this).attr('data-decor-order');
    inputDecorSelect.eq(count).prop('selected', true);
  });

  buttonsFilling.on('click', function() {
    resetFillingButtons();
    $(this).addClass('active');
    var count = $(this).attr('data-filling-order');
    inputFillingSelect.eq(count).prop('selected', true);
  });
});
