// preloader

$(function() {
	// <!-- 按钮点击下一步滚动条滑动-->
		$('#btn0').click(function(){
			$("html,body").animate({scrollTop:$("#home").offset().top},1000);
		});
		$('#btn1').click(function(){
			$("html,body").animate({scrollTop:$("#indicate").offset().top},1000);
		});
		$('#btn2').click(function(){
			$("html,body").animate({scrollTop:$("#result").offset().top},1000);
		});
		$('#btn3').click(function(){
			$("html,body").animate({scrollTop:$("#result").offset().bottom},1000);
		});
})