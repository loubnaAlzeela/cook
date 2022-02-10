$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 400) { 
        $('.navbar').addClass('solid');
       
       } else {
        $('.navbar').removeClass('solid');
       
    }
    if($(this).scrollTop() > 80) { 
      $('.home-inner').addClass('home-inner_scroll');
     
     } else {
      $('.home-inner').removeClass('home-inner_scroll');
     
  }

  });

});


function opendetails(){
window.open('details.html','_self');
}



