function Carousel(o,s,e){function r(){c=setInterval(function(){++n>=s.length&&(n=0),e.removeClass("active").eq(n).addClass("active"),s.stop(!0).fadeOut("normal").eq(n).stop(!0).fadeIn("normal")},3e3)}var c=null,n=0;e.mouseenter(function(){n=$(this).index(),e.removeClass("active").eq(n).addClass("active"),s.stop(!0).fadeOut("normal").eq(n).stop(!0).fadeIn("normal")}),r(),o.hover(function(){clearInterval(c)},function(){r()})}$(".close_ico").click(function(){$(".safe_warm").css("display","none")}),$(".province_box").hover(function(){$(".province_box").css("background","#fff"),$(" #userProvince").css("background","#fff"),$(".hd_provinceList").css("display","block")},function(){$(".province_box").css("background","url(../../images/common_sprite.png) no-repeat right -143px"),$(" #userProvince").css("background","#f1f1f1"),$(".hd_provinceList").css("display","none")}),$(".hd_provinceList").hover(function(){$(".hd_provinceList").css("display","block")},function(){$(".province_box").css("background","url(../../images/common_sprite.png) no-repeat right -143px"),$(".hd_provinceList").css("display","none")}),$(".myyaowang").mouseenter(function(){$("#menu_bd_orther").css("display","block")}),$("#menu_bd_orther").mouseleave(function(){$("#menu_bd_orther").css("display","none")}),$(".tell").mouseenter(function(){$("#menu_bd_app").css("display","block"),$(".tell_title").css("display","block")}),$(".tell_title").mouseleave(function(){$("#menu_bd_app").css("display","none"),$(".tell_title").css("display","none")}),$("#menu_bd_app").mouseleave(function(){$("#menu_bd_app").css("display","none"),$(".tell_title").css("display","none")}),function(){var o=null;$(".mod_minicart").mouseenter(function(){$(".minicart_list ").css("display","block")}),$(".mod_minicart").mouseleave(function(){o=setTimeout(function(){$(".mod_minicart").mouseleave(function(){$(".minicart_list ").css("display","none")})},100)}),$(".minicart_list ").hover(function(){clearTimeout(o),$(".minicart_list ").css("display","block")},function(){$(".minicart_list ").css("display","none")})}(),$(".s_app,.app_qrcode ").hover(function(){$(".app_qrcode ").css("display","block")},function(){$(".app_qrcode ").css("display","none")}),Carousel($("#car-l-box"),$(".car-l-img-box"),$(".car-l-btn")),Carousel($(".floor_1 .car-m-box"),$(".floor_1 .car-m-img-box"),$(".floor_1 .car-m-btn")),Carousel($(".floor_2 .car-m-box"),$(".floor_2 .car-m-img-box"),$(".floor_2 .car-m-btn")),Carousel($(".floor_3 .car-m-box"),$(".floor_3 .car-m-img-box"),$(".floor_3 .car-m-btn")),Carousel($(".floor_4 .car-m-box"),$(".floor_4 .car-m-img-box"),$(".floor_4 .car-m-btn")),Carousel($(".floor_5 .car-m-box"),$(".floor_5 .car-m-img-box"),$(".floor_5 .car-m-btn")),Carousel($(".floor_6 .car-m-box"),$(".floor_6 .car-m-img-box"),$(".floor_6 .car-m-btn")),Carousel($(".floor_7 .car-m-box"),$(".floor_7 .car-m-img-box"),$(".floor_7 .car-m-btn")),Carousel($(".floor_8 .car-m-box"),$(".floor_8 .car-m-img-box"),$(".floor_8 .car-m-btn")),Carousel($(".floor_9 .car-m-box"),$(".floor_9 .car-m-img-box"),$(".floor_9 .car-m-btn")),Carousel($(".floor_10 .car-m-box"),$(".floor_10 .car-m-img-box"),$(".floor_10 .car-m-btn")),$(document).scroll(function(o){o||window.event;var s=document.documentElement.scrollTop||document.body.scrollTop;s>650&&s<6e3?$(".elevator_n").css("display","block"):$(".elevator_n").css("display","none"),s>650&&s<1130?$(".two_line").eq(0).addClass("current"):s>1130&&s<1610?($(".two_line").removeClass("current").eq(1).addClass("current"),$(".floor_2 .floor_name").css({background:"#ffa27a",color:"#fff"})):s>1610&&s<2090?($(".two_line").removeClass("current").eq(2).addClass("current"),$(".floor_3 .floor_name").css({background:"#ff6b6b",color:"#fff"})):s>2090&&s<2570?($(".two_line").removeClass("current").eq(3).addClass("current"),$(".floor_4 .floor_name").css({background:"#f6c89e",color:"#fff"})):s>2570&&s<3050?($(".two_line").removeClass("current").eq(4).addClass("current"),$(".floor_5 .floor_name").css({background:"#aee177",color:"#fff"})):s>3050&&s<4010?($(".two_line").removeClass("current").eq(5).addClass("current"),$(".floor_6 .floor_name").css({background:"#ffacd0",color:"#fff"})):s>4010&&s<4490?($(".two_line").removeClass("current").eq(6).addClass("current"),$(".floor_7 .floor_name").css({background:"#cac3f2",color:"#fff"})):s>4490&&s<4970?($(".two_line").removeClass("current").eq(7).addClass("current"),$(".floor_8 .floor_name").css({background:"#fcb0c0",color:"#fff"})):s>4970&&s<5450?($(".two_line").removeClass("current").eq(8).addClass("current"),$(".floor_9 .floor_name").css({background:"#cac3f2",color:"#fff"})):s>5450&&s<5930?($(".two_line").removeClass("current").eq(9).addClass("current"),$(".floor_10 .floor_name").css({background:"#16f0cf",color:"#fff"})):$(".two_line").removeClass("current")}),$(".two_line").hover(function(){$(this).addClass("current")},function(){$(this).removeClass("current")}),$(".two_line").click(function(){switch($(this).index()){case 0:$(document).scrollTop(650);break;case 1:$(document).scrollTop(1130);break;case 2:$(document).scrollTop(1610);break;case 3:$(document).scrollTop(2090);break;case 4:$(document).scrollTop(2570);break;case 5:$(document).scrollTop(3050);break;case 6:$(document).scrollTop(4140);break;case 7:$(document).scrollTop(4490);break;case 8:$(document).scrollTop(4970);break;case 9:$(document).scrollTop(5450)}}),$(".f_home,.showConsult").hover(function(){$(".showConsult").css("display","block")},function(){$(".showConsult").css("display","none")}),$(".f_top").click(function(){$(document).scrollTop(0)}),$(".stitle .animate").hover(function(){$(this).parent().children(".category").css("display","block"),$(this).css({background:"#fff",color:"#314349"}).stop(!0).animate({marginLeft:"5px"},100)},function(){$(this).parent().children(".category").css("display","none"),$(this).css({background:"#314349",color:"#fff"}).stop(!0).animate({marginLeft:"0px"},100)}),$(".category").hover(function(){$(".category").css("display","block")},function(){$(".category").css("display","none")});var sDefault=$("#word").attr("default");$("#word").val(sDefault),$("#word").blur(function(){$("#searchSuggest ul").css("display","none"),""===$("#word").val()&&$("#word").val(sDefault)}),$("#word").focus(function(){$("#word").val()===sDefault&&$("#word").val("")}),$("#word").on("input",function(){var o=$("#word").val();console.log(o),$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+o+"&json=1&p=3&sid=1435_21096_25178_20927&req=2&csor=2&pwd=2&cb=?",function(o){console.log(o.s),$("#searchSuggest ul").css("display","block"),$.each(o.s,function(o,s){if(console.log(o),o>0)return!1;$("<li></li>").html(s).appendTo($("#searchSuggest ul"))})})}),$(".fri_tit li").mouseenter(function(){$(".fri_tit li").removeClass("cur"),$(this).addClass("cur"),0===$(this).index()?($(".fri_ct").css("display","none"),$(".flagship_shore").css("display","block")):1===$(this).index()&&($(".fri_ct").css("display","none"),$(".friendly").css("display","block"))}),$(".consult_tt").click(function(){$(".consult_tt").removeClass("tabMenu_cur"),$(this).addClass("tabMenu_cur")}),$(".server_tab li").click(function(){$(".server_tab li").removeClass("on"),$(this).addClass("on")});