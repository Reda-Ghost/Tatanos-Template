$(document).ready(function(){
  // add Active to Tab
  $('.features-1 .tabs .tab').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })

  // navbar add active to links
  $('.navigation .navbar .links li a').click(function(event){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
  }) 

  // switch icon of menu button
  $('.menu-btn').click(function(){
    $(this).children().toggleClass('fa-bars fa-times');

    // hide & show mobile navigation
    $('.mobile-nav').toggleClass('active');
    $('body').toggleClass('active');
  })

  $('.mobile-nav .mobile-links li a').click(function(event){
    event.preventDefault()
  })
  
  

  // scroll to Top
  var scrollBtn = $('.scroll-top');
  var win = $(window);

  scrollBtn.click(function(){
    win.scrollTop(0)
  })
  win.scroll(function(){
    if(win.scrollTop() > 600 ) {
      scrollBtn.show();
    }else {
      scrollBtn.hide();
    } 
  })
  scrollBtn.hide();
  



  $('.contact-message').css('height' , $('.contact-inputs').height());
});

