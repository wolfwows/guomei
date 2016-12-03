var i = 0;
	var ulW = $(".item8").eq(0).width() * $(".item8").length;
	$("#lunboList").css({
		"width": ulW + "px"
	});

	var linum = $(".item8").length;
	$(".item8").css({
		"width": (ulW / linum) + "px"
	});


//	touch.on("#lunboList", "swipeleft swiperight", function(e) {
//		var even = e || event;
//		switch(even.type) {
//			case "swipeleft":
//				{
//
//					i++;
//					if(i < $(".item8").length) {
//						i = $(".item8").length;
//					}
//					$("#lunboList").animate({
//						left: -i * $(".item8").eq(0).width() + "px"
//					}, 200);
//					break;
//				}
//			case "swiperight":
//				{
//					break;
//				}
//
//			default:
//				{
//					break;
//				}
//		}
//	});

	
	//	function sleft(){
	//		
	//	}

