
    function verificarDoce(escolha) {
      const resultado = document.getElementById("resultado-jogo");
      if (escolha === '🧁') {
        resultado.textContent = "Parabéns! Você acertou e ganhou um desconto! 🏆";
      } else {
        resultado.textContent = "Ops! Tente de novo. 😅";
      }
    }

    function montarDoce() {
      const recheio = document.getElementById("recheio").value;
      const cobertura = document.getElementById("cobertura").value;
      const topper = document.getElementById("topper").value;
      document.getElementById("resultado-montagem").textContent =
        `Você montou um doce com recheio de ${recheio}, cobertura de ${cobertura} e topper de ${topper}! 🎂`;
    }

    function recomendarDoce() {
      const gosto = document.getElementById("gosto").value;
      let sugestao = "";
      if (gosto === "Brigadeiro") sugestao = "Experimente nosso Beijinho Gourmet!";
      else if (gosto === "Cupcake") sugestao = "Você vai amar nosso Bolo de Pote!";
      else sugestao = "Prove nosso Donuts com recheio de morango! 🍓";
      document.getElementById("recomendacao").textContent = sugestao;
    }
    function verResultadoQuiz() {
      const escolha = document.getElementById("preferencia").value;
      let resultado = "";
      if (escolha === "chocolate") resultado = "Você combina com nosso brigadeiro gourmet! 🍫";
      else if (escolha === "frutas") resultado = "Você vai amar nosso bolo de morango! 🍓";
      else resultado = "Experimente nosso cupcake de doce de leite! 🧁";
      document.getElementById("resultado-quiz").textContent = resultado;
    }

    function criarDoce() {
      const nome = document.getElementById("nomeDoce").value;
      const tipo = document.getElementById("tipoDoce").value;
      if (!nome) {
        alert("Digite o nome do doce!");
        return;
      }
      document.getElementById("resultado-doce").textContent = `Sua criação "${nome}" (${tipo}) foi enviada para análise! 🍬`;
    }

    function calcularParcelas() {
      const total = parseFloat(document.getElementById("valorTotal").value);
      const parcelas = parseInt(document.getElementById("parcelas").value);
      if (isNaN(total) || total <= 0) {
        alert("Digite um valor válido");
        return;
      }
      const valorParcela = (total / parcelas).toFixed(2);
      document.getElementById("resultado-parcela").textContent =
        `Você pagará ${parcelas}x de R$ ${valorParcela} 💳`;
    }