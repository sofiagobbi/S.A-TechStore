let carrinho = [];
function adicionarProduto(nome, preco){
    let produto = {
        nome: nome,
        preco: preco
    };
    carrinho.push(produto);
    atualizarCarrinho();
}
function atualizarCarrinho(){
    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";
    let total = 0;
    for(let i = 0; i < carrinho.length; i++){
        total += carrinho[i].preco;
        lista.innerHTML += `
            <li>
                ${carrinho[i].nome} - R$ ${carrinho[i].preco.toFixed(2)}
                <button onclick="removerProduto(${i})">
                    Remover
                </button>
            </li>
        `;
    }
    let desconto = 0;
    if(total >= 300){
        desconto = total * 0.10;
    }
    let totalFinal = total - desconto;
    document.getElementById("total").innerHTML =
        "Total: R$ " + total.toFixed(2);
    document.getElementById("desconto").innerHTML =
        "Desconto: R$ " + desconto.toFixed(2);
    document.getElementById("totalFinal").innerHTML =
        "Total Final: R$ " + totalFinal.toFixed(2);
}
function removerProduto(indice){

    carrinho.splice(indice,1);

    atualizarCarrinho();

}
function validarFormulario(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let quantidade = document.getElementById("quantidade").value;
    if(nome == ""){
        alert("Digite seu nome.");
        return false;
    }
    if(email == ""){
        alert("Digite seu e-mail.");
        return false;
    }
    if(email.indexOf("@") == -1){
        alert("Digite um e-mail válido.");
        return false;
    }
    if(quantidade == "" || quantidade <= 0){
        alert("Informe a quantidade.");
        return false;
    }
    if(carrinho.length == 0){
        alert("Seu carrinho está vazio.");
        return false;
    }
    alert("Compra realizada com sucesso!");
    carrinho = [];
    atualizarCarrinho();
    document.querySelector("form").reset();
    return false;
}

let botoes = document.querySelectorAll(".produto button");
for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", adicionarCarrinho);
}
function adicionarCarrinho() {
    let produto = this.parentElement;
    let nome = produto.querySelector("h3").textContent;
    let preco = produto.querySelector(".preco").textContent;
    alert(nome + " foi adicionado ao carrinho!\nPreço: " + preco);
}