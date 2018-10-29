document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.29.0";

window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(e)
{
	document.getElementById("id_alpha").innerHTML =e.alpha;
	document.getElementById("id_beta").innerHTML =e.beta;
	document.getElementById("id_gamma").innerHTML =e.gamma;
	
	var canvas = document.getElementById("id_canvas");
	var context =canvas.getContext("2d");
	
	
	context.clearRect(0,0,canvas.width,canvas.height);
	
	context.beginPath();
	context.arc(canvas.width / 2,canvas.height / 2, 10, 0, 2 *Math.PI);
	context.stroke();
}
