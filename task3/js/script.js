function fixedTopFunction() {
  var windowTop = $(window).scrollTop();      //Get pixel value of window top
  var divTop = $('#fixed-anchor').offset().top;   // Get pixel value of div of fixed-anchor div
  if (windowTop > divTop)     //compare whether user sccrolled down the fixed div
  {
      $('#fixed-div').addClass('fixed');      // if yes, then add class fixed
      $('#fixed-anchor').height($('#fixed-div').outerHeight());  // then set height for fixed-anchor
  }
  else
  {
      $('#fixed-div').removeClass('fixed');   //else remove the class fixed
      $('#fixed-anchor').height(0);      //set the height back to 0.
  }
}

$(function() {
  $(window).scroll(fixedTopFunction);
});
