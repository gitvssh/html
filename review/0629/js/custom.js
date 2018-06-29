$(function(){
	$("#d01>h1").html("<a href:'https://www.naver.com'>a타이틀로변경</a>");
	$("ul>li:eq(0)").html("리스트151515");
	$("ul").append("<li>list06</li>")
//	$("<img src='img/2.jpg'>").insertAfter("img");
	$("img:eq(1)").attr({"alt":"금요일","src":"img/6.jpg"});	
});