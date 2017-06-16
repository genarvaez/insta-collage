
function drag(ev){
  console.log(ev.target.id);
  ev.dataTransfer.setData("text", ev.target.id);
}
function permitirDrop(ev){
  ev.preventDefault(); 
}
function drop(ev){
	ev.preventDefault();
	var dato = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(dato));
}
//NO FUNCIONÓ EL DROP, SIGUIENDO LAS MISMAS INSTRUCCIONES DEL EJERCICIO GUIADO