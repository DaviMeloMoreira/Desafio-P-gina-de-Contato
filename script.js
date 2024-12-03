document.addEventListener('DOMContentLoaded', function(){

const privacidadeCheckbox = document.getElementById('privacidade');
const submitButton = document.querySelector('button[type="submit"]');
const form = document.getElementById('formulario');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');


privacidadeCheckbox.addEventListener('change', function(){
submitButton.disabled = !this.checked;   

})

form.addEventListener('submit', function(event){
event.preventDefault();

const nome = form.querySelector('input[name = "nome"]');
const email = form.querySelector('input[name = "email"]');
const assunto = form.querySelector('select[name = "assunto"]');
const mensagem = form.querySelector('textarea[name = "mensagem"]');
const privacidade = privacidadeCheckbox.checked;

let valid = true;
let messages = [];

if(!nome.value.trim()){
    messages.push('Por Favor, Preencha o campo Nome.');
    valid = false;
} 


if(!email.value.trim()){
    messages.push('Por Favor, Preencha o campo Email.');
    valid = false;
} 


if(!assunto.value.trim()){
    messages.push('Por Favor, Preencha o campo Assunto.');
    valid = false;
} 


if(!mensagem.value.trim()){
    messages.push('Por Favor, Preencha o campo Mensagem.');
    valid = false;
} 


if(!privacidade){
    messages.push('Para continuar, aceite a politica de privacidade.');
    valid = false;
} 


if (valid) {
    popup.style.display = 'flex';
    form.reset(); 
    submitButton.disabled = true; 
}
});


closePopupButton.addEventListener('click', function () {
popup.style.display = 'none';
});


popup.addEventListener('click', function (event) {
if (event.target === popup) {
    popup.style.display = 'none';
}
});
});