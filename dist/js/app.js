'use strict';

$(document).ready(function () {
  console.log("jquery is ready");

  /*** loading animations ***/
  setTimeout(function () {
    $('.coffee-finder').addClass('bounceInDown');
  }, 100);

  setTimeout(function () {
    $('.landing-coffee-icon').addClass('bounceInLeft');
  }, 50);

  $('.callout').fadeIn(2500);
  /*** end loading animations ***/

  // array to store user answers
  var userAnswers = [];

  // scroll to quiz on arrow icon click
  $('#callout').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#quiz-container').offset().top
    }, 500);
  });

  $('#select-container-one').on('click', function () {
    $('#question-one-options').fadeIn(500);
  });

  $('.option-one').on('click', function () {
    var feelingChoice = $(this).text();
    $('#select-container-one').html(feelingChoice).css({ 'width': 'auto', 'background': '#f1c404' });
    userAnswers.feeling = feelingChoice;
    showQuestionTwo();
  });

  var showQuestionTwo = function showQuestionTwo() {
    $('#question-one-options').fadeOut();
    setTimeout(function () {
      $('#question-one-container').addClass('fadeOutUp');
    }, 500);
    setTimeout(function () {
      $('#question-one-container').addClass('display-none');
      $('#question-two-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-two').on('click', function () {
    $('#question-two-options').fadeIn(500);
  });

  $('.option-two').on('click', function () {
    var wifiChoice = $(this).text();
    $('#select-container-two').html(wifiChoice).css({ 'width': 'auto', 'background': '#f1c404' });
    userAnswers.wifi = wifiChoice;
    showQuestionThree();
  });

  var showQuestionThree = function showQuestionThree() {
    $('#question-two-options').fadeOut();
    setTimeout(function () {
      $('#question-two-container').addClass('fadeOutUp');
    }, 500);
    setTimeout(function () {
      $('#question-two-container').addClass('display-none');
      $('#question-three-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-three').on('click', function () {
    $('#question-three-options').fadeIn(500);
  });

  $('.option-three').on('click', function () {
    var foodChoice = $(this).text();
    $('#select-container-three').html(foodChoice).css({ 'width': 'auto', 'background': '#f1c404' });
    userAnswers.food = foodChoice;
    showQuestionFour();
  });

  var showQuestionFour = function showQuestionFour() {
    $('#question-three-options').fadeOut();
    setTimeout(function () {
      $('#question-three-container').addClass('fadeOutUp');
    });
    setTimeout(function () {
      $('#question-three-container').addClass('display-none');
      $('#question-four-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-four').on('click', function () {
    $('#question-four-options').fadeIn(500);
  });

  $('.option-four').on('click', function () {
    var locationChoice = $(this).text();
    $('#select-container-four').html(locationChoice).css({ 'width': 'auto', 'background': '#f1c404' });
    userAnswers.location = locationChoice;
    showCoffeeShopSuggestion();
  });

  var showCoffeeShopSuggestion = function showCoffeeShopSuggestion() {
    $('#question-four-options').fadeOut(500);
    $('#quiz-container').fadeOut(1000);
    $('#spinner-container').removeClass('display-none');
    setRandomSuggestionHeader();
    setTimeout(function () {
      $('#quiz-container').addClass('display-none');
      $('#spinner-container').fadeOut().addClass('display-none');;
      $('#suggestion-container').fadeIn(2000);
    }, 3000);
  };

  var headersArray = ["We suggest checking out", "Our strongest recommendation is", "You're going to love", "You should try", "Shoot on over to", "Head on down to", "Slide on over to", "We bet you'll really like", "The best vibe for you is at"];

  var setRandomSuggestionHeader = function setRandomSuggestionHeader() {
    var randomArrayPosition = Math.floor(Math.random() * (headersArray.length - 1));
    console.log('random: ', randomArrayPosition);
    $('#suggestion-header').html(headersArray[randomArrayPosition]);
  };

  $('.try-again-container').on('click', function () {
    location.reload();
    $(document).scrollTop(0);
  });
});