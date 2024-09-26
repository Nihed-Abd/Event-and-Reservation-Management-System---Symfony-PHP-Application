// card js start
/*$(document).ready(function() {
    $('#my-buttonreload').click(function() {
      location.reload();
    });
  });*/
  $('#my-buttonreload').click(function() {
    $('#tableau1').load(location.href + ' #tableau1');
  });

$(document).ready(function(){
    // card js start
    $(".card-header-right .reload-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').addClass("card-load");
        $this.parents('.card').append('<div class="card-loader"><i class="fa fa-spinner rotate-refresh"></div>');
        setTimeout(function() {
            $this.parents('.card').children(".card-loader").remove();
            $this.parents('.card').removeClass("card-load");
        }, 3000);
    });



    $(".card-header-right .card-option .open-card-option").on('click', function() {
        var $this = $(this);
        if ($this.hasClass('fa-times')) {
            $this.parents('.card-option').animate({
                'width': '30px',
            });
            $(this).removeClass("fa-times").fadeIn('slow');
            $(this).addClass("fa-wrench").fadeIn('slow');
        } else {
            $this.parents('.card-option').animate({
                'width': '140px',
            });
            $(this).addClass("fa-times").fadeIn('slow');
            $(this).removeClass("fa-wrench").fadeIn('slow');
        }
    });
    // -
    $(".card-header-right .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        $(this).toggleClass("fa-minus").fadeIn('slow');
        $(this).toggleClass("fa-plus").fadeIn('slow');
    });
    $(".card-header-right .full-card").on('click', function() {
        var $this = $(this);
        var $card = $this.parents('.card');
        $card.toggleClass("full-card");
        $this.toggleClass("fa-window-restore");
    });

    $(".card-header-right .icofont-spinner-alt-5").on('mouseenter mouseleave', function() {
        $(this).toggleClass("rotate-refresh").fadeIn('slow');
    });

});