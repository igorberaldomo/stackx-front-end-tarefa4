let galeria = document.getElementById("galeria");
let err = document.getElementById("err");
var images = document.getElementById("imagens")
let hasimage = false
let hasclicked = false


function adicionarImagem() {
    nome = localStorage.getItem("nome");
    if (nome == null && hasclicked ==true) {
        nome = images.value;
    }
    console.log(nome);
    if (hasimage == true) {
        err.innerHTML = "Imagem já adicionada, delete para adicionar outra";
        err.style.color = "red";
        hasimage = true
    }
    if (hasimage == false) {
        if (images.value != null && nome != null) {
        let img = document.createElement("img");
        img.src = `img/${nome}.jpg`;
        img.style.width = "450px";
        img.style.height = "530px";
        galeria.appendChild(img);
        localStorage.setItem("nome", images.value);
        hasimage = true
        err.innerHTML = "";
        }
    }
    if (hasclicked == false) {
        hasclicked = true
    }
}

adicionarImagem()
function removerImagem() {
    if (hasimage == true) {
        galeria.removeChild(galeria.lastChild);
        hasimage = false
        err.innerHTML = "";
        localStorage.removeItem("nome");
    } else {
        err.innerHTML = "Nenhuma imagem adicionada";
        err.style.color = "red";
        hasimage = false
    }

}