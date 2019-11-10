$("document").ready(function() {

});

$("#btn-criar-evento").click(function(){createEvent();});

function createEvent(){
	loading();

	var eventos = {};
		  eventos.data = $("#data-input").val();
			eventos.local = $("#local-input").val();
			eventos.descricao = $("#descricao-input").val();
			eventos.horario = $("#horario-input").val();
			console.log(eventos)

	$.post("./upd-user-event", {
		email: 	userInfo.email,
		eventos: eventos
	}).done(function( data ) {
		if(data == null || data == "undefined"){
			console.log("Deu merda");
		}else{
			alert("Evento Criado");
			$.get("./get-user", {
				email: userInfo.email
			}).done(function( data ) {
				if(data == null || data == "undefined"){
					console.log("Deu merda");
				}else{
					setUserCache(data);
				}
				loading('hide');
			});
		}
	});
}
