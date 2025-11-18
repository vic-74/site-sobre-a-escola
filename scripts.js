// Validação simples e alerta de envio
document.getElementById('contato-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    this.reset();
});
document.getElementById('contato-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    this.reset();
});
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões com data-popup
    const btns = document.querySelectorAll("[data-popup]");
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            const popupId = btn.getAttribute("data-popup");
            openPopup(popupId);
        });
    });

    // Seleciona todos os botões de fechar
    const closeBtns = document.querySelectorAll("[data-close]");
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const popupId = btn.getAttribute("data-close");
            closePopup(popupId);
        });
    });

    // Fechar pop-up ao clicar fora do conteúdo
    const popups = document.querySelectorAll(".popup");
    popups.forEach(p => {
        p.addEventListener("click", function(event) {
            if (event.target === p) {
                closePopup(p.id);
            }
        });
    });
});

// Função para abrir o pop-up
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "flex";
    }
}

// Função para fechar o pop-up
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
}
// ===== BOTÃO VOLTAR AO TOPO =====
const btnTopo = document.getElementById("btn-topo");

// Mostrar o botão quando rolar para baixo
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }
});

// Rolar suavemente até o topo quando clicado
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

