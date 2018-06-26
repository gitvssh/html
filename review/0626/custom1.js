window.onload=function(){
	var nPtag = document.createElement("p");
	var nBtn1 = document.createElement("button");
	var nBtn2 = document.createElement("button");
	var text1 = document.createTextNode("button1");
	var text2 = document.createTextNode("button2");

	nBtn1.setAttribute("id","btn1");
	nBtn2.setAttribute("id","btn2");
	
	nBtn1.appendChild(text1);
	nBtn2.appendChild(text2);
	nPtag.appendChild(nBtn1);
	nPtag.appendChild(nBtn2);
	
	var theObj=document.getElementById("theBox");
	theObj.appendChild(nPtag);
}

function test(){
	var nDiv = document.createElement("div");
	var nH2 = document.createElement("h2");
	var nUl = document.createElement("ul");
	var nLi1 =document.createElement("li");
	var nLi2 =document.createElement("li");
	var nLi3 =document.createElement("li");
	var text1 = document.createTextNode("1. 자바");
	var text2 = document.createTextNode("2. HTML");
	var text3 = document.createTextNode("3. 자바스크립트");
	var text4 = document.createTextNode("내용추가");
	var img = document.createElement("img");
	
	nUl.setAttribute("id","menu_sub1");
	img.setAttribute("alt","배경이미지");
	img.setAttribute("src","img/1.jpg");
	img.style="width : 100px, height : 100px";
	console.log(img)
	
	nH2.appendChild(text4);
	nLi1.appendChild(text1);
	nLi2.appendChild(text2);
	nLi3.appendChild(text3);
	nUl.appendChild(nLi1);
	nUl.appendChild(nLi2);
	nUl.appendChild(nLi3);
	nDiv.appendChild(nH2);
	nDiv.appendChild(nUl);
	
	
	var theObj=document.getElementsByTagName("body")[0];
	console.log(theObj)
	theObj.appendChild(nDiv);
	
	return;
}
function remove(){
	var theObj=document.getElementsByTagName("body")[0];
	theObj.removeChild(theObj.children[3]);
}