$(function() {
var str1='';
	$(".item6").click(function() {
		$(this).addClass("bborder").siblings().removeClass("bborder");
		$(this).find(".seAdressList").show().end().siblings().find(".seAdressList").hide();
	})
	$(".item7").click(function() {
		$(this).find(".srightIcon").show().end().siblings().find(".srightIcon").hide();
		str1=$(this).find(".sheng").html();
		$(".selectsheng").html(str1);
	});

	$(".sclose").click(function() {
		$(".sbg").hide();
	});

});

var arr = [];
for(var i in iplocation) {

	arr.push(i);

}
function sheng() {

	for(var i = 0; i < arr.length; i++) {
		var oli = document.createElement("li");
		var ospan1=document.createElement("span");
		var ospan2=document.createElement("span");
		ospan1.innerHTML=arr[i];
		ospan1.className="sheng";
		ospan2.innerHTML="&radic;";
		ospan2.className="srightIcon";
		oli.appendChild(ospan1);
		oli.appendChild(ospan2);
		oli.className="item7";
		document.getElementsByClassName("shenglist")[0].appendChild(oli);

	}

}
sheng();