$(document).ready(function(){setTimeout(function(){$(".coffee-finder").addClass("bounceInLeft")},150),setTimeout(function(){$(".landing-coffee-icon").addClass("bounceInDown")},100),setTimeout(function(){$(".triangle").addClass("bounceInUp")},50),$(".callout").css("display","flex").fadeIn(2500);var e=[];$("#callout").on("click",function(){$("html, body").animate({scrollTop:$("#quiz-container").offset().top},500),$("#quiz-subcontainer").fadeIn(2e3).css("display","flex")}),$(window).scroll(function(){$(window).scrollTop()>$("#landing-container").outerHeight()&&$("#quiz-subcontainer").fadeIn(2e3).css("display","flex")}),$("#select-container-one").on("click",function(){$("#question-one-options").fadeIn(500)}),$(".option-one").on("click",function(){var n=$(this).text();$("#select-container-one").html(n).css({width:"auto",background:"#f1c404"}),e.location=n,t()});const t=()=>{$("#question-number").html("2"),$("#question-one-options").fadeOut(),setTimeout(function(){$("#question-one-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-one-container").addClass("display-none"),$("#question-two-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-two").on("click",function(){$("#question-two-options").fadeIn(500)}),$(".option-two").on("click",function(){var t=$(this).text();$("#select-container-two").html(t).css({width:"auto",background:"#f1c404"}),e.wifi=t,n()});const n=()=>{$("#question-number").html("3"),$("#question-two-options").fadeOut(),setTimeout(function(){$("#question-two-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-two-container").addClass("display-none"),$("#question-three-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-three").on("click",function(){$("#question-three-options").fadeIn(500)}),$(".option-three").on("click",function(){var t=$(this).text();$("#select-container-three").html(t).css({width:"auto",background:"#f1c404"}),e.food=t,i()});const i=()=>{$("#question-number").html("4"),$("#question-three-options").fadeOut(),setTimeout(function(){$("#question-three-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-three-container").addClass("display-none"),$("#question-four-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-four").on("click",function(){$("#question-four-options").fadeIn(500)}),$(".option-four").on("click",function(){var t=$(this).text();$("#select-container-four").html(t).css({width:"auto",background:"#f1c404"}),e.feeling=t,o()});const o=()=>{$("#question-number").html("5"),$("#question-four-options").fadeOut(),setTimeout(function(){$("#question-four-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-four-container").addClass("display-none"),$("#question-five-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-five").on("click",function(){$("#question-five-options").fadeIn(500)}),$(".option-five").on("click",function(){var t=$(this).text();$("#select-container-five").html(t).css({width:"auto",background:"#f1c404"}),e.seating=t,s()});const s=()=>{$("#question-four-options").fadeOut(500),$("#landing-container").fadeOut(500),$("#quiz-container").fadeOut(500),$("#spinner-container").css("display","flex").fadeIn(500),setTimeout(function(){u(),c(),$("#spinner-container").fadeOut(500),$("#suggestion-container").css("display","flex").fadeIn(500)},3e3),$("html, body").animate({scrollTop:$("#quiz-container").offset().top},500)},l=["We suggest checking out","Our strongest recommendation is","You're going to love","You should try","Shoot on over to","Head on down to","Slide on over to","We bet you'll really like","The best vibe for you is at"],c=()=>{var e=Math.floor(Math.random()*(l.length-1));$("#suggestion-header").html(l[e])};$(document.body).on("click",".try-again-container",function(){location.reload()});const a=(e,t)=>{var n=e.import.querySelector("template"),i=document.importNode(n.content,!0);document.querySelector("#suggestion-container").appendChild(i),$("#city-name").text(t)},r=e=>{console.log("setting yelp button"),"Chapel Hill"===e?$("#yelp-button").attr("href","https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Chapel+Hill%2C+NC&ns=1"):"Durham"===e?$("#yelp-button").attr("href","https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Durham,+NC"):"Raleigh"===e&&$("#yelp-button").attr("href","https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Raleigh,+NC")},u=()=>{"Chapel Hill/Carrboro"===e.location?f():"Durham"===e.location?m():y()},d=()=>{return Math.random()},f=()=>{if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"desired"===e.seating){if((n=d())>=.5)var t=document.querySelector('link[title="open eye"]');else t=document.querySelector('link[title="looking glass cafe"]');a(t)}else if("a necessity"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="carolina coffee shop"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"desired"===e.seating){t=document.querySelector('link[title="joe van gogh ch"]');a(t)}else if("not important"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"desired"===e.seating){t=document.querySelector('link[title="caffe driade"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="bread and butter"]');a(t)}else if("a necessity"===e.wifi&&"desired"===e.food&&"productive"===e.feeling&&"desired"===e.seating){t=document.querySelector('link[title="market street"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){var n;if((n=d())<=.33)t=document.querySelector('link[title="perennial"]');else if(n>.33&&n<=.66)t=document.querySelector('link[title="gray squirrel"]');else if(n>.66)t=document.querySelector('link[title="coco bean"]');a(t)}else{t=document.querySelector('link[title="no match"]');a(t,"Chapel Hill"),r("Chapel Hill")}},m=()=>{if("not important"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){if((n=d())<=.33)var t=document.querySelector('link[title="baby scratch"]');else if(n>.33&&n<=.66)t=document.querySelector('link[title="dulce"]');else if(n>.66)t=document.querySelector('link[title="parker and otis"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"desired"===e.seating){var n;if((n=d())<=.33)t=document.querySelector('link[title="cocoa cinnamon"]');else if(n>.33&&n<=.66)t=document.querySelector('link[title="bean traders"]');else if(n>.66)t=document.querySelector('link[title="triangle"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="kaffeinate"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="joe van gogh durham"]');a(t)}else if("a necessity"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="saladelia"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"upbeat"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="pine cone"]');a(t)}else{t=document.querySelector('link[title="no match"]');a(t,"Durham"),r("Durham")}},y=()=>{if("a necessity"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){if((n=d())<=.33)var t=document.querySelector('link[title="brew"]');else if(n>.33&&n<=.66)t=document.querySelector('link[title="sola"]');else if(n>.66)t=document.querySelector('link[title="morning times"]');a(t)}else if("a necessity"===e.wifi&&"desired"===e.food&&"productive"===e.feeling&&"desired"===e.seating){var n;if((n=d())<=.33)t=document.querySelector('link[title="new world"]');else if(n>.33&&n<=.66)t=document.querySelector('link[title="jubala"]');else if(n>.66)t=document.querySelector('link[title="benelux"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){t=document.querySelector('link[title="liquid state"]');a(t)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"desired"===e.seating){t=document.querySelector('link[title="sir walter"]');a(t)}else if("a necessity"===e.wifi&&"desired"===e.food&&"reflective"===e.feeling&&"desired"===e.seating){t=document.querySelector('link[title="sommeliers roast"]');a(t)}else if("not important"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"unrequired"===e.seating){t=document.querySelector('link[title="forty two"]');a(t)}else{t=document.querySelector('link[title="no match"]');a(t,"Raleigh"),r("Raleigh")}}}); && userAnswers.feeling === 'reflective' && userAnswers.seating === 'desired') {
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

  var findDurhamCoffee = function findDurhamCoffee() {
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

  var findRaleighCoffee = function findRaleighCoffee() {
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