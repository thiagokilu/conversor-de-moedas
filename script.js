        const url = 'https://economia.awesomeapi.com.br/last/'
        const coins = 'USD-BRL,EUR-BRL,BTC-BRL,BTC-USD,BTC-EUR,BRL-USD,BRL-EUR,USD-EUR'

        fetch(url + coins)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            const dolarReal = data.USDBRL
            const euroReal = data.EURBRL

            let estaData = new Date(dolarReal.create_date)

            document.getElementById('title')
            innerHTML = dolarReal.name
            document.getElementById('thisdate')
            .innerHTML = 'Data: ' + estaData.toLocaleString()
        

const calcular = document.getElementById("calcular");
function formula() {
  const valorIns = document.getElementById("valorIns").value;
  const moeda1 = document.getElementById("moeda1").value;
  const moeda2 = document.getElementById("moeda2").value;

  var dolarParaReal = data.USDBRL.bid
  var euroParaReal = data.EURBRL.bid;
  var btcParaReal = data.BTCBRL.bid;
  var btcParaDolar = data.BTCUSD.bid;
  var btcParaEuro = data.BTCEUR.bid;
  var realParadolar = data.BRLUSD.bid;
  var realParaEuro = data.BRLEUR.bid
  var dolarParaEuro = data.USDEUR.bid
  var euroParaDolar = data.USDEUR.bid

  if (moeda1 == 'dolar' & moeda2 == 'real') {
    var valorEmReal = (valorIns * dolarParaReal).toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL'
  }) ;

  } else if (moeda1 == 'euro' & moeda2 == 'real') {
    var valorEmReal = (valorIns * euroParaReal).toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL'
  });

  } else if (moeda1 == 'btc' & moeda2 == 'real') {
    var valorEmReal = (valorIns * btcParaReal).toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL'
  });  

} else if (moeda1 == 'btc' & moeda2 == 'dolar') {
  var valorEmReal = (valorIns * btcParaDolar).toLocaleString('pt-br',{
    style: 'currency',
    currency: 'USD'
});

} else if (moeda1 == 'btc' & moeda2 == 'euro') {
  var valorEmReal = (valorIns * btcParaEuro).toLocaleString('pt-br',{
    style: 'currency',
    currency: 'EUR'
});

  } else if (moeda1 == 'real' & moeda2 == 'dolar') {
    var valorEmReal = (valorIns * realParadolar).toLocaleString('pt-br',{
      style: 'currency',
      currency: 'USD'
  }); 

} else if (moeda1 == 'real' & moeda2 == 'euro') {
  var valorEmReal = (valorIns * realParaEuro).toLocaleString('pt-br',{
    style: 'currency',
    currency: 'EUR'
}); 

} else if (moeda1 == 'dolar' & moeda2 == 'euro') {
  var valorEmReal = (valorIns * dolarParaEuro).toLocaleString('pt-br',{
    style: 'currency',
    currency: 'EUR'
});

} else if (moeda1 == 'euro' & moeda2 == 'dolar') {
  var valorEmReal = (valorIns * euroParaDolar).toLocaleString('pt-br',{
    style: 'currency',
    currency: 'USD'
}); 

} else if (moeda1 == 'real' & moeda2 == 'btc') {
  var valorEmReal = 'Ainda não e possivel fazer esse tipo de conversão'

} else if (moeda1 == 'dolar' & moeda2 == 'btc') {
  var valorEmReal = 'Ainda não e possivel fazer esse tipo de conversão'

} else if (moeda1 == 'euro' & moeda2 == 'btc') {
  var valorEmReal = 'Ainda não e possivel fazer esse tipo de conversão'



}  
if (moeda2 == 'btc'){
  const resultado = document.getElementById("resultado");
  resultado.textContent =
  'Ainda não e possivel fazer esse tipo de conversão';
} else if(moeda1 == moeda2){
  const resultado = document.getElementById("resultado");
  resultado.textContent =
  "As noedas são iguais!";
} else {
  const resultado = document.getElementById("resultado");
  resultado.textContent =
  " Esse e seu valor convertido: " + valorEmReal;
} 
}
calcular.addEventListener("click", formula);
console.log(data)
})