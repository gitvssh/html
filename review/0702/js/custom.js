$(function(){
	$("#b1").toggle(function(){
		$("#test1").css({"background":"white"});
		},function(){
			$("#test1").css({"background":"yellow"});
			
		},function(){
			$("#test1").css({"background":"green"});
			
		},function(){
			$("#test1").css({"background":"pink"});
			
		});
	
});//end ready
//	
//	$(window).resize(function(){
//		$("#p1").text("사이즈가 변경되었습니다.");
//	});
//	$(window).scroll(function(){
//		$("#p2").text("스크롤을 움직였습니다.");
//	});
//	
//	$(".sub00").parent().hover(function(){
//	$(".sub00").parent().css({"font-wieght":"bald","text-decoration":"underline","font-size":"18px"});
////	$(".sub00").css("display","block");
//	$(".sub00").stop().fadeIn(370);
//	},function(){
//	$(".sub00").parent().css({"font-wieght":"normal","text-decoration":"none","font-size":"17px"});
////	$(".sub00").css("display","none");
//	$(".sub00").stop().fadeOut(370);
//	});
//	
//	$(".sub00").parent().mouseenter(function(){
//		console.log(1);
//		$(".sub00").parent().css({"font-wieght":"bald","text-decoration":"underline","font-size":"18px"});
////		$(".sub00").css("display","block");
//		$(".sub00").stop().show(370);
//		
////	서브메뉴
//		$(".sub00>li").mouseenter(function(){
//			console.log(0);
//			$(".sub00>li").parent().css({"font-wieght":"bald","text-decoration":"underline","font-size":"18px"});
//			console.log(1);
//		});
//		$(".sub00>li").mouseleave(function(){
//			$(".sub00>li").parent().css({"font-wieght":"normal","text-decoration":"none","font-size":"17px"});
//		});
//	});//end mouseenter
//	$(".sub00").parent().mouseleave(function(){
//		console.log(0);
//		$(".sub00").parent().css({"font-wieght":"normal","text-decoration":"none","font-size":"17px"});
////		$(".sub00").css("display","none");
//		$(".sub00").stop().hide(370);
//	});//end mouseleave
//	
//});

/*
$(function(){
	$("#d01").click(function(){
		$("p").text("박스1이 그린색으로 변경되었습니다.");
		$("#d01").css({"background":"green"});
	});
	$("#d02").click(function(){
		$("p").text("박스2가 노란색으로변경되었습니다.");
		$("#d02").css({"background":"yellow"});
	});
	$("#d03").click(function(){
		$("p").text("박스3이 빨강색으로 변경되었습니다.");
		$("#d03").css({"background":"red"});
	});
	$("#d04").click(function(){
		$("p").text("박스4가 분홍색으로 변경되었습니다.");
		$("#d04").css({"background":"pink"});
	});
	
});*/