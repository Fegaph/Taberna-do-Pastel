    // Links ativos ao rolar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });

    // CONTATO //

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contato-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const mensagem = form.mensagem.value.trim();

    if(!nome || !mensagem){
      alert('Preencha todos os campos!');
      return;
    }

    const texto = `Olá, meu nome é ${nome}.\nMensagem: ${mensagem}`;
    const numeroWhats = '5571987680993'; // seu número
    const linkWhats = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;

    window.open(linkWhats, '_blank');
    form.reset();
  });
});
