

var btn = document.getElementsByTagName("button");
var los = document.getElementsByClassName("los");

function show(n){
	btn[n].className="hide";
	los[n].className="los";
}
function show2(n){
	btn[n].className="";
	los[n].className="los hide";
}
