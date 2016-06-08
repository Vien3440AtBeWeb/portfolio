$(window).scroll(function(e){  /****Fonction ecoute***/
  var scrollTop = $(this).scrollTop();
    if($(window).scrollTop() > 10){ /****Nombre de pixcel pour condition ok***/
      console.log(scrollTop)
          $('.navbar').addClass("opaque");
  }
  else{$('.navbar').removeClass("opaque");}

  $('.nav-item').addClass('animated  jello'); /***Animation au passage***/
  if($(window).scrollTop() >100){
      $('.listeLoisir').addClass('animated fadeInLeftBig');
  }

})
