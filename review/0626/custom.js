function img_chk(num,func){
	var myList = document.getElementById("img"+num);
	func==1?myList.style.opacity="1":myList.style.opacity="0.2";
}

function chk_ul(){
var myUl = document.getElementsByTagName("ul");
console.log(document.getElementsByTagName("ul"))
var myLi = myUl[1].getElementsByTagName("li")[0];
return;
}