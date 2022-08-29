
var botaocart = document.querySelectorAll ('.botaocompra');



for (var index = 0; index < botaocart.length; index++) {
    var botaocompra = botaocart[index];
    botaocompra.addEventListener ('click',function () {
        alert ('Obrigado por comprar na MiyaStore!');
    });
}




