$(function() {
    ////////////////////////////////variables//constant variables
  
    var winHeight = $(window).height(),
      eleOffsetTop = $(".counter").offset().top,
      eleTop = eleOffsetTop - winHeight,
      current = 0;
  
    $(window).on("scroll", function() {
      var scrollTop = $(window).scrollTop();
  
      if (current == 0 && scrollTop >= eleTop) {
        
  
          $('.counter div').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
        
        //this inside the step callback isn't the element but the object passed to animate
      }
  
    });  
    
    
  
  });
          
      
      }
   
    });
  });
  