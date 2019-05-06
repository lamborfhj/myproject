//注册框

(function(){
     var oRegister = document.getElementById('register');
       var oBlock = document.getElementById('block');
       var oClose = document.getElementById('close');
       var oA = document.getElementById("top").getElementsByTagName("a")[1];

      oA.onclick = function(){
       oRegister.style.display='block';
       oBlock.style.display='block';
   }



       oClose.onclick = function () {
       oRegister.style.display='none';
       oBlock.style.display='none';
   }


})();
       var oRegister = document.getElementById('register');
       var oBlock = document.getElementById('block');
       var oClose = document.getElementById('close');
      // var oA = document.getElementById("login_ul").getElementsByTagName("a")[0];
       var oA = document.getElementById("top").getElementsByTagName("a")[1];
      oA.onclick = function(){
       oRegister.style.display='block';
       oBlock.style.display='block';
   }



       oClose.onclick = function () {
       oRegister.style.display='none';
       oBlock.style.display='none';
   }




//搜索框按钮切换

;(function(){
    var aLi = $('.search ul li');
   // console.log(aLi);
    aLi.each(function(index){

         $(this).on('click',(function(){
            //console.log(index)
            $(this).addClass('active').siblings().removeClass('active')
         }))
    })
})()

//二级菜单栏切换
;(function(){
         $('.subnav').parent().each(function(index){
          //console.log(index);
            $(this).on('click',function(){
                index = $(this).index();
                $(this).addClass('current').siblings().removeClass('current');
                $(this).find('ul').css('display', 'block');
                $(this).siblings().find('ul').css('display', 'none');

//                 $('.menu')[0].offsetWidth-$(this).offset().left>$('.subnav')[index].offsetWidth?
//                 $('.subnav').css('left','$(this).offset().left+"px"'):$('.subnav').css('left','0');
                //console.log($('.menu')[0].offsetWidth)
                    //console.log($(this).offset().left)
            });



    })

})();
//二级搜索框切换

;(function(){

    var aLi = $('.subnav').parent();
    var oText1 = $('#text1');
    var oText2 = $('#text2');
   // console.log(oText);
    var arrText1 =[
             '女装市场',
             '女鞋市场',
             '女包市场',
             '男装市场',
             '男鞋市场',
             '男包市场',
             '内衣市场',
             '配件市场',
             '运动市场'
       ];
    var arrText2 = [
              '搜女装',
              '搜女鞋',
              '搜女包',
              '搜男装',
              '搜男鞋',
              '搜男包',
              '搜内衣',
              '搜配件',
              '搜运动'
    ];
   var  icur = 0;
    oText1.text(arrText1[icur]);
    oText2.val(arrText2[icur]);
    aLi.each(function(index){
          $(this).click(function(){
             icur=index;
            //console.log(icur)
             oText1.text(arrText1[icur]);
             oText2.val(arrText2[icur]);
            console.log(arrText2[icur])

         ($('#text1').eq(icur).text()=='')?$('#text1').text(arrText1[icur]):$('#text1').text('');

              ($('#text2').val()=='')?$('#text2').val(arrText2[icur]):$('#text2').val('');

          })
    });

})();


//picshow图片轮播

;(function(){
     // 图片切换效果

    // 找对象 设置初始值
    var oFade = $('.imglist');
    var aShowLi = $('.imgcircle li');
    var aBtnLi = $('.showbtn li');
    var tid = null;
    var iNow = 0;

    fade();
    function fade(){
       // 共用函数
       aShowLi.each(function(index){
           if(iNow!=index){
               aShowLi.eq(index).fadeOut().css('zIndex',1);
               aBtnLi.eq(index).removeClass('cur');
           }else{
               aShowLi.eq(index).fadeIn().css('zIndex',2);
               aBtnLi.eq(index).addClass('cur')
           }

       })

    }

    aBtnLi.click(function(){
           iNow=aBtnLi.index(this);
           fade();
    })

    autoPlay();

    function autoPlay(){
       tid =  setInterval(function(){
            iNow++;
            //if(iNow==arrText.length)iNow=0;
             //iNow %=arrText.length;
             iNow = iNow%5;
            fade()
        },2000)
    }

    oFade.hover(
        function(){
            clearInterval(tid)
        },
        function(){
            autoPlay();
        }
    )

})();



function checkTime( time ){
   var data = new Data(); // 获取现在时间
   var nowData = data.getTime();  //  转化成毫秒数
   var  time ;  //  结束的时间
   var t = time - nowData ;
   var HH, mm , ss = 0;
   var sta = "";
   if( HH == 24){
      HH = 0;
  }
   if( ++ss == 60){
      if( ++mm == 60 ){
         HH++;
        mm = 0;
       }
     ss = 0;
  }

// 11-17行的简写

if (++ss == 60) {
    if (++mm == 60) { HH++; mm = 0; }
    ss = 0;
}
 if( t > 0){
        HH = Math.floor(t/1000/60/60%24);
        mm = Math.floor(t/1000/60%60);
        ss = Math.floor(t/1000%60);
        str += HH < 10 ? "0" + HH : HH;
        str += ":";
        str += mm < 10 ? "0" + mm : mm;
        str += ":";
        str += ss < 10 ? "0" + ss : ss;
        $(".progress-time span").text(str);
    }
}

setInterval(function () { // 每隔一秒调用一次
    checkTime(time)
},1000);



//collection
var timeId=null;
    var oCollection = document.getElementById("collection");
    var posTop = oCollection.offsetTop;
    window.onscroll = function(){
               var scrollTop = window.pageYOffset  //用于FF    解决 找根元素的起始点不一致的情况；
                       || document.documentElement.scrollTop
                       || document.body.scrollTop
                       || 0;

        if(oCollection.offsetTop==posTop+scrollTop){
            clearTimeout(timeId);
        }
        else{
            timeId=setTimeout(function(){
/*
                var iSpeed=(scrollTop-oBox.offsetTop)/6;
             iSpeed>0?iSpeed=Math.ceil(iSpeed):iSpeed=Math.floor(iSpeed);
*/
            oCollection.style.top = posTop + scrollTop + 'px';//console.log(iSpeed);
        },300)
        }
        //console.log(scrollTop);
        //console.log(oBox.offsetTop);

    }
// //倒计时
;(function(){
            var intDiff = parseInt(1000000);
            function timer(intDiff){
                 window.setInterval(function(){
                var day = 0, hour = 0,minute = 0,second = 0;
                if(intDiff>0){
                    day = Math.floor(intDiff/(60*60*24));
                    hour = Math.floor(intDiff/(60*60))-(day*24);
                    minute = Math.floor(intDiff/60)-(day*24*60)-(hour*60);
                    second = Math.floor(intDiff)-(day*24*60*60)-(hour*60*60)-(minute*60);
                }
                if(minute<=9)minute ='0' + minute;
                if(second<=9)second ='0' +second;

                $('.hour').html('<span>'+hour+'</span>');
                $('.minute').html('<span>'+minute+'</span>');
                $('.second').html('<span>'+second+'</span>');
                intDiff--;
        },1000);
            }
    $(function(){
        timer(intDiff);
    });
}) ();


//图片鼠标移入移除
(function(){
    pht($('.weddingshow'),'mouseover');
    pht($('.dressshow'),'mouseover');
    pht($('.cheongsamshow'),'mouseover');
    function pht(oList,ev){
        var aLi =oList.children();
    aLi.each(function(index){
        $(this).on(ev,function(){
             var index = $(this).index();
        aLi.eq(index).siblings().find('.black').css('z-index',999);
        aLi.eq(index).find('ul').css('z-index',999);
        })

    })
  }
})();
    //鼠标移出
(function(){
    away($('.weddingshow'),'mouseout');
    away($('.dressshow'),'mouseout');
    away($('.cheongsamshow'),'mouseout');
    function away(oList,ev){
         var aLi = oList.children();
        //console.log(aLi)
       aLi.each(function(index){
          $(this).on(ev,function(){
             var index = $(this).index();
       aLi.eq(index).siblings().find('.black').css('z-index',-2);
       aLi.eq(index).find('.price').css('z-index',-2);
          })

   })
    }
})();

//price动画


;(function(){
    move($('.weddingshow'));
    move($('.dressshow'));
    move($('.cheongsamshow'));
    function move(aList) {
        var aLi = aList.children();
        //console.log(aLi);
        aLi.each(function(index){
            $(this).hover(function(){
                $(this).find('.price').css('display','block');
            },function(){
                $(this).find('.price').css('display','none');

            })
        })
    }
})();

