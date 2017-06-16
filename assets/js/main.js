var usuario = document.getElementById("usuario");
var password = document.getElementById("password");
var button = document.getElementById("button");



button.addEventListener("click", function(){
	if(usuario.value == "" || password.value == ""){
		alert("no")
	}
})