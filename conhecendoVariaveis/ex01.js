let nome = "Maria Socorro"
let idade = 80
let telefone = 992006162
let cpf = '066.431.681-68'
let endereço = 'Rua 05 Q 68 LT 09'

console.log(`Olá! o nome da minha vó é: ${nome}. Ela possui a idade de ${idade} anos, seu telefone para contato é ${telefone}`)
console.log('Por favor digite o seu cpf e endereço de sua vó: ' + cpf)
cpf++
console.log(cpf)
if (cpf.length === 0 || cpf !== cpf || cpf.length === 15) {
    console.log('CPF inválido')
} else if (cpf == cpf) {
    console.log('CPF válido')
} 
console.log(`Digite seu endereço: ${endereço}`)


