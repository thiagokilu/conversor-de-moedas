const moeda1 = document.getElementById("moeda1"); // Referência ao elemento <select>
let moeda = "USD";
const dias = "30";
let arrValores = [];
let maiorValor = null;
let menorValor = null;

// Adiciona o evento "change" ao <select>
moeda1.addEventListener("change", function () {
  moeda = moeda1.value; // Pega o valor selecionado
  console.log("Selecionou:", moeda);
  getcotacao(moeda); // Chama a função getcotacao()
});

// Exemplo da função getcotacao (substitua pelo código real)

async function getcotacao(moeda) {
  arrValores = [];
  try {
    const respostaApi = await fetch(
      `https://economia.awesomeapi.com.br/json/daily/${moeda}/${dias}`
    );
    const dados = await respostaApi.json();

    for (let i = 0; i < dados.length; i++) {
      const valorAtual = parseFloat(dados[i]["high"]);
      if (i === 0 || valorAtual > maiorValor) {
        maiorValor = valorAtual;
      }
      if (i === 0 || valorAtual < menorValor) {
        menorValor = valorAtual;
      }
      arrValores.push(valorAtual);
    }

    console.log("Maior valor:", maiorValor);
    console.log("Menor valor:", menorValor);
    console.log("Valores:", arrValores);

    // Após carregar os dados, renderiza o gráfico
    renderizaGrafico();
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
  } finally {
    console.log("Finalizando a execução da API");
  }
}

let graficoAtual;

function renderizaGrafico() {
  const ctx = document.getElementById("grafico1").getContext("2d");

  // Limpa o gráfico anterior, se existir
  if (graficoAtual) {
    graficoAtual.destroy();
  }

  // Cria o novo gráfico
  graficoAtual = new Chart(ctx, {
    type: "line",
    data: {
      labels: arrValores.map((_, i) => i + 1),
      datasets: [
        {
          label: "Cotação",
          data: arrValores,
          borderWidth: 1,
          borderColor: "blue",
          backgroundColor: "rgba(0, 123, 255, 0.2)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Cotação Diária",
        },
      },
      scales: {
        y: {
          min: menorValor,
          max: maiorValor,
        },
      },
      layout: {
        padding: {
          top: 20,
        },
      },
    },
  });
}

getcotacao(moeda);
// Executa a função para buscar os dados e renderizar o gráfico
