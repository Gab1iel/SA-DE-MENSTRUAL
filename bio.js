const header = document.querySelector("header")
let encolhido = false;

window.addEventListener("scroll", () => {

    if(!encolhido && window.scrollY > 120){
        header.classList.add("encolhido");
        encolhido = true
    }
    
    if (encolhido && window.scrollY < 60) {
        header.classList.remove("encolhido");
        encolhido = false
    }

});

const slides = document.querySelectorAll(".slide"); //quando o 'All' é adicionado ao 'querSelector' ele introdus todos os arquivos nomiados com o mesmo nome
let indice = 0;

function trocarSlide() {
            // código
    slides[indice].classList.remove("active")

    indice++;

    if (indice >= slides.length) {
        indice = 0;
    }

    slides[indice].classList.add("active");
    
}

setInterval(trocarSlide, 3000); // trocar a cada 3 segundos


const modal = document.getElementById("modal");
const imgP = document.getElementById("imagemExpandida");
const fechar = document.querySelector(".fechar");

slides.forEach(slides => {

    slides.addEventListener("click", () => {

        imgP.src = slides.src;

        modal.style.display = "flex";

    });
    
});

fechar.addEventListener("click", (e) => {
        modal.style.display = "none";

});

modal.addEventListener("click", (e) =>{
    if (e.target === modal) {
        modal.style.display = "none"
    }
})

//controle pelo teclado


document.addEventListener("keydown", (e) => {
    if (!modalAberto) return;

    if (e.key === "ArrowRight"){
        indiceAtual++;
        if ( indiceAtual >= slides.length) {
            indiceAtual = 0; //volta para o início
        }
        mostrarSlides(indiceAtual);
    }
    
    if (e.key === "ArrowLeft") {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = slides.length - 1; // vai para o útimo
        }
        mostrarSlides(indiceAtual)
        }
        
        if(e.key === "Escape") {
            fecharModal();
        }

    })