
var box = document.getElementById('colorPlate');
var tempColor = document.getElementById('temColor');

//.........this loop create color template element...........
var colorArray = ["#54B689","#5BC3D5","#3B7EEB","#5ECCA9","#EEA73B","#5469C9","#5D6BA7","#6C51A4","#D67553","#5FCB71"];

for(var i=0; i<10; i++){
	if(i==5){
		var br = document.createElement('br');
		box.appendChild(br);
	}
	var div = document.createElement('div');
	div.setAttribute("class","cl");
	div.setAttribute("style","background:"+colorArray[i]);
	div.setAttribute("onclick","colorFunc('"+colorArray[i]+"')");
	box.appendChild(div);
}

function largCogColorFunction(){
	var getstyle = window.getComputedStyle(box);
    var marginRight = getstyle.getPropertyValue('margin-right');
	if(marginRight == "-200px"){
		box.setAttribute("style","margin-right:0px;")
	}else{
		box.setAttribute("style","margin-right:-200px;")
	}
}

function colorFunc(color){
	var multipleEl=getIdFormMultipleElelments();
	for(var ml = 0; ml<multipleEl.length; ml++){
		multipleEl[ml].setAttribute("style","color:"+color);
	}
			multipleEl[0].setAttribute("style","background:"+color);
			multipleEl[6].setAttribute("style","background:"+color);
}

function DarkModeFunc(){
	var textColor = document.getElementById('textColor');
	var body = document.getElementById('body');
	var getBodyStyle = window.getComputedStyle(body);
    var bodyColor = getBodyStyle.getPropertyValue('background-color');
	if(bodyColor == "rgb(35, 45, 47)"){
		body.setAttribute("style","background:#fff;color:#262626;transition:0.5s");
	}else{
		body.setAttribute("style","background:#232D2F;color:#fff;transition:0.5s");
}
	
}


function getIdFormMultipleElelments() {
    var n = document.getElementById("temColor");
    var a = [];
    var i;
    while(n) {
        a.push(n);
        n.id = "a-different-id";
        n = document.getElementById("temColor");
    }

    for(i = 0;i < a.length; ++i) {
        a[i].id = "temColor";      
    }
    return a;
}
// getIdFormMultipleElelments();