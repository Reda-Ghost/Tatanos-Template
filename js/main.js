$(document).ready(function(){

  // navbar add active to links
  $('.links ul:first-of-type li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  }) 

  
  // switch Hide Show Navigation Links
  $('#menu-btn').click(function(){

    // show navigation
    $('.links').addClass('active');
    $('body .menu-overlay').addClass('active');
  })
  $('#quite-btn').click(function(){

    // hide navigation
    $('.links').removeClass('active');
    $('body .menu-overlay').removeClass('active');
  })
  

  // Show & Hide Hire Box
  $('#hire-btn').click(function() {
    $('.hire').fadeIn(600)
  })
  $('#quite-btn-2').click(function() {
    $('.hire').fadeOut(600)
  })


  // scroll to Top
  var scrollBtn = $('.scroll-top');
  var win = $(window);

  scrollBtn.click(function(){
    win.scrollTop(0)
  })
  win.scroll(function(){
    if(win.scrollTop() > 600 ) {
      scrollBtn.fadeIn(600);
    }else {
      scrollBtn.fadeOut(600);
    } 
  })
});

