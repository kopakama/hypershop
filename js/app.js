$(function() {
    $("#phone").mask("+7 (000) 000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
  });

  $(document).ready(function(){
    $('.gallery').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true
    });
  });