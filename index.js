var clock_reset = 0;

window.onload=function(){
	var height1 = document.getElementById("footer").offsetHeight;
	var height2 = window.innerHeight;
	var width1 = window.innerWidth;
	var height = height2 - height1 -100;
	var width = width1-200;
	document.getElementById("main").style.height = height+"px";
	document.getElementById("main-right").style.width = width+"px";
}

function open_modal(){
	document.getElementById("curtain").className="curtain";
	document.getElementById("modal1").className="modal";
}

function close_modal(){
	document.getElementById("curtain").className="curtain hide";
	document.getElementById("modal1").className="modal hide";
	document.getElementById("modal2").className="modal hide";
}

function open_clock(){
	document.getElementById("modal1").className="modal hide";
	document.getElementById("modal2").className="modal";
	clock_reset = 1;
	var secs = 60;
	var clock = setInterval(function(){
		secs--;
		if(secs<10){
			document.getElementById("clock").style.color = "red";
		}
		if(secs==0){
			close_modal();
			document.getElementById("clock").style.color = "black";
			clearInterval(clock);
			document.getElementById("clock").innerHTML = "01:00";
			clock_reset = 0;
		}
		document.getElementById("clock").innerHTML = "00:"+secs;
	},1000);
}

function curtain_close(event){
	if(event.target.id =="open-clock" || event.target.id =="modal1" || clock_reset == 1){
		
	}
	else{
		close_modal();
	}
}