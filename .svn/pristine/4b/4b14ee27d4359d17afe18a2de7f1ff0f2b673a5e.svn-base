$(function() {
	var b = true;
	$(".Classify").click(function() {
		if(b) {
			$(".dobulesize").stop().animate({
				left: "-60%"
			});
			b = false;
		} else {
			$(".dobulesize").stop().animate({
				left: 0
			});
			b = true;
		}

	});

	$(".fClassifyItem").each(function() {
		$(this).click(function() {
			$(this).siblings().find(".rotate").css({
				"transform": "rotate(0deg)"
			});
			$(this).siblings().find(".ftwoNav").slideUp(200);
			$(this).find(".ftwoNav").slideDown(200);
			$(this).find(".rotate").css({
				"transform": "rotate(90deg)"
			});
		});

	})
});