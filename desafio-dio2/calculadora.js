function jogador(numV, numD) {
    let calculoVitoriaDerrota = numV - numD
    if (calculoVitoriaDerrota <= 10) {
        return('Ferro')
    } 
    if (calculoVitoriaDerrota >= 11 && calculoVitoriaDerrota <= 20) {
        return('Bronze')
    } 
    if (calculoVitoriaDerrota >= 21 && calculoVitoriaDerrota <= 50) {
        return('Prata')
    } 
    if (calculoVitoriaDerrota >= 51 && calculoVitoriaDerrota <= 80) {
        return('Ouro')
    } 
    if (calculoVitoriaDerrota >= 81 && calculoVitoriaDerrota <= 90) {
        return('Diamante')
    } 
    if (calculoVitoriaDerrota >= 91 && calculoVitoriaDerrota <= 100) {
        return('Lendário')
    } 
    if (calculoVitoriaDerrota >= 101) {
        return('Imortal')
    } 
    return calculoVitoriaDerrota
}


// refatorando
const winLoser = {
    resultOfRank: 200 - 5
}

function vitoriaDerrota(winLoser) {
  console.log(winLoser.resultOfRank <= 10 ? 'Você é Ferro' : '')
  console.log(winLoser.resultOfRank >= 11 && winLoser.resultOfRank <= 20 ? 'Você é Bronze': '')
  console.log(winLoser.resultOfRank >= 21 && winLoser.resultOfRank <= 50 ? 'Você é prata Prata': '')
  console.log(winLoser.resultOfRank >= 51 && winLoser.resultOfRank<= 80 ? 'Você é prata Ouro': '')
  console.log(winLoser.resultOfRank >= 81 && winLoser.resultOfRank<= 90 ? 'Você é prata Diamante': '')
  console.log(winLoser.resultOfRank >= 91 && winLoser.resultOfRank <= 100 ? 'Você é prata Lendário': '')
  console.log(winLoser.resultOfRank >= 101 ? 'Você é Imortal' : '')
}

vitoriaDerrota(winLoser)

  

