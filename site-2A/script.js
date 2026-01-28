// Emojis doces caindo
const docinhos = ["🍭", "🍬", "🍫", "🍩", "🧁"];
setInterval(() => {
  const doce = document.createElement("div");
  doce.classList.add("doce");
  doce.innerText = docinhos[Math.floor(Math.random() * docinhos.length)];
  doce.style.left = Math.random() * 100 + "vw";
  doce.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(doce);
  setTimeout(() => doce.remove(), 5000);
}, 300);

// Estilo inline
const style = document.createElement('style');
style.innerHTML = `
  .doce {
    position: fixed;
    top: -2rem;
    font-size: 1.5rem;
    z-index: 1000;
    animation: cair linear;
  }

  @keyframes cair {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);


 // 🧁 Filtro de categorias
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const categoria = btn.dataset.categoria;
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
      if (categoria === 'todos' || produto.dataset.categoria === categoria) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    });
  });
});

 // Adicionar produtos ao carrinho
 document.querySelectorAll('.adicionar-carrinho').forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.dataset.nome;
    const preco = parseFloat(botao.dataset.preco);
    const itemExistente = carrinho.find(item => item.nome === nome);
    if(itemExistente) {
      itemExistente.quantidade++;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }
    atualizarCarrinho();
  });
});

// Atualizar lista e total do carrinho
function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  let total = 0;
  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    const li = document.createElement('li');
    li.textContent = `${item.nome} x${item.quantidade}`;
    const span = document.createElement('span');
    span.textContent = `R$ ${(item.preco * item.quantidade).toFixed(2)}`;
    li.appendChild(span);
    listaCarrinho.appendChild(li);
  });
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Limpar carrinho
btnLimpar.addEventListener('click', () => {
  carrinho = [];
  atualizarCarrinho();
});

// Inicializa a exibição com todos produtos
window.addEventListener('load', () => {
  botoesFiltro[0].click();
});

document.addEventListener('DOMContentLoaded', function () {
  const estrelas = document.querySelectorAll('.estrela');
  const mensagem = document.getElementById('mensagem-avaliacao');

  estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
      const valor = parseInt(estrela.getAttribute('data-valor'));

      // Limpa seleção anterior
      estrelas.forEach(e => e.classList.remove('selecionada'));

      // Marca novas estrelas
      for (let i = 0; i < valor; i++) {
        estrelas[i].classList.add('selecionada');
      }

      mensagem.textContent = `Obrigado! Você avaliou com ${valor} estrela${valor > 1 ? 's' : ''}.`;
    });
  });
});

 
