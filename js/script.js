"use strict";

const accordionItemHeaders = document.querySelectorAll(
	".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
	accordionItemHeader.addEventListener("click", (event) => {
	  // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
	  const currentlyActiveAccordionItemHeader = document.querySelector(
		".accordion-item-header.active"
	  );
	  if (
		currentlyActiveAccordionItemHeader &&
		currentlyActiveAccordionItemHeader !== accordionItemHeader
	  ) {
		currentlyActiveAccordionItemHeader.classList.toggle("active");
		currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
	  }
	  accordionItemHeader.classList.toggle("active");
	  const accordionItemBody = accordionItemHeader.nextElementSibling;
	  if (accordionItemHeader.classList.contains("active")) {
		accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
	  } else {
		accordionItemBody.style.maxHeight = 0;
	  }
	});
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var logo = $(".site_logo")
    if(scroll>=50){
      logo.addClass('word').removeClass('logo')
    }else{
      if(logo.hasClass('word')){
        logo.addClass('logo').removeClass('word')
      }
    }
  })



$(function () {
  
    var controller = new ScrollMagic.Controller();

    var tween1 = new TimelineMax()
        .to("#slideContainer", 1, {x: "-15%"})
        .to("#slideContainer", 1, {x: "-20%"})
        .to("#slideContainer", 1, {x: "-25%"})
        .to("#slideContainer", 1, {x: "-30%"})
        .to("#slideContainer", 1, {x: "-35%"})
        .to("#slideContainer", 1, {x: "-45%"})
        .to("#slideContainer", 1, {x: "-50%"})
        .to("#slideContainer", 1, {x: "-55%"})
      .to("#slideContainer", 1, {x: "-60%"})
      .to("#slideContainer", 1, {x: "-65%"})
      .to("#slideContainer", 1, {x: "-70%"})
      .to("#slideContainer", 1, {x: "-75%"})
      .to("#slideContainer", 1, {x: "-80%"})
      .to("#slideContainer", 1, {x: "-90%"})
  .to(".last-scene", 1, {y: "-100%"})

    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: 0,
            duration: "800%"
        })
        .setPin("#pinContainer")
        .setTween(tween1)
  .addIndicators() 
        .addTo(controller);


var tween3 = new TimelineMax ()
  .add([
    TweenMax.fromTo("#parallaxThree .layer1", 1, {
      opacity: 0.4,bottom: "-50%"
    }, {
      opacity: 1,bottom: "40%"
    }),
    TweenMax.fromTo("#parallaxThree .layer4", 1, {
      opacity: 0.4,bottom: "-50%"
    }, {
      opacity: 1,bottom: "40%"
    })
  ]);

new ScrollMagic.Scene({
  triggerElement: "#pinContainer", 
  duration: "200%", 
  offset: "200%"
}).setTween(tween3)
.addTo(controller);


var tween4 = new TimelineMax ()
  .add([
    TweenMax.fromTo("#parallaxFours .layer5", 1, {
      opacity: 0,top:" 60%"
    }, {
      opacity: 1,top: "-10%"
    }),
    TweenMax.fromTo("#parallaxFours .layer7", 1, {
      opacity: 0,top:" 65%"
    }, {
      opacity: 1,top: "-5%"
    }),
    TweenMax.fromTo("#parallaxFours .layer8", 1, {
      opacity: 0,top:" 70%"
    }, {
      opacity: 1,top: "-0%"
    })
  ]);

new ScrollMagic.Scene({
  triggerElement: "#pinContainer", 
  duration: "300%", 
  offset: "300%"
})
.setTween(tween4)
.addTo(controller);


var tween5 = new TimelineMax ()
  .add([
    TweenMax.fromTo("#parallaxFive .jam", 1, {
      opacity: 0,top: "-70%"
    }, {
      opacity: 1,top: "10%"
    })
  ]);

// build scene for tween3
new ScrollMagic.Scene({
  triggerElement: "#pinContainer", 
  duration: "100%", 
  offset: "100%"
}).setTween(tween5)
.addTo(controller);



//tooltips handler
tippy('.custom-tooltip', {
  trigger: 'click',
  interactive: true,
  animation: 'shift-away',
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  }
});

//lightbox handler
$(document).on('click', '[data-lightbox]', lity);

});

const sr = ScrollReveal({
    distance: '200px',
    duration: 1000,
    delay: 500,
    interval : 400,
    reset: true 
})


sr.reveal(`.banner-anime`,{delay: 400 ,origin: 'left',distance: '100px'})
sr.reveal(`.anime-text`,{delay: 500, origin: 'right',distance: '200px'})
// sr.reveal(`.anime-text`,{origin: 'bottom', interval: 100})


