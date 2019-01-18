var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var m =1;


img1.addEventListener("click", hide);
img2.addEventListener("click", hide2);
img3.addEventListener("click", hide3);

function hide(){

if(m==1){
	img2.className ="hide";
	img3.className ="hide";
	info1.className="para";
	m=0;
}else{
	m =1;
	info1.className="hide";
	img2.className ="";
	img3.className ="";
}
}

function hide2(){

if(m==1){
	img1.className ="hide";
	img3.className ="hide";
	info2.className="para";
img2.id="img1";
	m=0;
}else{
	m =1;
	info2.className="hide";
img2.id="img2";
	img1.className ="";
	img3.className ="";
}
}


function hide3(){

if(m==1){
	img2.className ="hide";
	img1.className ="hide";
info3.className="para";
img3.id="img1";
	m=0;
}else{
info3.className="hide";
	m =1;
img3.id="img3";
	img2.className ="";
	img1.className ="";
}
}
