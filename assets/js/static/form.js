function abrirFormulario() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column"
}

function fecharFormulario() {
    const content = document.getElementById("overlay");
    content.style.display = "none";
}