$ ( document ).ready(function() {

    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
    })

})

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
        imagem :"imagens/headset.jpg",
        titulo: "Headset Gamer Scorpion Com Fio Rgb Gh-x1000",
        preco: "99,99",
    },
    // {
    //     imagem :"imagens/produto.jpg",
    //     titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
    //     preco: "99,99",
    // },
    // {
    //     imagem :"imagens/produto.jpg",
    //     titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
    //     preco: "99,99",
    // },
]

let listaProdutosPerifericos = [
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
    // {
    //     imagem :"imagens/produto.jpg",
    //     titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
    //     preco: "99,99",
    // },
    // {
    //     imagem :"imagens/produto.jpg",
    //     titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
    //     preco: "99,99",
    // },
]

let listaProdutosEletronicos = [
    {
        imagem :"imagens/smartwatch.jpg",
        titulo: "Iwo 8 Lite Prata Relógio Smartwatch",
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
    // {
    //     imagem :"imagens/produto.jpg",
    //     titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
    //     preco: "99,99",
    // },
    // {
    //     imagem :"imagens/produto.jpg",
    //     titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
    //     preco: "99,99",
    // },
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
            <div class="container-card ">
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

function renderizarProdutosPerifericos() {
    let secaoProdutosPerifericos = document.getElementById("espaco-perifericos");

    let templatePerifericos = "";
    
    for (let index = 0; index < listaProdutosPerifericos.length; index++) {
        const produtoPerifericos = listaProdutosPerifericos[index];
        
        templatePerifericos += `<div class="container-card-externo">
            <div class="container-card">
                    <div>
                        <img src="${produtoPerifericos.imagem}" alt="Imagem do Produto">
                        <h3>${produtoPerifericos.titulo}</h3>
                    </div>
                    <div>
                        <div class="preco-produto">
                            R$ ${produtoPerifericos.preco}
                        </div>
                        <div>
                            <span>À vista no pix</span>
                        </div>
                    </div>                               
                    <a href="#">Comprar</a>
            </div>                                                        
        </div>`
        
    }    
    secaoProdutosPerifericos.innerHTML = templatePerifericos;
}

function renderizarProdutosEletronicos() {
    let secaoProdutosEletronicos = document.getElementById("espaco-eletronicos");

    let templateEletronicos = "";
    
    for (let index = 0; index < listaProdutosEletronicos.length; index++) {
        const produtoEletronicos = listaProdutosEletronicos[index];
        
        templateEletronicos += `<div class="container-card-externo">
            <div class="container-card">
                    <div>
                        <img src="${produtoEletronicos.imagem}" alt="Imagem do Produto">
                        <h3>${produtoEletronicos.titulo}</h3>
                    </div>
                    <div>
                        <div class="preco-produto">
                            R$ ${produtoEletronicos.preco}
                        </div>
                        <div>
                            <span>À vista no pix</span>
                        </div>
                    </div>                               
                    <a href="#">Comprar</a>
            </div>                                                        
        </div>`
        
    }    
    secaoProdutosEletronicos.innerHTML = templateEletronicos;
}