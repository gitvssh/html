document.write("코드명 : "+navigator.appCodeName+"<br>");
document.write("브라우저명 : "+navigator.appName+"<br>");
document.write("플랫폼 버전 : "+navigator.appVersion+"<br>");
document.write("전체정보 : "+navigator.userAgent+"<br>");

document.onkeydown = function(e){
	var theEvent = e?e:window.event;
	var theKey1 = theEvent.keyCode;
	var theKey2 = theEvent.shiftKey;
	var theKey3 = theEvent.ctrlKey;
	var theKey4 = theEvent.altKey;
	
	if(theKey1==65&&theKey2){
		alert("전체선택")
	}
	if(theKey1==66&&theKey2){
		alert("부분선택")
	}
	if(theKey1==67&&theKey3){
		alert("복사")
	}
	if(theKey1==86&&theKey3){
		alert("붙여넣기")
	}
	if(theKey1==49&&theKey4){
		alert("확대")
	}
	if(theKey1==50&&theKey4){
		alert("축소")
	}
}

document.onmousemove=function(e){
	var theEvent=e?e:window.event;
	var myForm=document.form1;
	myForm.clt_x.value="clientX: "+theEvent.clientX;
	myForm.clt_y.value="clientY: "+theEvent.clientY;
	myForm.src_x.value="screenX: "+theEvent.screenX;
	myForm.src_y.value="screenY: "+theEvent.screenY;
	myForm.pg_x.value="pageX: "+theEvent.pageX;
	myForm.pg_y.value="pageY: "+theEvent.pageY;
}

function login_form_check(){
	if(login_form.name.value==""){
		alert("이름은 필수 항목입니다.");
		login_form.name.focus();
		
		return;
	}
	
	
	if(login_form.id.value==""){
		alert("아이디는 필수 항목입니다.");
		login_form.id.focus();
		
		return;
	}
	
	if(login_form.id.value.length<=6){
		alert("아이디는 6자리 이상이 되어야 합니다.");
		login_form.id.focus();
		
		return;
	}
	if(isNaN(parseInt(login_form.phone.value))){
		alert("전화번호는 숫자만 입력하셔야 됩니다.");
		login_form.phone.focus();
		
		return;
	}
	if(login_form.email.value.indexOf("@")==-1){
		alert("@를 입력하셔야 합니다.");
		login_form.email.focus();
		
		return;
	}
	
	login_form.submit();
}