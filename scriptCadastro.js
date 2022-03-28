//Recebe dados do formulário
function getDados(url){
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;

}

function receberDados(){
	console.log("Oi");
	console.log("http://127.0.0.1:5500/");
}







//Envia dados para o banco
function postDados(e){
	e.preventDefault();

}

/*
function reqListener () {
	console.log(this.responseText);
  };
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", "yourFile.txt", true);
  oReq.send();
  */