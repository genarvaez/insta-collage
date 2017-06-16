var usuario = document.getElementById("usuario");
var password = document.getElementById("password");
var button = document.getElementById("button");
var invalido = Array.from(document.getElementsByClassName("invalido"));



button.addEventListener("click", function(event){
	if(usuario.value == "" || password.value == "" || usuario.value.length < 6 || password.value.length < 6){
		event.preventDefault()
		invalido.forEach(function(e){
			e.style.display = "block";
		})
	}	
})
