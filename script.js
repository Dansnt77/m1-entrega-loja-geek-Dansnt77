const produtos = [
    {
        imagem: "./assets/img/painting/clock.jpg",
        titulo: "SmartWatch",
        preco: "R$:189,90",
        categoria: "paintings"
        
    },
    {
        imagem: "./assets/img/painting/gamepad.jpg",
        titulo: "Controle PS4",
        preco: "R$:259,90",
        categoria: "paintings"
    },
    {
        imagem: "./assets/img/painting/personagem.jpg",
        titulo: "C3 - PO",
        preco: "R$:89,90",
        categoria: "paintings"
    },
    {
        imagem: "./assets/img/actions/animewoman.jpg",
        titulo: "ASUKA - EVA",
        preco: "R$:159,90",
        categoria: "actions"
    },
    {
        imagem: "./assets/img/actions/dragonballpersonagem.jpg",
        titulo: "Goku",
        preco: "R$:199,90",
        categoria: "actions"
    },
    {
        imagem: "./assets/img/actions/starwarspersonagem.jpg",
        titulo: "Baby Yoda",
        preco: "R$:119,90",
        categoria: "actions",
    },
    
]
const listPaintings = []
const listActions = []

let produtosPaintings = document.querySelector(".produtosPaintings")
let produtosActions = document.querySelector(".produtosActions")

function separarPorLista(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].categoria == "paintings"){
            listPaintings.push(arr[index])
        }else{
            listActions.push(arr[index])
        }
        
    }
}
separarPorLista(produtos)

for (let index = 0; index < listPaintings.length; index++) {
    let card = document.createElement("li")
    card.classList = "card"
    let containerImagem = document.createElement("div")
    containerImagem.classList = "containerImg"
    let imagem = document.createElement("img")
    imagem.classList = "imagem"
    imagem.src = listPaintings[index].imagem
    imagem.alt = listPaintings[index].titulo
    let titulo = document.createElement("h2")
    titulo.classList = "h2title" 
    titulo.innerText = listPaintings[index].titulo
    let valor = document.createElement("h3")
    valor.innerText = listPaintings[index].preco
    valor.classList = "h3valor"
    card.append(containerImagem, titulo, valor,)
    containerImagem.append(imagem)
    produtosPaintings.append(card)
}

for (let index = 0; index < listActions.length; index++) {
    let card = document.createElement("li")
    card.classList = "card"
    let containerImagem = document.createElement("div")
    containerImagem.classList = "containerImg"
    let imagem = document.createElement("img")
    imagem.classList= "imagem"
    imagem.src = listActions[index].imagem
    imagem.alt = listActions[index].titulo
    let titulo = document.createElement("h2")
    titulo.classList = "h2title"
    titulo.innerText = listActions[index].titulo
    let valor = document.createElement("h3")
    valor.classList = "h3valor"
    valor.innerText = listActions[index].preco
    card.append(containerImagem, titulo, valor)
    containerImagem.append(imagem)
    produtosActions.append(card)

}
















