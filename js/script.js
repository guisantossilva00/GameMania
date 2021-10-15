let email = document.getElementById("campo-email");

let listaProdutos = [
    {
        imagem :"imagens/produto.jpg",
        titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
        preco: "99,99",
    },
    {
        imagem :"imagens/mousegamer.jpg",
        titulo: "Mouse Gamer 2400 Dpi Vx Gaming Sark",
        preco: "49,99",
    },
    {
        imagem :"imagens/kitvermelho.jpg",
        titulo: "Kit Teclado Mouse Gamer Vermelho Vx Gaming Grifo",
        preco: "99,99",
    },
    {
        imagem :"imagens/produto.jpg",
        titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
        preco: "99,99",
    },
]

function enviarEmail() {
    let emailDoUsuario = email.value;
    console.log(emailDoUsuario);
}

function renderizarProdutos() {
    let secaoProdutos = document.getElementById("espaco-mais-vendidos");

    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];
        
        template += `<div class="container-card-externo">
            <div class="container-card">
                    <div>
                        <img src="${produto.imagem}" alt="Imagem do Produto">
                        <h3>${produto.titulo}</h3>
                    </div>
                    <div>
                        <div class="preco-produto">
                            R$ ${produto.preco}
                        </div>
                        <div>
                            <span>À vista no pix</span>
                        </div>
                    </div>                               
                    <a href="#">Comprar</a>
            </div>                                                        
        </div>`
    }

    secaoProdutos.innerHTML = template;
}