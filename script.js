let titulo = document.getElementById("titulo");
let descricao = document.querySelector(".texto");
let button = document.getElementById("botao");

//evento que acontece após o click
botao.addEventListener("click", function()
    {
        titulo.innerHTML = "Em breve!";
        texto.innerHTML = "Logo os projetos estarão devidamente prontos!";        
    });

function estilizar(){
        texto.style.color = "red";
        titulo.style.color = "red";        
}