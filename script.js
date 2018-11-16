$(function() {

      $('#fullpage').fullpage({
      	animateAnchor:true,
      	anchors: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],
        menu: '#myMenu',
        controlArrows: false,//是否通过箭头来控制slide
        scrollingSpeed:1000,//重新设置滚动速度
        slidesNavigation:true,
        afterLoad: function(anchorLink,index){
          
           if(index==2){
             $(".section02").find("h3 font").animate({
                 marginLeft:'0px',
                 opacity:'1'
              },1000);
             $(".section02").find("span").animate({
                opacity:'1'
              },1500);
              $(".section02").find("u").animate({
                 opacity:'1'
              },1500);
             $(".section02").find("li").animate({
                paddingTop:'20px',opacity:'1'
              },1500);
              $(".section02").find("p").animate({
                 opacity:'1'
              },1500);
              $(".section02").find("strong").delay(500).animate({
                 fontSize:'50px',opacity:'1'
              },700);
              $(".section02").find(".about-click a").delay(1000).animate({
                 marginTop:'30px',opacity:'1'
              },1000);
              $(".section02").find(".about-right").animate({
                 opacity:'1'
              },1000);
            }

            if(index==3){
              $(".section03").find(".design h3").animate({
                 marginLeft:'0px',
                 opacity:'1'
              },1000);
              $(".section03").find(".design p").delay(300).animate({
                 marginLeft:'0px',
                 opacity:'1'
              },1000);
              $(".section03").find(".about-click a").delay(500).animate({
                 marginTop:'30px',opacity:'1'
              },1000);
              $(".section03").find(".design-pic ul").delay(700).animate({
                 marginTop:'0px',opacity:'1'
              },1000);
            }

            if (index==4) {
              $(".section04").find(".picture-title h3").animate({
                 marginTop:'0px',opacity:'1'
              },1000);
              $(".section04").find(".picture-nav").delay(300).animate({
                 opacity:'1',width:'100%'
              },1000);
              $(".section04").find(".picture-cut ul li").delay(500).animate({
                 opacity:'1'
              },2000);
            }
        },
        onLeave: function(index, direction){

            if(index==2){
              $(".section02").find("h3 font").delay(1000).animate({
                 marginLeft:'-100px',
                 opacity:'0'
               },100);
              $(".section02").find("span").delay(1000).animate({
                 opacity:'0'
              },100);
              $(".section02").find("span").delay(1000).animate({
                 opacity:'0'
              },100);
              $(".section02").find("li").delay(1000).animate({
                 paddingTop:'50px',opacity:'0'
              },100);
              $(".section02").find("p").delay(1000).animate({
                 opacity:'0'
              },100);
              $(".section02").find("strong").delay(1000).animate({
                 fontSize:'0px',opacity:'0'
              },100);
              $(".section02").find(".about-click a").delay(1000).animate({
                 marginTop:'0',opacity:'0'
              },100);
              $(".section02").find(".about-right").delay(1000).animate({
                opacity:'0'
              },100);
            }
            if(index==3){
              $(".section03").find(".design h3").delay(1000).animate({
                 marginLeft:'-20px',
                 opacity:'0'
              },100);
              $(".section03").find(".design p").delay(1000).animate({
                 marginLeft:'-20px',
                 opacity:'0'
              },100);
              $(".section03").find(".about-click a").delay(1000).animate({
                 marginTop:'0',opacity:'0'
              },100);
              $(".section03").find(".design-pic ul").delay(1000).animate({
                 marginTop:'-50px',opacity:'0'
              },100);
            }

            if (index==4) {
              $(".section04").find(".picture-title h3").delay(1000).animate({
                 marginTop:'-50px',opacity:'0'
              },100);
              $(".section04").find(".picture-nav").delay(1000).animate({
                 opacity:'0',width:'70%'
              },100);
              $(".section04").find(".picture-cut ul li").delay(1000).animate({
                 opacity:'0'
              },100);
            }
        },
        afterSlideLoad:function(anchorLink,index,slideIndex){
            if(index==1){
              if(slideIndex==0){
                 $(".Pslide01").find(".banner-bin-o p:nth-child(2) span").animate({
                     fontSize:'180px',opacity:'1'
                 },500);
                 $(".Pslide01").find(".banner-bin-o p:nth-child(1)").delay(300).animate({
                     marginRight:'0px',opacity:'1'
                 },700);
                 $(".Pslide01").find(".banner-bin-o p:nth-child(3) span").delay(300).animate({
                     marginTop:'0px',opacity:'1'
                 },1000);
                 $(".Pslide01").find(".banner-bin-o p:nth-child(4)").delay(700).animate({
                     marginRight:'0px',opacity:'1'
                 },700);
                 $(".Pslide01").find(".banner-bin-p p").delay(500).animate({
                     marginLeft:'20px',opacity:'1'
                 },700);
              }
              if(slideIndex==1){
                $(".Pslide02").find(".banner-bin-h span:first-child").animate({
                     marginLeft:'0px',marginRight:'0px',opacity:'1'
                 },700);
                $(".Pslide02").find(".banner-bin-h span:last-child").animate({
                     marginLeft:'0px',opacity:'1'
                 },700);
                $(".Pslide02").find(".banner-bin-i i").animate({
                     opacity:'1'
                 },700);
                $(".Pslide02").find(".banner-bin-i p").delay(500).animate({
                     opacity:'.9'
                 },700);
                $(".Pslide02").find(".banner-bin-j p").delay(500).animate({
                     opacity:'1',marginTop:'30px'
                 },700);
              }
              if(slideIndex==2){
                $(".Pslide03").find(".banner-bin-a span:nth-child(1)").animate({
                     fontSize: '130px',opacity:'1'
                 },700);
                $(".Pslide03").find(".banner-bin-a span:nth-child(2)").delay(300).animate({
                     fontSize: '130px',opacity:'1'
                 },700);
                $(".Pslide03").find(".banner-bin-a span:nth-child(3)").delay(600).animate({
                     fontSize: '130px',opacity:'1'
                 },700);
                $(".Pslide03").find(".banner-bin-a span:nth-child(4)").delay(900).animate({
                     fontSize: '130px',opacity:'1'
                 },700);
                $(".Pslide03").find(".banner-bin-b span:nth-child(1)").delay(100).animate({
                     marginLeft:'0px',opacity:'1'
                 },500);
                $(".Pslide03").find(".banner-bin-b span:nth-child(2)").delay(200).animate({
                     marginLeft:'0px',opacity:'1'
                 },500);
                $(".Pslide03").find(".banner-bin-b span:nth-child(3)").delay(100).animate({
                     marginLeft:'0px',opacity:'1'
                 },500);
                $(".Pslide03").find(".banner-bin-b span:nth-child(4)").delay(400).animate({
                     marginLeft:'0px',opacity:'1'
                 },500);
              }
            }
        },
        onSlideLeave:function(anchorLink,index,slideIndex){
            if(index==1){
              if(slideIndex==0){
                $(".Pslide01").find(".banner-bin-o p:nth-child(2) span").delay(1000).animate({
                     fontSize:'100px',opacity:'0'
                 },100);
                $(".Pslide01").find(".banner-bin-o p:nth-child(1)").delay(1000).animate({
                     marginRight:'50px',opacity:'0'
                 },100);
                $(".Pslide01").find(".banner-bin-o p:nth-child(3) span").delay(1000).animate({
                     marginTop:'50px',opacity:'0'
                 },100);
                $(".Pslide01").find(".banner-bin-o p:nth-child(4)").delay(1000).animate({
                     marginRight:'100px',opacity:'0'
                 },100);
                $(".Pslide01").find(".banner-bin-p p").delay(1000).animate({
                     marginLeft:'100px',opacity:'0'
                 },100);
              }
              if(slideIndex==1){
                $(".Pslide02").find(".banner-bin-h span:first-child").delay(1000).animate({
                     marginLeft:'-100px',marginRight:'100px',opacity:'0'
                 },100);
                $(".Pslide02").find(".banner-bin-h span:last-child").delay(1000).animate({
                     marginLeft:'200px',opacity:'0'
                 },100);
                $(".Pslide02").find(".banner-bin-i i").delay(1000).animate({
                     opacity:'0'
                 },100);
                $(".Pslide02").find(".banner-bin-i p").delay(1000).animate({
                    opacity:'0'
                 },100);
                $(".Pslide02").find(".banner-bin-j p").delay(1000).animate({
                     opacity:'0',marginTop:'100px'
                 },100);
              }
              if(slideIndex==2){
                 $(".Pslide03").find(".banner-bin-a span").delay(1000).animate({
                     fontSize: '0px',opacity:'0'
                 },100);
                 $(".Pslide03").find(".banner-bin-b span:nth-child(1)").delay(1000).animate({
                    opacity:'0',marginLeft:'100px'
                 },100);
                 $(".Pslide03").find(".banner-bin-b span:nth-child(2)").delay(1000).animate({
                    opacity:'0',marginLeft:'100px'
                 },100);
                 $(".Pslide03").find(".banner-bin-b span:nth-child(3)").delay(1000).animate({
                    opacity:'0',marginLeft:'200px'
                 },100);
                 $(".Pslide03").find(".banner-bin-b span:nth-child(4)").delay(1000).animate({
                    opacity:'0',marginLeft:'30px'
                 },100);
              }
            }
        },
      });
      setInterval(function(){
        $.fn.fullpage.moveSlideRight();
        }, 3000);
});