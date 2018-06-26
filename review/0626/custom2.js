window.onload=function(){
	var nH2 = document.createElement("h2");
	var nI1 = document.createElement("img");
	var nI2 = document.createElement("img");
	var nI3 = document.createElement("img");
	var text1 = document.createTextNode("이미지 추가");
	
	nI1.setAttribute("alt","");
	nI1.setAttribute("src","img/1.jpg");
	nI2.setAttribute("alt","");
	nI2.setAttribute("src","img/2.jpg");
	nI3.setAttribute("alt","");
	nI3.setAttribute("src","img/3.jpg");
	nI3.setAttribute("id","copy");
	
	var body = document.getElementsByTagName("body")[0];
	nH2.appendChild(text1);
	body.appendChild(nH2);
	body.appendChild(nI1);
	body.appendChild(nI2);
	body.appendChild(nI3);
	
}
function add(){
	var body = document.getElementsByTagName("body")[0];
	
	
	var nI = document.createElement("img");
	nI.setAttribute("alt","");
	nI.setAttribute("src","img/4.jpg");
	body.appendChild(nI);
}
function del(){
	var body = document.getElementsByTagName("body")[0];
	body.removeChild(body.children[6]) ;
}
function copy(){
	var body = document.getElementsByTagName("body")[0];
	var copy = document.getElementById("copy");
	var copied = copy.cloneNode(true);
	body.insertBefore(copied,body.children[6]);
	
	
}