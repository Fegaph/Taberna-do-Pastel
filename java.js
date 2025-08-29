// 🔹 Filtragem de itens do cardápio
const filterButtons = document.querySelectorAll('.filtros button');
const items = document.querySelectorAll('.item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    // Atualiza botão ativo
    filterButtons.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');

    // Filtra itens
    items.forEach(item => {
      if(filter === 'todos' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 🔹 Carrinho
let carrinho = [];
const carrinhoItens = document.getElementById('carrinho-itens');
const totalEl = document.getElementById('total');

// Adicionar item ao carrinho
items.forEach(item => {
  const btn = item.querySelector('button');
  btn.addEventListener('click', () => {
    const nome = item.querySelector('h3').innerText;
    const preco = parseFloat(item.querySelector('h3').innerText.split('R$')[1].replace(',', '.'));

    carrinho.push({ nome, preco });
    atualizarCarrinho();
  });
});

// Atualizar carrinho
function atualizarCarrinho() {
  carrinhoItens.innerHTML = '';
  let total = 0;

  carrinho.forEach((produto, index) => {
    total += produto.preco;
    const div = document.createElement('div');
    div.classList.add('item-carrinho');
    div.innerHTML = `
      <span>${produto.nome}</span>
      <button data-index="${index}">❌</button>
    `;
    carrinhoItens.appendChild(div);
  });

  totalEl.innerText = `Total: R$${total.toFixed(2).replace('.', ',')}`;

  // Remover item
  const removeBtns = document.querySelectorAll('.item-carrinho button');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      carrinho.splice(index, 1);
      atualizarCarrinho();
    });
  });
}

// 🔹 Modal de checkout
const modal = document.getElementById('checkout-modal');
const finalizarBtn = document.getElementById('finalizar-pedido');
const closeModal = document.querySelector('.close');
const confirmarPedido = document.getElementById('confirmar-pedido');

finalizarBtn.addEventListener('click', () => {
  if(carrinho.length === 0) {
    alert('Adicione algum item ao carrinho antes de finalizar.');
    return;
  }
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

// 🔹 Confirmar pedido via WhatsApp
confirmarPedido.addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const pagamento = document.getElementById('pagamento').value;

  if(!nome || !endereco) {
    alert('Preencha todos os campos!');
    return;
  }

  let mensagem = `Olá, meu nome é ${nome}. Gostaria de fazer o pedido:\n`;
  carrinho.forEach(p => {
    mensagem += `- ${p.nome}\n`;
  });
  mensagem += `Total: ${totalEl.innerText.split(': ')[1]}\n`;
  mensagem += `Endereço: ${endereco}\nPagamento: ${pagamento}`;

  const whatsappUrl = `https://wa.me/5571987680993?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappUrl, '_blank');
  modal.style.display = 'none';
});

// 🔹 Fade-in ao rolar
const fadeItems = document.querySelectorAll('.item');

const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeItems.forEach(item => observer.observe(item));


