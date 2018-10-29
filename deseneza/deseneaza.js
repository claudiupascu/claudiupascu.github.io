 document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.22.0";

 document.getElementById("button").addEventListener("click", id_start);
 
 function start()
 {
	var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d'); 
   context.beginPath();
   context.arc(canvas.width /2, canvas.height / 2, 50, 0, 2 * Math.PI);
   context.stroke();
   
 }