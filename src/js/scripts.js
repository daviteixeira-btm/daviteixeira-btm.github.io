// Service Worker

if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('./src/js/sw.js').then(function(registration){
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err){
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Button back to the top
const buttonScroll = document.getElementById("back-to-top");

buttonScroll.addEventListener('click', () => {
    window.scroll({top: 0, behavior: 'smooth'});
});

// Form Action

$('#formAction').submit(function(){

    var nome = $('#nome'); 
    var erro = $('.alert');
    var email = $('#email');
    var assunto = $('#assunto');
    var field = $('#erro-field');
    var mensagem = $('#mensagem');

    // removes the element from the screen whenever an attempt is made to submit the form
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // validate field assunto
    if(assunto.val() == ''){
        erro.removeClass('d-none');
        field.html('assunto'); // field assunto that was not filled
        assunto.focus();
        assunto.addClass('is-invalid');
        return false;
    }
    
    // validate field name
    if(nome.val() == ''){
        erro.removeClass('d-none');
        field.html('nome'); // field name that was not filled
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    // validate field email
    if(email.val() == ''){
        erro.removeClass('d-none');
        field.html('email'); // field email that was not filled
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    // validate field mensagem
    if(mensagem.val() == ''){
        erro.removeClass('d-none');
        field.html('mensagem'); // field name that was not filled
        mensagem.focus();
        mensagem.addClass('is-invalid');
        return false;
    }

    // if you get here, you can send the data
    return true;
});