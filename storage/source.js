/**
 * 
 */

/*아이디 숫자 체크, 파스인티즈*/
var id = prompt("아이디를 입력하세요","id");
var idcheck = parseInt(id);
if(isNaN(idcheck)==false){
	alert("아이디에는 숫자가 포함되면 안됩니다.");
}
