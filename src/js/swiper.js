
import Swiper from 'swiper/bundle'; //در ورژن جدید سوئیپر جی اس سوئیپر به این صورت ایمپورت میشود




function swiper_story () {
      var swiper = new Swiper(".mystory", {
      slidesPerView:12.5,
      spaceBetween: 0,
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  }

  function swiper_slider(){
       var swiper = new Swiper(".myslider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  function swiper_incredible(){

     var swiper = new Swiper(".myincredible", {
        slidesPerView: 8.2,
        spaceBetween: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          reachEnd: function () { // ایونت خود سوئیپر است وهر وقت رسیدیم به آخرین اسلابد عمل میکند
      
            document.querySelector(".incredible-center").classList.add("pl-5")
        },
        fromEdge: function () { //ایونت خود سوئیپر است و هر وقت از آخرین اسلاید برگشتیم عمل میکند
  
          document.querySelector(".incredible-center").classList.remove("pl-5")
       }
     }
  });
 }

 function swiper_favorite(){
  var swiper = new Swiper(".myfavorite", {
        slidesPerView: 9.5,
        spaceBetween: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 }


 function swiper_best(){
    var swiper = new Swiper(".mybest", {
        slidesPerView: 4,
        spaceBetween: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

 }
 
  export default{swiper_story,swiper_slider,swiper_incredible,swiper_favorite,swiper_best}