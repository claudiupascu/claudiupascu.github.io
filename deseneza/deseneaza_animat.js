 document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.22.2";

 document.getElementById("id_button").addEventListener("click", start);
 function deseneaza_cerc(unghi, context, w , h)
 
 {
	 context.clearRect(0, 0, w, h);
	 context.beginPath();
   context.arc(w /2+100*Math.cos(unghi.unghi*Math.PI/180), h / 2+100*Math.sin(unghi.unghi*Math.PI/180), 50, 0, 2 * Math.PI);
   context.stroke();
   unghi.unghi++;
 }
 function start()
 {
	 	var canvas = document.getElementById('id_canvas');
    var context = canvas.getContext('2d'); 
	var unghi_start={unghi:0};//in grade
	document.getElementById("id_button").disable=true;
    setInterval(deseneaza_cerc,10,unghi_start,context, canvas.width, canvas.height);
	
 }