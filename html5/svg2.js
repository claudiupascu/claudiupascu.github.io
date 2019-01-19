document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.03.1"; 


 
document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.03.2"; 


 
 


 
window.addEventListener("deviceorientation", on_device_orientation); 


 
//window.addEventListener("devicemotion", on_device_motion); 
 
function on_device_orientation(e){


 
	 


 
	var R = 20; 


 
	 


 
	circle.setAttribute("cx", svg.width / 2 + e.gamma / 90 * (svg.width / 2 - R) + "px"); 


 
	circle.setAttribute("cy", svg.height / 2 + e.beta / 90 * (svg.height / 2 - R) + "px"); 


 
	var svg_width = svg.getAttribute("width"); 


 
	var svg_height = svg.getAttribute("height"); 


 
	 


 
	circle.setAttribute("cx", svg_width / 2 + e.gamma / 90 * (svg_width / 2 - R) + "px"); 


 
	circle.setAttribute("cy", svg_height / 2 + e.beta / 90 * (svg_height / 2 - R) + "px"); 


 
} 