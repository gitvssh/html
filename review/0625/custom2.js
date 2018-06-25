var flag = true;
function color_change(){
	var myObj=document.getElementById("changeimg");
	console.log(myObj.src)
	if(flag){
		myObj.src="img/chicken.jpg";
		flag = false;
	console.log("1")
	}
	else{
		flag = true;
		myObj.src="img/eagle.jpg";
		console.log("2")
	}
	console.log("3")
}

var pattern = /[^(a-zA-Z0-9)]/gi;
if(pattern.test(login_form.id.value)){
	alert("특수문자는 사용할 수 없습니다.");
	login_form.id.focus();
}

pattern= /[^(a-zA-Z0-9)]/gi;
var pattern2 = /[^(가-힣ㄱ-ㅎㅏ-ㅣ]/gi;