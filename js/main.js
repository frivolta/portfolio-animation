
//Declaring Functions

//Section Slide Movement
function slideRight(){
    
    $.fn.fullpage.setAllowScrolling(false);

    TweenMax.to(".portfolioTitle", .8, {
        xPercent:-100,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });     
    TweenMax.to(".portfolioImage", .8, {
        xPercent:-100,
        filter: "grayscale(0%)",
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });       
    TweenMax.to(".portfolioImageShowMore", .8, {
        xPercent:-100,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });   
      
    TweenMax.to(".portfolioDescription", .8, {
                xPercent:-100,
                rotation:0.002,
                force3D:true,
                ease: Power2.easeInOut
    }); 
    TweenMax.to(".js--slideFade", .8, {
        xPercent:-150,
        rotation:0.002,
        opacity:0,
        force3D:true,
        ease: Power2.easeInOut
    }); 
    //cambio icona
    TweenMax.to(".jsMoreIcon", .3, {
        
        opacity:0,
        ease: Power2.easeInOut
    });
    TweenMax.to(".jsCloseIcon", .3, {
        
        opacity:1,
        ease: Power2.easeInOut
    });
    $('.portfolioImage').removeClass('secondSlideActive').addClass('secondSlideActive');
    
    
    setTimeout(function() {
        afterSlideFinishedAnimation();
        $('.portfolioDescription').fadeIn();
    }, 800);
    
    $(".menuWrap").fadeOut();
    $(".menuWrapBg").fadeOut();
    
}
function slideLeft(){
    $('.portfolioDescription').fadeOut();
    $.fn.fullpage.setAllowScrolling(true);
    TweenMax.to(".portfolioTitle", .8, {
        xPercent:0,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });     
    TweenMax.to(".portfolioImage", .8, {
        xPercent:0,
        filter: "grayscale(100%)",
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });     
    TweenMax.to(".portfolioImageShowMore", .8, {
        xPercent:0,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });     
    TweenMax.to(".portfolioDescription", .8, {
                xPercent:0,
                rotation:0.002,
                force3D:true,
                ease: Power2.easeInOut
    }); 
    TweenMax.to(".js--slideFade", .8, {
        xPercent:0,
        rotation:0.002,
        opacity:1,
        force3D:true,
        ease: Power2.easeInOut
    }); 
    TweenMax.to(".jsMoreIcon", .3, {
        
        opacity:0,
        ease: Power2.easeInOut
    });
    TweenMax.to(".jsCloseIcon", .3, {
        
        opacity:1,
        ease: Power2.easeInOut
    });
    
    $('.portfolioImage').removeClass('secondSlideActive').addClass('secondSlideActive');
    
    //cambio icona
    TweenMax.to(".jsMoreIcon", .3, {
        
        opacity:1,
        ease: Power2.easeInOut
    });
    TweenMax.to(".jsCloseIcon", .3, {
        
        opacity:0,
        ease: Power2.easeInOut
    });
    
    
   //Hiding elements to smooth transition
    
    afterSlideReverseAnimation();
    $('.portfolioImage').removeClass('secondSlideActive')
    
    $(".menuWrap").fadeIn();
    $(".menuWrapBg").fadeIn();
    
}

function slideChiSono(){
    //$('.portfolioDescription').fadeOut();
    $.fn.fullpage.setAllowScrolling(false);
    $('.menuWrapBg').fadeOut();
    $('.menuWrap').fadeOut();
    TweenMax.to(".portfolioTitle", .8, {
        xPercent:100,
        opacity:0,
        display:'none',
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".portfolioImage", .8, {
        xPercent:100,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".portfolioImageShowMore", .8, {
        xPercent:100,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".chisono", .8, {
        xPercent:100,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".jsCloseChiSono", .8, {
        left:"50%",
        display:'block',
        opacity:1,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".menuWrap", .8, {
        left:"100%",
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".menuWrapBg", .8, {
        left:"100%",
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });






}
function slideChiSonoOut(){
    //$('.portfolioDescription').fadeOut();
    $.fn.fullpage.setAllowScrolling(true);
    $('.menuWrapBg').fadeIn();
    $('.menuWrap').fadeIn();

    TweenMax.to(".portfolioTitle", .8, {
        xPercent:0,
        opacity:1,
        display:'block',
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".portfolioImage", .8, {
        xPercent:0,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".portfolioImageShowMore", .8, {
        xPercent:0,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".chisono", .8, {
        xPercent:0,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".jsCloseChiSono", .8, {
        left:"0%",
        display:'none',
        opacity:0,
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".menuWrap", .8, {
        left:"50%",
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });
    TweenMax.to(".menuWrapBg", .8, {
        left:"50%",
        rotation:0.002,
        force3D:true,
        ease: Power2.easeInOut
    });





}

//Section headers fade in/out
function elementFadeOut(){
    TweenMax.to(".js--slideFade", .2, {
        
        opacity:.2,
        ease: Power2.easeInOut
    }); 
}
function elementFadeOutZero(){
    TweenMax.to(".js--slideFade", .2, {
        
        opacity:0,
        ease: Power2.easeInOut
    }); 
}
function elementFadeIn(){
    TweenMax.to(".js--slideFade", .2, {
        
        opacity:1,
        ease: Power2.easeInOut
    }); 
}

//moving border
function elementHover(){
    $(this).children('.borderTop').removeClass('animateHover').removeClass('animateOut').addClass('animateHover');
    
    TweenMax.to(".animateHover", .8, {
        width:"100%",
        ease: Power2.easeInOut
    }); 
}
function elementOut(){
     $(this).children('.borderTop').removeClass('animateHover').removeClass('animateOut').addClass('animateOut');
    TweenMax.to(".animateOut", 1, {
        width:"10px",
        ease: Power2.easeInOut
    }); 
}
function elementHoverRight(){
    $(this).children('.borderTopAltBorder').removeClass('animateHover').removeClass('animateOut').addClass('animateHover');

    TweenMax.to(".animateHover", .8, {
        width:"100%",
        ease: Power2.easeInOut
    });
}
function elementOutRight(){
     $(this).children('.borderTopAltBorder').removeClass('animateHover').removeClass('animateOut').addClass('animateOut');
    TweenMax.to(".animateOut", 1, {
        width:"10px",
        ease: Power2.easeInOut
    });
}


//Animating images after load
function afterSlideFinishedAnimation(){
    TweenMax.to(".afterSlideFinished", .3, {
        
        opacity:1,
        ease: Power2.easeInOut
    });
    
}
//Animating images before moving
function afterSlideReverseAnimation(){
    TweenMax.to(".afterSlideFinished", .1, {
        
        opacity:0,
        ease: Power2.easeInOut
    });
    
}

function iconHover(){
    TweenMax.to(this, .3, {       
        scale:1.3,
        ease: Power2.easeInOut
    });
}
function iconOut(){
    TweenMax.to(this, .3, {    
        scale:1,
        ease: Power2.easeInOut
    });
}



//scroll Hint
function scrollHint(){
    TweenMax.to(".js--scrollHint", 2.3, {
        yPercent:300,
        force3D:true,
        ease: Power2.easeIn,
        repeat:-1,
    
    }); 
}

//Scroll menù
function menuPosition(pos){
    var currentPos = $(window).height()/8;
            var curr = currentPos * (pos-1) ;
            //$('.menuItem').height(curr);
            TweenMax.to(".menuWrap", 1, {
                height:curr,
                ease: Power2.easeInOut
    
    }); 
   
}




//Starting FUllpage
$(document).ready(function() {
    var isMobile = {
        Android: function() { return navigator.userAgent.match(/Android/i); },
        BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
        any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
    scrollHint();
    if (!isMobile.any()){$('#fullpage').fullpage({
        scrollingSpeed: 800,

        onLeave: function(index, nextIndex, direction){
            elementFadeOut();
            if (nextIndex==1||nextIndex==10){
                elementFadeOutZero();
            }
            menuPosition(nextIndex);
        },
        afterLoad: function(anchorLink, index){
            if (index != 1 && index!= 10){
                elementFadeIn();
            }


        },

        //REMOVE
        lazyLoading: true,
        anchors:['1', '2', '3','4','5','6','7','8','9','10'],



    });}
    if (isMobile.any()){
        $('#fullpage').fullpage({
            scrollingSpeed: 800,
            normalScrollElements:'.portfolioDescription, .chisonoWrapper',

            onLeave: function(index, nextIndex, direction){
                elementFadeOut();
                if (nextIndex==1||nextIndex==10){
                    elementFadeOutZero();
                }
                menuPosition(nextIndex);
            },
            afterLoad: function(anchorLink, index){
                if (index != 1 && index!= 10){
                    elementFadeIn();
                }


            },

            //REMOVE
            lazyLoading: true,
            anchors:['1', '2', '3','4','5','6','7','8','9','10'],



        });
    }

});



 
//Hover Handlers  
$(".animateBorderSelector").hover(elementHover,elementOut);
$(".animateBorderRightSelector").hover(elementHoverRight,elementOutRight);
$(".jsActionPortfolio").hover(iconHover,iconOut);
$(".jsCloseChiSono").hover(iconHover,iconOut);


//Scroll Element second slide

    $('.secondSlideActive').scroll(function () {
        $('portfolioDescription').scrollTop($(this).scrollTop());
    });
    

//More button
$(".jsMore").click(function() {
    if($(".jsMore").hasClass('rightSlide')){
        slideLeft();
        $(".jsMore").removeClass('rightSlide');
    }else{
        slideRight();
        $(".jsMore").addClass('rightSlide');
    }
    
    
});
$(".js--chisono").click(function() {
        slideChiSono();
        $(".aboutmeMobile").fadeOut();

});
$(".jsCloseChiSono").click(function() {
        slideChiSonoOut();
        $(".aboutmeMobile").fadeIn();

});






//Contact Form
$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});




//Particles
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#afafaf"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#cbcbcb",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
