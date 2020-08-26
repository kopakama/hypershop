$(function() {

  var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(this).scrollTop(),
        btn_photo = $("#btn_photo"),
        btn_video = $("#btn_video"),
        gallery_photo = $("#gallery_photo"),
        gallery_video = $("#gallery_video");

  //phone mask
  $("#phone").mask("+7 (000) 000-00-00", {
    placeholder: "+7(___)___-__-__",
    clearIfNotMatch: true
  });


  $("#phone2").mask("+7 (000) 000-00-00", {
    placeholder: "+7(___)___-__-__",
    clearIfNotMatch: true
  });


 /* Nav toggle */
 $("#nav_toggle").on("click", function(event){
  event.preventDefault();
  
  $("#nav_toggle").toggleClass("active");
  $("#nav").toggleClass("active");
 });


/* Fixed Header  */
checkScroll(scrollOffset);

$(window).on("scroll", function()
{
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset)
{
    if(scrollOffset >= introH - 70) 
    {
        header.addClass("fixed");
    } 
    else 
    {
        header.removeClass("fixed");
    }
}

/* Smooth Scroll */
$("[data-scroll]").on("click", function(event){
  event.preventDefault();

  var $this = $(this)
      blockId = $this.data('scroll');
      blockOffset = $(blockId).offset().top;

  $("#nav a").removeClass("active");

  $("#nav").removeClass("active");
  $("#nav_toggle").removeClass("active");

 $("html, body").animate({
      scrollTop: blockOffset - 168

 }, 500);

});

//reviews switch
$("#btn_photo").on("click", function(event){
  event.preventDefault();

  if(gallery_video.hasClass("active"))
  {
    btn_photo.removeClass("disactive");
    btn_video.addClass("disactive");

    gallery_video.removeClass("active");
    gallery_photo.addClass("active");
  }
});

$("#btn_video").on("click", function(event){
  event.preventDefault();

  if(gallery_photo.hasClass("active"))
  {
    btn_video.removeClass("disactive");
    btn_photo.addClass("disactive");

    gallery_photo.removeClass("active");
    gallery_video.addClass("active");
  }
});


//slider

$('.gallery--photo').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1135,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        //autoplay: true
      }
    },
    {
      breakpoint: 856,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        //autoplay: true
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
        //autoplay: true
      }
    },

  ]
});


$('.gallery--video').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 856,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true
      }
    },
  ]
});

$('.easy-cards').slick({
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 1041,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        //autoplay: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        //autoplay: true
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true
      }
    },
  ]
});


/* Collapse */
$("[data-collapse]").on("click", function(event){
  event.preventDefault();

  var $this = $(this)
      blockId = $this.data('collapse');

  
  $(blockId).slideToggle(100, function(){
    $this.toggleClass("active");
  });
});

$("#video_btn").on("click", function(event){
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
             
                $('#modal_form') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;    
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                 
                document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                     
    });
     
     
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('.modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
             
            $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            ); 
             
            document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
         
    });
});

});
  