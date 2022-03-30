//conexão com banco mongo
var mongoose = require ('mongoose');
global.db = mongoose.connect('mongodb://')

//get form by prop name
const form = document.forms.cadastro;

form.addEventListener('submit', (e) => {
	e.preventDefault();

//get fields by prop name
const {nome, email, cpf, dataNascimento} = form;
console.log(nome.value, email.value, cpf.value, dataNascimento.value);
});

//post method
fetch('https://200.17.5.10/32', {
	method: 'POST',
	mode: 'cors'
}).then(function(res))

https://docs.microsoft.com/pt-br/learn/modules/build-web-api-nodejs-express/