let email = document.getElementById("campo-email");

let listaProdutos = [
    {
        imagem :"imagens/produto.jpg",
        titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
        preco: "99,99",
    },
    {
        imagem :"imagens/produto.jpg",
        titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
        preco: "99,99",
    },
    {
        imagem :"imagens/produto.jpg",
        titulo: "Kit Teclado Mouse Gamer Azul Vx Gaming Grifo",
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
    let secaoProdutos = document.getElementById("espaco-mais-vendidos")
}