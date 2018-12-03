document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.05.6";
window.addEventListener("deviceorientation", on_device_orientation);

//window.addEventListener("devicemotion", on_device_motion);
//--------------------------------
function on_device_orientation(e)
{

	var svg = document.getElementById("id_svg");
	var circle = document.getElementById("id_circle");
	var R = 20;
	var svg.width = svg.getAttribute("width");
	var svg.height = svg.getAttribute("height");
    circle.setAttribute("cx",svg.width / 2 + e.gama / 90 * (svg.width /2- R + "px"));
	circle.setAttribute("cx",svg.height / 2 + e.gama / 90 * (svg.height /2- R + "px"));

}
