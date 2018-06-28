/**
 * 
 */
function id_chk(){
	var blink_chk = / /;
	var special_chk = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	var num_chk = /[0-9]/gi;
	var nnum_chk = /[!0-9]/gi;
	var han_chk =/[!가-힣]/gi;
	var eng_chk = /[a-zA-Z]/gi;
	var reg_dit = /\d{3}-\d{4}-\d{4}/gi;
//	//1.아이디
	var id = login_form.id.value;
//	//1-1 길이 체크
	if(id.length<=6){
		alert("아이디는 7글자 이상이여야 합니다.")
		alert("첫글자는 영문으로 시작해야 합니다. \n 다시 입력해주세요")
		return false;
	}
//	//1-2 첫번째숫자 체크
	var num_ck=/\d/
	if(num_chk.test(parseInt(id))){//정수추출, 첫번째 숫자x=nan, 숫자o일경우 numchk=true
		alert("첫글자는 영문으로 시작해야 합니다. \n 다시 입력해주세요")
		login_form.id.focus();
		return false;
	}
//	//1-3 숫자포함 체크
	if(!num_chk.test(id)){
		alert("아이디에는 숫자가 1개이상 포함되어야 합니다.")
		login_form.id.focus();
		return false;
	}
//	//1-4 빈공백 체크
//	console.log(blink_chk.test(id));
	if(blink_chk.test(id)){
		alert("아이디에는 공백이 포함되어선 안됩니다.")
		login_form.id.focus();
		return false;
	}
//	//1-5 특수문자 체크
//	console.log(special_chk.test(id));
	if(special_chk.test(id)){
		alert("아이디에는 특수문자가 포함되어선 안됩니다.")
		login_form.id.focus();
		return false;
	}
	
//	console.log(1);
//	//2. 비밀번호
	console.log(login_form.psw.value);
	var pass = login_form.psw.value;
//	//2-1 길이체크
	console.log(pass.length);
	if(pass.length<8){
		alert("비밀번호는 8자리 이상입니다.")
		login_form.psw.focus();
		return false;
	}
//	//2-2 특수문자체크
	if(!special_chk.test(pass)){
		alert("비밀번호는 특수문자가 포함되어야 합니다.")
		login_form.psw.focus();
		return false;
	}
	//2-3 비밀번호 확인
//	if(nspecial_chk(pass)){
//		alert("비밀번호확인과 일치하지 않습니다..")
//		return false;
//	}
	
	//3.이름
	
//	3-1 .  국문 체크
//		- 영문불가
//	- 특수문자 불가
//	- 빈공백 불가
	var name = login_form.name.value;
	console.log(han_chk.test(name));
	if(num_chk.test(name)||eng_chk.test(name)||special_chk.test(name)){
		alert("이름은 한글만 가능합니다.")
		return false;
	}
	//4.전화번호
	var phonenum = login_form.phonenum.value;
	if(phonenum.length<11){
		alert("전화번호는 11자리 이상입니다.")
		return false;
	}
	if(blink_chk.test(phonenum)){
		alert("전화번호는 공백이 포함되면 안됩니다.")
		return false;
	}
	if(!reg_dit.test(phonenum)){
		alert("전화번호 규칙에서 벗어납니다.")
		return false;
	}
	//5.이메일 체크
	var email = login_form.email.value;
	if(blink_chk.test(email)){
		alert("이메일에는 공백이 포함되면 안됩니다.")
		login_form.email.focus();
		return false;
	}
	//6.우편번호 체크
	var mail_num = login_form.mail_num.value;
	if(mail_num.length<6){
		alert("우편번호는 6자리 이상입니다.")
		return false;
	}
	if(!nnum_chk.test(mail_num)){
		alert("우편번호는 숫자만 가능합니다.")
		return false;
	}
	
	
}