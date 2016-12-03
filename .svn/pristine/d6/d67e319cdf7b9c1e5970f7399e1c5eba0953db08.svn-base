//改变轮播图的框的高度
//$.extend({
//	resetHeght:function() {
//		$("#deatils_lunbo").css("height", function(){
//			return $("#details_wrap #banner img").height();
//		})
//	}
//})
//轮播图
/*
var index = 0;
$.extend({
	changepic:function() {
		index++;
		index = index > 4 ? 0 : index;
		$("#details_lunbo #banner img:eq("+index+")").animate({
			opacity:0
		}, 1000)
		$("#details_lunbo #banner img:eq("+(index+1 > 4 ? 0 : index+1) +")").animate({
			opacity:1
		})
		$("#lunbo_pages").html((index+1) +"/5")
	}
})

var a = setInterval(function(){
	$.changepic();
},1500)
$("#deatils_lunbo").mouseenter(function(){
	clearInterval(a);
})
$("#deatils_lunbo").mouseleave(function(){
	a = setInterval(function(){
		$.changepic();
	},1500);
})
*/

//1.创建一个swiperJS对象
			//1.参数1: 我们写的最外层的容器元素
			//2.参数2: 对象,轮播图的各种属性
			var mySwiper = new Swiper(".swiper-container",{
				 //控制轮播图的滚动方向
				 direction:"horizontal",
				 //loop 控制是否循环播放 true循环 false 不循环
				 loop:true,
				 //切换控制效果
				 //effect(cube, fade, overflow, flip)
				 effect:"overflow"
				 
//				 onSlideChangeEnd:function(swiper){
//				 	switch (swiper.activeIndex){
//				 		case 0:{
//				 			//调函数
//				 			break;
//				 		}
//				 		case 1:{
//				 			//调函数
//				 			break;
//				 		}
//				 		case 2:{
//				 			//调函数
//				 			break;
//				 		}
//				 		case 3:{
//				 			//调函数
//				 			break;
//				 		}
//				 	}
//				 }
			});
