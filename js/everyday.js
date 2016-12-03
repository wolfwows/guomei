$(function(){
	var bool=true;
	$(".emore").click(function(){
		if(bool){
			$(".fnavtwo").slideDown(100);
			bool=false;
		}else{
			$(".fnavtwo").hide();
			bool=true;
		}
		
	})
});
