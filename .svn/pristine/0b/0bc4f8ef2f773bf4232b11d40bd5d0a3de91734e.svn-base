$(function(){
	var timer=null;
	var num=5;
	
	var reg=/^1\d{10}$/;
	$("#getCheckNum").click(function(){
		if(reg.test(parseInt($("#fphoneNumber").val()))){
			timer=setInterval(function(){
			$("#getCheckNum").css("backgroundColor","lightgray");
			$("#getCheckNum").find(".tips").html("重新获取");
			$("#getCheckNum").find(".times").html(num);
			if(num==0){
				clearInterval(timer);
				$("#getCheckNum").css("backgroundColor","#b91b34");
				$("#getCheckNum").find(".times").hide();
			}
			num--;
		
			
		},1000);
		}else{
			alert("输入的手机号不正确,请重新输入");
			$("#fphoneNumber").val('');
		}
		
	})
});



