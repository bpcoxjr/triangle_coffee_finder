$(document).ready(function(){setTimeout(function(){$(".coffee-finder").addClass("bounceInLeft")},150),setTimeout(function(){$(".landing-coffee-icon").addClass("bounceInDown")},100),setTimeout(function(){$(".triangle").addClass("bounceInUp")},50),$(".callout").css("display","flex").fadeIn(2500);let e=[];$("#callout").on("click",function(){$("html, body").animate({scrollTop:$("#quiz-container").offset().top},500),$("#quiz-subcontainer").fadeIn(2e3).css("display","flex")}),$(window).scroll(function(){$(window).scrollTop()>$("#landing-container").outerHeight()&&$("#quiz-subcontainer").fadeIn(2e3).css("display","flex")}),$("#select-container-one").on("click",function(){$("#question-one-options").fadeIn(500)}),$(".option-one").on("click",function(){let i=$(this).text();$("#select-container-one").html(i).css({width:"auto",background:"#f1c404"}),e.location=i,t()});const t=()=>{$("#question-number").html("2"),$("#question-one-options").fadeOut(),setTimeout(function(){$("#question-one-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-one-container").addClass("display-none"),$("#question-two-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-two").on("click",function(){$("#question-two-options").fadeIn(500)}),$(".option-two").on("click",function(){let t=$(this).text();$("#select-container-two").html(t).css({width:"auto",background:"#f1c404"}),e.wifi=t,i()});const i=()=>{$("#question-number").html("3"),$("#question-two-options").fadeOut(),setTimeout(function(){$("#question-two-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-two-container").addClass("display-none"),$("#question-three-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-three").on("click",function(){$("#question-three-options").fadeIn(500)}),$(".option-three").on("click",function(){let t=$(this).text();$("#select-container-three").html(t).css({width:"auto",background:"#f1c404"}),e.food=t,n()});const n=()=>{$("#question-number").html("4"),$("#question-three-options").fadeOut(),setTimeout(function(){$("#question-three-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-three-container").addClass("display-none"),$("#question-four-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-four").on("click",function(){$("#question-four-options").fadeIn(500)}),$(".option-four").on("click",function(){let t=$(this).text();$("#select-container-four").html(t).css({width:"auto",background:"#f1c404"}),e.feeling=t,o()});const o=()=>{$("#question-number").html("5"),$("#question-four-options").fadeOut(),setTimeout(function(){$("#question-four-container").addClass("fadeOutUp")},500),setTimeout(function(){$("#question-four-container").addClass("display-none"),$("#question-five-container").addClass("fadeInUp").removeClass("display-none")},1e3)};$("#select-container-five").on("click",function(){$("#question-five-options").fadeIn(500)}),$(".option-five").on("click",function(){let t=$(this).text();$("#select-container-five").html(t).css({width:"auto",background:"#f1c404"}),e.seating=t,l()});const l=()=>{$("#question-four-options").fadeOut(500),$("#landing-container").fadeOut(500),$("#quiz-container").fadeOut(500),$("#spinner-container").css("display","flex").fadeIn(500),setTimeout(function(){r(),c(),$("#spinner-container").fadeOut(500),$("#suggestion-container").css("display","flex").fadeIn(500)},3e3),$("html, body").animate({scrollTop:$("#quiz-container").offset().top},500)},s=["We suggest checking out","Our strongest recommendation is","You're going to love","You should try","Shoot on over to","Head on down to","Slide on over to","We bet you'll really like","The best vibe for you is at"],c=()=>{let e=Math.floor(Math.random()*(s.length-1));$("#suggestion-header").html(s[e])};$(document.body).on("click",".try-again-container",function(){location.reload()});const d=(e,t)=>{let i=e.import.querySelector("template"),n=document.importNode(i.content,!0);document.querySelector("#suggestion-container").appendChild(n),$("#city-name").text(t)},u=e=>{"Chapel Hill"===e?$("#yelp-button").attr("href","https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Chapel+Hill%2C+NC&ns=1"):"Durham"===e?$("#yelp-button").attr("href","https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Durham,+NC"):"Raleigh"===e&&$("#yelp-button").attr("href","https://www.yelp.com/search?find_desc=coffee+shops&find_loc=Raleigh,+NC")},r=()=>{"Chapel Hill/Carrboro"===e.location?f():"Durham"===e.location?m():g()},a=()=>{return Math.random()},f=()=>{if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"desired"===e.seating){if(a()>.5)document.querySelector('link[title="open eye"]');else document.querySelector('link[title="looking glass cafe"]');d(link)}else if("a necessity"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="carolina coffee shop"]');d(e)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"desired"===e.seating){let e=document.querySelector('link[title="joe van gogh ch"]');d(e)}else if("not important"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"desired"===e.seating){let e=document.querySelector('link[title="caffe driade"]');d(e)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="bread and butter"]');d(e)}else if("a necessity"===e.wifi&&"desired"===e.food&&"productive"===e.feeling&&"desired"===e.seating){let e=document.querySelector('link[title="market street"]');d(e)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){if(decidingNum=a(),decidingNum<=.33)document.querySelector('link[title="perennial"]');else if(decidingNum>.33&&decidingNum<=.66)document.querySelector('link[title="gray squirrel"]');else if(decidingNum>.66)document.querySelector('link[title="coco bean"]');d(link)}else{let e=document.querySelector('link[title="no match"]'),t="Chapel Hill";d(e,t),u(t)}},m=()=>{if("not important"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){if(decidingNum=a(),decidingNum<=.33)document.querySelector('link[title="baby scratch"]');else if(decidingNum>.33&&decidingNum<=.66)document.querySelector('link[title="dulce"]');else if(decidingNum>.66)document.querySelector('link[title="parker and otis"]');d(link)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"desired"===e.seating){if(decidingNum=a(),decidingNum<=.33)document.querySelector('link[title="cocoa cinnamon"]');else if(decidingNum>.33&&decidingNum<=.66)document.querySelector('link[title="bean traders"]');else if(decidingNum>.66)document.querySelector('link[title="triangle"]');d(link)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="kaffeinate"]');d(e)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="joe van gogh durham"]');d(e)}else if("a necessity"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="saladelia"]');d(e)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"upbeat"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="pine cone"]');d(e)}else{let e=document.querySelector('link[title="no match"]'),t="Durham";d(e,t),u(t)}},g=()=>{if("a necessity"===e.wifi&&"desired"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){if(decidingNum=a(),decidingNum<=.33)document.querySelector('link[title="brew"]');else if(decidingNum>.33&&decidingNum<=.66)document.querySelector('link[title="sola"]');else if(decidingNum>.66)document.querySelector('link[title="morning times"]');d(link)}else if("a necessity"===e.wifi&&"desired"===e.food&&"productive"===e.feeling&&"desired"===e.seating){if(decidingNum=a(),decidingNum<=.33)document.querySelector('link[title="new world"]');else if(decidingNum>.33&&decidingNum<=.66)document.querySelector('link[title="jubala"]');else if(decidingNum>.66)document.querySelector('link[title="benelux"]');d(link)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"upbeat"===e.feeling&&"desired"===e.seating){let e=document.querySelector('link[title="liquid state"]');d(e)}else if("a necessity"===e.wifi&&"unnecessary"===e.food&&"productive"===e.feeling&&"desired"===e.seating){let e=document.querySelector('link[title="sir walter"]');d(e)}else if("a necessity"===e.wifi&&"desired"===e.food&&"reflective"===e.feeling&&"desired"===e.seating){let e=document.querySelector('link[title="sommeliers roast"]');d(e)}else if("not important"===e.wifi&&"unnecessary"===e.food&&"reflective"===e.feeling&&"unrequired"===e.seating){let e=document.querySelector('link[title="forty two"]');d(e)}else{let e=document.querySelector('link[title="no match"]'),t="Raleigh";d(e,t),u(t)}}});     var _link7 = document.querySelector('link[title="market street"]');
      setStoreTemplate(_link7);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var _link8 = document.querySelector('link[title="perennial"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var _link9 = document.querySelector('link[title="gray squirrel"]');
      } else if (decidingNum > 0.66) {
        var _link10 = document.querySelector('link[title="coco bean"]');
      }
      setStoreTemplate(link);
    } else {
      var _link11 = document.querySelector('link[title="no match"]');
      var cityName = 'Chapel Hill';
      setStoreTemplate(_link11, cityName);
      setYelpButton(cityName);
    }
  };

  var findDurhamCoffee = function findDurhamCoffee() {
    if (userAnswers.wifi === 'not important' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var _link12 = document.querySelector('link[title="baby scratch"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var _link13 = document.querySelector('link[title="dulce"]');
      } else if (decidingNum > 0.66) {
        var _link14 = document.querySelector('link[title="parker and otis"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var _link15 = document.querySelector('link[title="cocoa cinnamon"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var _link16 = document.querySelector('link[title="bean traders"]');
      } else if (decidingNum > 0.66) {
        var _link17 = document.querySelector('link[title="triangle"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'unrequired') {
      var _link18 = document.querySelector('link[title="kaffeinate"]');
      setStoreTemplate(_link18);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'unrequired') {
      var _link19 = document.querySelector('link[title="joe van gogh durham"]');
      setStoreTemplate(_link19);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'unrequired') {
      var _link20 = document.querySelector('link[title="saladelia"]');
      setStoreTemplate(_link20);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'unrequired') {
      var _link21 = document.querySelector('link[title="pine cone"]');
      setStoreTemplate(_link21);
    } else {
      var _link22 = document.querySelector('link[title="no match"]');
      var cityName = 'Durham';
      setStoreTemplate(_link22, cityName);
      setYelpButton(cityName);
    }
  };

  var findRaleighCoffee = function findRaleighCoffee() {
    if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var _link23 = document.querySelector('link[title="brew"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var _link24 = document.querySelector('link[title="sola"]');
      } else if (decidingNum > 0.66) {
        var _link25 = document.querySelector('link[title="morning times"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      decidingNum = produceRandomNumber();
      if (decidingNum <= 0.33) {
        var _link26 = document.querySelector('link[title="new world"]');
      } else if (decidingNum > 0.33 && decidingNum <= 0.66) {
        var _link27 = document.querySelector('link[title="jubala"]');
      } else if (decidingNum > 0.66) {
        var _link28 = document.querySelector('link[title="benelux"]');
      }
      setStoreTemplate(link);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'upbeat' && userAnswers.seating === 'desired') {
      var _link29 = document.querySelector('link[title="liquid state"]');
      setStoreTemplate(_link29);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'productive' && userAnswers.seating === 'desired') {
      var _link30 = document.querySelector('link[title="sir walter"]');
      setStoreTemplate(_link30);
    } else if (userAnswers.wifi === 'a necessity' && userAnswers.food === 'desired' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'desired') {
      var _link31 = document.querySelector('link[title="sommeliers roast"]');
      setStoreTemplate(_link31);
    } else if (userAnswers.wifi === 'not important' && userAnswers.food === 'unnecessary' && userAnswers.feeling === 'reflective' && userAnswers.seating === 'unrequired') {
      var _link32 = document.querySelector('link[title="forty two"]');
      setStoreTemplate(_link32);
    } else {
      var _link33 = document.querySelector('link[title="no match"]');
      var cityName = 'Raleigh';
      setStoreTemplate(_link33, cityName);
      setYelpButton(cityName);
    }
  };
});