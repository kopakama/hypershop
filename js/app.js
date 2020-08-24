$(function() {
  $("#phone").mask("+7 (000) 000-00-00", {
    placeholder: "+7(___)___-__-__",
    clearIfNotMatch: true
  });
});

$(function() {
  $("#phone2").mask("+7 (000) 000-00-00", {
    placeholder: "+7(___)___-__-__",
    clearIfNotMatch: true
  });
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

  