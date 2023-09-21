function jogador(numV, numD) {
    let calculoVitoriaDerrota = numV - numD
    console.log(calculoVitoriaDerrota && calculoVitoriaDerrota >= 0 ? 'ferro': 'undefined')
    let resultadoDaConta = calculoVitoriaDerrota
    console.log('jogador', resultadoDaConta);
    return calculoVitoriaDerrota
}

console.log(jogador(20, 5));
