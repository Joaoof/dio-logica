let precoProdutoNormal = 250
let precoTaxado = 0.92 // o processo de taxa funciona dividindo 92 por 100 92/100 = 0.92
let precoParcelado = 2

let juros = precoProdutoNormal * precoTaxado 
let valorTotalFazOL = precoProdutoNormal + juros

console.log('total de juros, faz o L:', valorTotalFazOL, 'reais')