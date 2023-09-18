let precoProdutoNormal = 250
let precoTaxado = 0.92  // o processo de taxa funciona dividindo 92 por 100 92/100 = 0.92
let precoParcelado = 2

function TaxaDoAmor() {
    const precoProdutoNormal = parseFloat(document.getElementById('precoProduto'))
    const precoTaxado = parseFloat(document.getElementById('taxaJuros').value)

    if (isNaN(precoProdutoNormal) || isNaN(precoTaxado)) {
        alert('Por favor, insira valores válidos.')
        return
    }

    let juros = precoProdutoNormal * precoTaxado 
    let valorTotalFazOL = precoProdutoNormal + juros

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Valor do produto: R$ ${precoProdutoNormal.toFixed(2)}</p>
        <p>Juros: R$ ${juros.toFixed(2)}</p>
        <p>Valor total com juros: R$ ${valorTotalFazOL.toFixed(2)}</p>
    `;
    
    if ( precoProdutoNormal != precoTaxado ) {
        console.log('Seu valor foi taxado');
        console.log('Você pode parcelar caso deseje:', valorTotalFazOL / precoParcelado, 'reais' )
    } else {
        console.log('Você não foi taxado')
   }
    console.log('total de juros, faz o L:', valorTotalFazOL, 'reais')
}

TaxaDoAmor(precoProdutoNormal, precoTaxado)





