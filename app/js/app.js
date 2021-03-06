$(document).ready(function() {

  /*** loading animations ***/
  setTimeout(function() {
    $('.coffee-finder').addClass('bounceInLeft');
  }, 150);

  setTimeout(function() {
    $('.landing-coffee-icon').addClass('bounceInDown');
  }, 100);

  setTimeout(function() {
    $('.triangle').addClass('bounceInUp');
  }, 50);

  $('.callout').css('display', 'flex').fadeIn(2500);
  /*** end loading animations ***/

  // array to store user answers
  var userAnswers = [];

  // scroll to quiz on arrow icon click
  $('#callout').on('click', function() {
    $('html, body').animate( {
      scrollTop: $('#quiz-container').offset().top
    }, 500);
    $('#quiz-subcontainer').fadeIn(2000).css('display', 'flex');
    // $('#question-number').html('1');
  });

  // fade in first question if scrolled to instead of 'clicked to'
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var landingContainerHeight = $('#landing-container').outerHeight();
    if (scrollTop > (landingContainerHeight * .66)) {
      $('#quiz-subcontainer').fadeIn(2000).css('display', 'flex');
      // $('#question-number').html('1');
    }
  });

  $('#select-container-one').on('click', function() {
    $('#question-one-options').fadeIn(500);
  });

  $('.option-one').on('click', function() {
    var locationChoice = $(this).text();
    $('#select-container-one').html(locationChoice).css({'width': 'auto', 'background': '#f1c404'});
    userAnswers.location = locationChoice;
    showQuestionTwo();
  });

  const showQuestionTwo = () => {
    $('#question-number').html('2');
    $('#question-one-options').fadeOut();
    setTimeout(function() {
      $('#question-one-container').addClass('fadeOutUp');
    }, 500);
    setTimeout(function() {
      $('#question-one-container').addClass('display-none');
      $('#question-two-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-two').on('click', function() {
    $('#question-two-options').fadeIn(500);
  });

  $('.option-two').on('click', function() {
    var wifiChoice = $(this).text();
    $('#select-container-two').html(wifiChoice).css({'width': 'auto', 'background': '#f1c404'});
    userAnswers.wifi = wifiChoice;
    showQuestionThree();
  });

  const showQuestionThree = () => {
    $('#question-number').html('3');
    $('#question-two-options').fadeOut();
    setTimeout(function() {
      $('#question-two-container').addClass('fadeOutUp');
    }, 500);
    setTimeout(function() {
      $('#question-two-container').addClass('display-none');
      $('#question-three-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-three').on('click', function() {
    $('#question-three-options').fadeIn(500);
  });

  $('.option-three').on('click', function() {
    var foodChoice = $(this).text();
    $('#select-container-three').html(foodChoice).css({'width': 'auto', 'background': '#f1c404'});
    userAnswers.food = foodChoice;
    showQuestionFour();
  });

  const showQuestionFour = () => {
    $('#question-number').html('4');
    $('#question-three-options').fadeOut();
    setTimeout(function() {
      $('#question-three-container').addClass('fadeOutUp');
    }, 500);
    setTimeout(function() {
      $('#question-three-container').addClass('display-none');
      $('#question-four-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-four').on('click', function() {
    $('#question-four-options').fadeIn(500);
  });

  // new option 4 click method
  $('.option-four').on('click', function() {
    var feelingChoice = $(this).text();
    $('#select-container-four').html(feelingChoice).css({'width': 'auto', 'background': '#f1c404'});
    userAnswers.feeling = feelingChoice;
    showQuestionFive();
  });

  // option 5 stuff...
  const showQuestionFive = () => {
    $("#question-number").html('5');
    $('#question-four-options').fadeOut();
    setTimeout(function() {
      $('#question-four-container').addClass('fadeOutUp');
    }, 500);
    setTimeout(function() {
      $('#question-four-container').addClass('display-none');
      $('#question-five-container').addClass('fadeInUp').removeClass('display-none');
    }, 1000);
  };

  $('#select-container-five').on('click', function() {
    $('#question-five-options').fadeIn(500);
  });

  $('.option-five').on('click', function() {
    var seatingChoice = $(this).text();
    $('#select-container-five').html(seatingChoice).css({'width': 'auto', 'background': '#f1c404'});
    userAnswers.seating = seatingChoice;
    showCoffeeShopSuggestion();
  });

  const showCoffeeShopSuggestion = () => {
    $('#question-four-options').fadeOut(500);
    $('#landing-container').fadeOut(500);
    $('#quiz-container').fadeOut(500);
    $('#spinner-container').css('display', 'flex').fadeIn(500);
    setTimeout(function() {
      determineSuggestion();
      setRandomSuggestionHeader();
      $('#spinner-container').fadeOut(500);
      $('#suggestion-container').css('display', 'flex').fadeIn(500);
    }, 3000);
    $('html, body').animate( {
      scrollTop: $('#quiz-container').offset().top
    }, 500);
  };

  /*** array to store random headers for suggestions ***/
  const headersArray = ["We suggest checking out", "Our strongest recommendation is", "You're going to love", "You should try", "Shoot on over to", "Head on down to", "Slide on over to", "We bet you'll really like", "The best vibe for you is at"];

  /*** generate a random header for suggestion ***/
  const setRandomSuggestionHeader = () => {
    var randomArrayPosition = Math.floor(Math.random() * (headersArray.length - 1));
    $('#suggestion-header').html(headersArray[randomArrayPosition]);
  };

  const setStoreTemplate = (link, cityName) => {
    var template = link.import.querySelector('template');
    var clone = document.importNode(template.content, true);
    document.querySelector('#suggestion-container').appendChild(clone);
    $('#city-name').text(cityName);
  };

  const setYelpButton = (cityName) => {
    console.log('setting yelp button');
    if (cityName === 'Chapel Hill') {
      $('#yelp-button').attr('href', 'https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Chapel+Hill%2C+NC&ns=1');
    } else if (cityName === 'Durham') {
      $('#yelp-button').attr('href', 'https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Durham,+NC');
    } else if (cityName === 'Raleigh') {
      $('#yelp-button').attr('href', 'https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Raleigh,+NC');
    }
  };

  const determineSuggestion = () => {
    if (userAnswers.location === 'Chapel Hill/Carrboro') {
      findChapelHillCarrboroCoffee();
    } else if (userAnswers.location === 'Durham') {
      findDurhamCoffee();
    } else {
      findRaleighCoffee();
    }
  };

  const produceRandomNumber= () => {
    const randomNumber = Math.random();
    return randomNumber;
  };

  const findChapelHillCarrboroCoffee = () => {
    if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      var decidingNum = produceRandomNumber();
      if (decidingNum >= 0.5) {
        var link = document.querySelector('link[title="open eye"]');
      } else {
        var link = document.querySelector('link[title="looking glass cafe"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="carolina coffee shop"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'desired') {
      var link = document.querySelector('link[title="joe van gogh ch"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'not important' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'desired') {
      var link = document.querySelector('link[title="caffe driade"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="bread and butter"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      var link = document.querySelector('link[title="market street"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      var decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var link = document.querySelector('link[title="perennial"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var link = document.querySelector('link[title="gray squirrel"]');
      } else if (decidingNum > 0.66) {
        var link = document.querySelector('link[title="coco bean"]');
      }
      setStoreTemplate(link);
    } else {
      var link = document.querySelector('link[title="no match"]');
      var cityName = 'Chapel Hill';
      setStoreTemplate(link, cityName);
      setYelpButton(cityName);
    }
  };

  const findDurhamCoffee = () => {
    if (userAnswers.wifi === 'not important' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      var decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var link = document.querySelector('link[title="baby scratch"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var link = document.querySelector('link[title="dulce"]');
      } else if (decidingNum > 0.66) {
        var link = document.querySelector('link[title="parker and otis"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      var decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var link = document.querySelector('link[title="cocoa cinnamon"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var link = document.querySelector('link[title="bean traders"]');
      } else if (decidingNum > 0.66) {
        var link = document.querySelector('link[title="triangle"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="kaffeinate"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="joe van gogh durham"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="saladelia"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="pine cone"]');
      setStoreTemplate(link);
    } else {
      var link = document.querySelector('link[title="no match"]');
      var cityName = 'Durham';
      setStoreTemplate(link, cityName);
      setYelpButton(cityName);
    }
  };

  const findRaleighCoffee = () => {
    if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      var decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var link = document.querySelector('link[title="brew"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var link = document.querySelector('link[title="sola"]');
      } else if (decidingNum > 0.66) {
        var link = document.querySelector('link[title="morning times"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      var decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var link = document.querySelector('link[title="new world"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var link = document.querySelector('link[title="jubala"]');
      } else if (decidingNum > 0.66) {
        var link = document.querySelector('link[title="benelux"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      var link = document.querySelector('link[title="liquid state"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      var link = document.querySelector('link[title="sir walter"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'desired') {
      var link = document.querySelector('link[title="sommeliers roast"]');
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'not important' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'unrequired') {
      var link = document.querySelector('link[title="forty two"]');
      setStoreTemplate(link);
    } else {
      var link = document.querySelector('link[title="no match"]');
      var cityName = 'Raleigh';
      setStoreTemplate(link, cityName);
      setYelpButton(cityName);
    }
  };

});

// mobile workaround
var reloadApp = function() {
  document.location.reload(true);
}
