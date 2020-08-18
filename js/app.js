$(function() {
    $("#phone").mask("+7 (000) 000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
  });

  $(document).ready(function(){
    $('.gallery--photo').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true
    });
  });

  $(document).ready(function(){
    $('.gallery--video').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      dots: true
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
  });

  