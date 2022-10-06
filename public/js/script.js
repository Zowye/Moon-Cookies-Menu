var valor_carrinho = 0;

var lista_compras = {}




function my_foo() {
    console.log("Apertou!\n")

}





function agg_list(cookie) {
    if (cookie in lista_compras) {
        lista_compras[cookie] += 1;
    } else {
        lista_compras[cookie] = 1;
    }
}



function increment(cookie, cookie_value) {
    document.getElementById("remove").style.visibility = "visible";
    valor_carrinho += parseInt(cookie_value);
    document.getElementById('counter').innerHTML = `R$ ${valor_carrinho},00`;
    agg_list(cookie);
}



function send_handle() {
    let num = "+5511981005900"
    let msg = `Oi, eu gostaria de realizar um pedido: %0a`

    for (const cookie in lista_compras) {
        var line = `_*${cookie}*_ : ${lista_compras[cookie]}%0a`
        msg = msg.concat(line)
        console.log(`${cookie}: ${lista_compras[cookie]}`);
    }

    msg = msg.concat(`%0a TOTAL: R$ ${valor_carrinho},00 reais %0a Obrigado`);

    var win = window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
    // win.focus();
}


function erase_itens() {
    document.getElementById("remove").style.visibility = "hidden";
    console.log("apagando...");
    document.getElementById('counter').innerHTML = `R$ 0,00`;
    valor_carrinho = 0;
    lista_compras = {}
}