$(document).ready(function(){

  // navbar add active to links
  $('.links ul:first-of-type li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  }) 

  
  // switch Hide Show Navigation Links
  let menuLinks = $('.menu-links')
  $('#menu-btn').click(function(){
    // show navigation
    menuLinks.addClass('active');
  })
  $('#quite-btn').click(function(){
    // hide navigation
    menuLinks.removeClass('active')
  })
  

  // Show & Hide Hire Box
  let hireSection = $('.hire')
  $('#hire-btn').click(function() {
    hireSection.fadeIn(600)
  })
  $('#quite-btn-2').click(function() {
    hireSection.fadeOut(600)
  })


  // scroll to Top
  let scrollBtn = $('.scroll-top'),
      win = $(window);

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

