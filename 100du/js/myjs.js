/**
 * Created by fenghangjun
 */
;(function(){
    var aLi = $('.searchmenu li');
    var oText = $('#text');
    //console.log(oText);
    var arrText =[
             '例如:今天有什么好吃的',
             '例如:你在哪里啊',
             '例如:搜搜有啥券',
             '例如:大家都推荐了哪些好吃的',
             '例如:看看大家拍的美食'
       ];
    var  icur = 0;
    oText.val(arrText[icur]);
    oText.css('color','#ea7a7a');
    aLi.each(function(index){
          $(this).click(function(){
             icur=index;
             oText.val(arrText[icur]);
             // console.log(oText.val())
             $(this).attr('class','active').siblings().removeClass('active')
          })
    });
    oText.focus(function(){
        if($(this).val()==arrText[icur]){
            $(this).val('');
        }
    });
    oText.blur(function(){
        if($(this).val()==''){
            $(this).val(arrText[icur])
        }
    })
})()
//文字轮播
//function autoScroll(obj){
//    $(obj).find('ul').animate({
//        marginTop: '-72px'
//    },5000,function(){
//        $(this).css({marginTop : "0px"});
//        var UL = $(obj).find('ul');
//        var li  =$("ul").children().first().clone();
//        $("ul li:last").after(li);
//        $("ul li:first").remove();
//
//    })
//}
//
//
//$(function(){
//
//    setInterval('autoScroll("#move")',1000);
//    console.log(666);
//
//
//})
;(function(){
    $(document).ready(function(){
     $(".move").Scroll({line:1,speed:500,timer:3000,up:"prev",down:"next"});
});

})()


//图片轮播
;(function(){
     // 图片切换效果
    // 找对象 设置初始值
    var oFade = $('.recommend');
    var aShowLi = $('.picshow li');
    var aBtnLi = $('.picbtn li');
    var oP = oFade.find('p');
    var arrText = ['爸爸，你去哪里了?',"人是要吃饭才能写代码的","美女是修要修行的.."];
    var tid = null;
    var iNow = 0;
    fade();
    function fade(){
       // 共用函数
       aShowLi.each(function(index){
           if(iNow!=index){
               aShowLi.eq(index).fadeOut().css('zIndex',1);
               aBtnLi.eq(index).removeClass('curbtn');
           }else{
               aShowLi.eq(index).fadeIn().css('zIndex',2);
               aBtnLi.eq(index).addClass('curbtn')
           }
           oP.text(arrText[iNow]);
       })

    }
    aBtnLi.click(function(){
           iNow=aBtnLi.index(this);
           fade();
    });
    autoPlay();
    function autoPlay(){
       tid =  setInterval(function(){
            iNow++;
            //if(iNow==arrText.length)iNow=0;
             //iNow %=arrText.length;
             iNow = iNow%3;
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

})()
;(function(){
    // tab切换
     tab($('.tabNav1'),$('.hot_new'),'click');
     tab($('.tabNav2'),$('.sub_map'),'click');
     tab($('.tabNav3'),$('.adlist'),'mouseover');
     tab($('.tabNav4'),$('.rank'),'mouseover');
      function tab(oList,oContent,ev){
          var aLi = oList.children();
          oContent.hide().eq(0).show();
          aLi.each(function(index){
                $(this).on(ev,function(){
                     aLi.removeClass('active').addClass('gradient');
                     $(this).removeClass('gradient').addClass('active');
                    // 变化小三角
                      aLi.find('span').removeClass('triangle_red').addClass('triangle_gray')
                    $(this).find('span').removeClass('triangle_gray').addClass('triangle_red')
                    oContent.hide().eq(index).show();
                })
          })
      }
})()

//bbs
;(function(){
       $('.bbs ul li').mouseover(function(){
             var index = $(this).index();
             $('.bbs ul li').removeClass('rankshow').eq(index).addClass('rankshow');
       })
})()


//日历
;(function(){
   // 找对象
    var aImg = $('.lucky ul img');
    var oPrompt = $('.prompt');
    var oP = oPrompt.find('p');
    var curImg = oPrompt.find('img');
    var oStrong = oPrompt.find('strong');
    var aDay = $('.lucky h3 span');

    aImg.hover(function(){
            //alert(aImg.length)
            var iTop = $(this).parent().position().top-30;
            var iLeft = $(this).parent().position().left+50;
            var index = $(this).parent().index()%aDay.length;
            oPrompt.show().css({'left':iLeft,'top':iTop});
            oP.text($(this).attr('info'));
            curImg.attr('src',$(this).attr('src'));
            oStrong.text(aDay.eq(index).text())
    },function(){
            oPrompt.hide();
        }
    )

})()

//subway按钮切换
;(function(){
       $('.subway button').click(function(){
             var index = $(this).index()-1;
             $('.subway button').removeClass('active').eq(index).addClass('active');
       })

})()

//人气排行
;(function(){
       var arrRen=[
          '',
           '姓名1<br />区域<br /> 人气1001',
           '姓名2<br />区域<br /> 人气1521',
           '姓名3<br />区域<br /> 人气1001',
           '姓名4<br />区域<br /> 人气1675701',
           '姓名5<br />区域<br /> 人气1001',
           '姓名6<br />区域<br /> 人气68871',
           '姓名7<br />区域<br /> 人气106781',
           '姓名8<br />区域<br /> 人气106781',
           '姓名9<br />区域<br /> 人气1001',
           '姓名10<br />区域<br /> 人气106781'
       ];
       var aLi = $('.hotpic ul li');
       aLi.mouseover(function(){
            if($(this).index()==0) return;
            $('.hotpic ul li p').remove();
            $(this).append('<p style="width:'+($(this).width())+'px;height:'+($(this).height()-12)+'px">'+ arrRen[$(this).index()]+'</p>');
       });

//鼠标移入移出
        aLi.hover(function(){
             var index = $(this).index();
             aLi.eq(index).siblings().find('.black').css('z-index',-2);
             aLi.eq(index).find('.black').css('z-index',999);
        },function(){
             aLi.eq(index).siblings().find('.black').css('z-index',999);
            aLi.eq(index).find('.black').css('z-index',-2);
        })
   })();
