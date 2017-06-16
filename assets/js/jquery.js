
function drag(event){
  console.log(event.target.id);
  event.dataTransfer.setData("text", event.target.id);
}
function permitirDrop(event){
  event.preventDefault();
  var id_foto = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById("id_foto"));
}
function drop(event){
	event.preventDefault();
	var id_foto = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById("id_foto"));
}
//NO FUNCIONÓ EL DROP, SIGUIENDO LAS MISMAS INSTRUCCIONES DEL EJERCICIO GUIADO