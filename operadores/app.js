let precoProdutoNormal = 250
let precoTaxado = 0.92  // o processo de taxa funciona dividindo 92 por 100 92/100 = 0.92
let precoParcelado = 2

function TaxaDoAmor(precoProdutoNormal, precoTaxado) {
    let juros = precoProdutoNormal * precoTaxado 
    let valorTotalFazOL = precoProdutoNormal + juros
    
    if ( precoProdutoNormal != precoTaxado ) {
        console.log('Seu valor foi taxado');
        console.log('Você pode parcelar caso deseje:', valorTotalFazOL / precoParcelado, 'reais' )
    } else {
        console.log('Você não foi taxado')
   }
    console.log('total de juros, faz o L:', valorTotalFazOL, 'reais')

}

TaxaDoAmor(precoProdutoNormal, precoTaxado)






